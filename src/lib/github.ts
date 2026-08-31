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
