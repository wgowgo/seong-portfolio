import type { OverlayId } from "@/data/site";
import { site } from "@/data/site";
import { ProjectBoard } from "./ProjectBoard";

const TITLES: Record<OverlayId, string> = {
  projects: "Projects",
  resume: "Resume",
  awards: "Awards",
  lab: "Lab",
  contact: "Contact",
  writing: "Writing",
  github: "GitHub",
  photos: "Photos",
};

export function panelTitle(id: OverlayId) {
  return TITLES[id];
}

export function Panel({ id }: { id: OverlayId }) {
  switch (id) {
    case "projects":
      return <ProjectsPanel />;
    case "resume":
      return <ResumePanel />;
    case "awards":
      return <ListPanel items={site.awards} empty="아직 비어 있어요." />;
    case "lab":
      return <ListPanel items={site.lab} empty="아직 비어 있어요." />;
    case "writing":
      return (
        <ul className="list">
          {site.writing.map((w) => (
            <li key={w.title}>
              <a href={w.href} target="_blank" rel="noreferrer">
                <strong>{w.title}</strong>
                <span>{w.date}</span>
              </a>
            </li>
          ))}
        </ul>
      );
    case "github":
      return (
        <ul className="list">
          {site.repos.map((r) => (
            <li key={r.name}>
              <a href={r.href} target="_blank" rel="noreferrer">
                <strong>
                  {r.name}
                  {r.stars > 0 ? ` · ${r.stars}★` : ""}
                </strong>
                <span>{r.blurb}</span>
              </a>
            </li>
          ))}
        </ul>
      );
    case "photos":
      return (
        <div className="photo-grid">
          {site.photos.map((p) => (
            <div
              key={p.alt}
              className="photo-tile"
              style={{ background: p.color }}
              title={p.alt}
              role="img"
              aria-label={p.alt}
            />
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="resume-card">
          <h3>Contact</h3>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="bio-links">
            <a href={site.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </div>
      );
    default:
      return null;
  }
}

function ProjectsPanel() {
  return <ProjectBoard />;
}

function ResumePanel() {
  return (
    <div className="resume-card">
      <h3>{site.name}</h3>
      <p className="bio-role">{site.resume.headline}</p>
      <p className="bio-links">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <span aria-hidden="true"> · </span>
        <a href={site.socials.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
      <div className="skills">
        {site.resume.skills.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <p className="section-label">Experience</p>
      <ol className="cv-list">
        {site.timeline.map((item) => (
          <li className="cv-row" key={item.date + item.title}>
            <span className="cv-date">{item.date}</span>
            <span className="cv-main">
              <strong>{item.title}</strong>
              <span className="cv-meta">
                {item.place}
                <span className="role">{item.role}</span>
              </span>
            </span>
          </li>
        ))}
      </ol>
      <p className="section-label resume-picks-label">Selected</p>
      <ul className="list resume-picks">
        {site.resume.selected.map((item) => (
          <li key={item.title}>
            <a href={item.href} target="_blank" rel="noreferrer">
              <strong>{item.title}</strong>
              <span>{item.meta}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ListPanel({
  items,
}: {
  items: readonly { title: string; meta?: string; href?: string }[];
  empty: string;
}) {
  return (
    <div className="list">
      {items.map((item) => {
        const body = (
          <>
            <strong>{item.title}</strong>
            {item.meta ? <span>{item.meta}</span> : null}
          </>
        );
        return item.href ? (
          <a key={item.title} href={item.href} target="_blank" rel="noreferrer">
            {body}
          </a>
        ) : (
          <div key={item.title}>{body}</div>
        );
      })}
    </div>
  );
}
