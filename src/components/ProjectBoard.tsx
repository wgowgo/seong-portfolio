"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { loadPublicRepos, type GhRepo } from "@/lib/github";

function githubUser() {
  try {
    return new URL(site.socials.github).pathname.split("/").filter(Boolean)[0] ?? "wgowgo";
  } catch {
    return "wgowgo";
  }
}

function fallbackRepos(): GhRepo[] {
  const user = githubUser();
  return site.projects.map((p) => {
    const slug = p.href.split("/").filter(Boolean).pop() ?? p.title;
    return {
      name: slug,
      label: p.title,
      description: p.blurb,
      href: p.href,
      language: null,
      stars: 0,
      image: `https://opengraph.githubassets.com/1/${user}/${slug}`,
    };
  });
}

export function ProjectBoard() {
  const [repos, setRepos] = useState<GhRepo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let live = true;
    loadPublicRepos(githubUser(), site.githubHide)
      .then((list) => {
        if (live) setRepos([...site.boardPins, ...list]);
      })
      .catch(() => {
        if (!live) return;
        setFailed(true);
        setRepos([...site.boardPins, ...fallbackRepos()]);
      });
    return () => {
      live = false;
    };
  }, []);

  if (!repos) {
    return (
      <div className="pin-board" aria-busy="true" aria-label="Loading repositories">
        <span className="pin-year" aria-hidden="true">
          {new Date().getFullYear()}
        </span>
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="pin-card pin-skel" />
        ))}
      </div>
    );
  }

  return (
    <>
      {failed ? (
        <p className="pin-note">Could not reach GitHub, so this is the saved list.</p>
      ) : null}
      <div className="pin-board">
        <span className="pin-year" aria-hidden="true">
          {new Date().getFullYear()}
        </span>
        {repos.map((repo) => (
          <a
            key={repo.name}
            className="pin-card"
            href={repo.href}
            target={repo.href.startsWith("/") ? undefined : "_blank"}
            rel={repo.href.startsWith("/") ? undefined : "noreferrer"}
          >
            <span className="pin-head" aria-hidden="true" />
            <img
              className={repo.pageShot ? "pin-shot pin-shot-page" : "pin-shot"}
              src={repo.image}
              alt=""
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="pin-body">
              <strong>{repo.label}</strong>
              {repo.description ? <p>{repo.description}</p> : null}
              <span className="pin-meta">
                {repo.language ? <em>{repo.language}</em> : null}
                {repo.badge ? <em>{repo.badge}</em> : null}
                {repo.stars > 0 ? <em>{repo.stars}★</em> : null}
              </span>
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
