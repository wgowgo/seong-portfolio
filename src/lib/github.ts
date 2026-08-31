export function githubLogin(profileUrl: string) {
  try {
    return new URL(profileUrl).pathname.split("/").filter(Boolean)[0] ?? "wgowgo";
  } catch {
    return "wgowgo";
  }
}

export type GhRepo = {
  name: string;
  label: string;
  description: string;
  href: string;
  language: string | null;
  stars: number;
  image: string;
  badge?: string;
};

const CACHE_KEY = "seong-gh-repos-v1";
const CACHE_MS = 15 * 60 * 1000;

type CacheShape = { at: number; user: string; repos: GhRepo[] };

type ApiRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  owner: { login: string };
};

function prettyName(name: string) {
  return name.replace(/[-_]+/g, " ").trim();
}

function mapRepo(r: ApiRepo): GhRepo {
  const owner = r.owner.login;
  return {
    name: r.name,
    label: prettyName(r.name),
    description: (r.description ?? "").trim(),
    href: r.html_url,
    language: r.language,
    stars: r.stargazers_count,
    image: `https://opengraph.githubassets.com/${encodeURIComponent(r.pushed_at)}/${owner}/${r.name}`,
  };
}

function readCache(user: string): GhRepo[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as CacheShape;
    if (data.user !== user) return null;
    if (Date.now() - data.at > CACHE_MS) return null;
    return data.repos;
  } catch {
    return null;
  }
}

function writeCache(user: string, repos: GhRepo[]) {
  try {
    const data: CacheShape = { at: Date.now(), user, repos };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    /* private mode */
  }
}

export async function loadPublicRepos(
  user: string,
  hide: readonly string[],
): Promise<GhRepo[]> {
  const cached = readCache(user);
  const source =
    cached ??
    (await (async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`,
        { headers: { Accept: "application/vnd.github+json" } },
      );
      if (!res.ok) throw new Error(`GitHub ${res.status}`);
      const raw = (await res.json()) as ApiRepo[];
      const repos = raw
        .filter((r) => !r.fork && !r.archived)
        .map(mapRepo);
      writeCache(user, repos);
      return repos;
    })());

  const skip = new Set(hide);
  return source.filter((r) => !skip.has(r.name));
}

export type GhDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const GRASS_TTL = 15 * 60 * 1000;
const grassKey = (user: string) => `seong-grass-v1:${user}`;

type GrassCache = { at: number; days: GhDay[]; total: number };

function readGrass(user: string): GrassCache | null {
  try {
    const raw = sessionStorage.getItem(grassKey(user));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GrassCache;
    if (Date.now() - parsed.at > GRASS_TTL) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeGrass(user: string, days: GhDay[], total: number) {
  try {
    sessionStorage.setItem(
      grassKey(user),
      JSON.stringify({ at: Date.now(), days, total } satisfies GrassCache),
    );
  } catch {
    /* quota */
  }
}

let grassInflight: Promise<{ days: GhDay[]; total: number }> | null = null;

function clampLevel(n: number): GhDay["level"] {
  if (n <= 0) return 0;
  if (n >= 4) return 4;
  return n as GhDay["level"];
}

/** Pad so the grid starts on Sunday, matching GitHub's calendar. */
function padToSunday(days: GhDay[]): GhDay[] {
  if (!days.length) return days;
  const first = new Date(`${days[0].date}T00:00:00Z`);
  const pad = first.getUTCDay();
  if (!pad) return days;
  const extras: GhDay[] = [];
  for (let i = pad; i > 0; i--) {
    const d = new Date(first);
    d.setUTCDate(d.getUTCDate() - i);
    extras.push({
      date: d.toISOString().slice(0, 10),
      count: 0,
      level: 0,
    });
  }
  return [...extras, ...days];
}

export async function loadLastYearGrass(user: string): Promise<{
  days: GhDay[];
  total: number;
} | null> {
  const cached = readGrass(user);
  if (cached) return { days: cached.days, total: cached.total };

  const pending =
    grassInflight ??
    (async () => {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(user)}?y=last`,
      );
      if (!res.ok) throw new Error(`grass ${res.status}`);
      const json = (await res.json()) as {
        total?: { lastYear?: number };
        contributions?: { date: string; count: number; level: number }[];
      };
      const days = padToSunday(
        (json.contributions ?? []).map((d) => ({
          date: d.date,
          count: d.count,
          level: clampLevel(d.level),
        })),
      );
      const total =
        json.total?.lastYear ?? days.reduce((n, d) => n + d.count, 0);
      writeGrass(user, days, total);
      return { days, total };
    })();

  grassInflight = pending.finally(() => {
    grassInflight = null;
  });

  try {
    return await pending;
  } catch {
    return null;
  }
}
