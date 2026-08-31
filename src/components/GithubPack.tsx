"use client";

import { useEffect, useMemo, useState } from "react";
import { site } from "@/data/site";
import {
  githubLogin,
  loadLastYearGrass,
  loadPublicRepos,
  type GhDay,
  type GhRepo,
} from "@/lib/github";

const COLS = 20;
const ROWS = 7;

function fallbackRepos(): GhRepo[] {
  const user = githubLogin(site.socials.github);
  return site.repos.map((r) => ({
    name: r.name,
    label: r.name.replace(/[-_]+/g, " "),
    description: r.blurb,
    href: r.href,
    language: null,
    stars: r.stars,
    image: `https://opengraph.githubassets.com/1/${user}/${r.name}`,
  }));
}

function inkLevel(seed: string, i: number) {
  let n = i + 17;
  for (const c of seed) n = (n * 33 + c.charCodeAt(0)) >>> 0;
  return n % 5;
}

function shortId(name: string) {
  let n = 0;
  for (const c of name) n = (n * 31 + c.charCodeAt(0)) >>> 0;
  return n.toString(16).padStart(4, "0").slice(0, 4);
}

function dayLabel(day: GhDay) {
  const n = day.count;
  const word = n === 1 ? "contribution" : "contributions";
  return `${n} ${word} on ${day.date}`;
}

export function GithubPack() {
  const user = githubLogin(site.socials.github);
  const [repos, setRepos] = useState<GhRepo[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [grass, setGrass] = useState<{ days: GhDay[]; total: number } | null>(
    null,
  );
  const [grassFailed, setGrassFailed] = useState(false);

  useEffect(() => {
    let live = true;
    loadPublicRepos(user, site.githubHide)
      .then((list) => {
        if (live) setRepos(list);
      })
      .catch(() => {
        if (!live) return;
        setFailed(true);
        setRepos(fallbackRepos());
      });
    loadLastYearGrass(user)
      .then((data) => {
        if (!live) return;
        if (data?.days.length) setGrass(data);
        else setGrassFailed(true);
      })
      .catch(() => {
        if (live) setGrassFailed(true);
      });
    return () => {
      live = false;
    };
  }, [user]);

  const decoCells = useMemo(
    () => Array.from({ length: ROWS * COLS }, (_, i) => inkLevel(user, i)),
    [user],
  );

  const graph = grass ? (
    <div
      className="gh-graph"
      role="img"
      aria-label={`${grass.total} GitHub contributions in the last year`}
    >
      {grass.days.map((day) => (
        <span
          key={day.date}
          className={`gh-cell gh-cell-${day.level}`}
          title={dayLabel(day)}
        />
      ))}
    </div>
  ) : (
    <div className="gh-graph" aria-hidden="true">
      {decoCells.map((lvl, i) => (
        <span key={i} className={`gh-cell gh-cell-${lvl}`} />
      ))}
    </div>
  );

  const caption = grass
    ? `${grass.total.toLocaleString("en-US")} contributions in the last year.`
    : grassFailed
      ? "Could not load the contribution graph."
      : "A year of commits, drawn like fabric in the bag.";

  if (!repos) {
    return (
      <div className="gh-pack" aria-busy="true" aria-label="Loading GitHub">
        <div className="gh-pack-head">
          <p className="gh-handle">@{user}</p>
        </div>
        {graph}
        <div className="gh-slips">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="gh-slip gh-skel" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {failed ? (
        <p className="pin-note">Could not reach GitHub, so this is the saved list.</p>
      ) : null}
      <div className="gh-pack">
        <div className="gh-pack-head">
          <a
            className="gh-handle"
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            @{user}
          </a>
        </div>
        {graph}
        <p className="gh-caption">{caption}</p>
        <div className="gh-slips">
          {repos.map((repo) => (
            <a
              key={repo.name}
              className="gh-slip"
              href={repo.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="gh-id" aria-hidden="true">
                {shortId(repo.name)}
              </span>
              <span className="gh-slip-body">
                <strong>{repo.label}</strong>
                {repo.description ? <p>{repo.description}</p> : null}
                <span className="pin-meta">
                  {repo.language ? <em>{repo.language}</em> : null}
                  {repo.stars > 0 ? <em>{repo.stars}★</em> : null}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
