import { site } from "@/data/site";
import { DoodleSmile, DoodleTick } from "./doodles";

export function ResumeLaptop() {
  return (
    <div className="lap">
      <DoodleSmile />
      <div className="lap-screen">
        <header className="lap-id">
          <h3>{site.name}</h3>
          <p className="lap-role">{site.resume.headline}</p>
          <a className="lap-mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </header>
        <ol className="lap-jobs">
          {site.timeline.map((item) => (
            <li key={item.date + item.title}>
              <span className="lap-tick">
                <DoodleTick />
              </span>
              <time>{item.date}</time>
              <strong>{item.title}</strong>
              <span>
                {item.place}
                <em>{item.role}</em>
              </span>
            </li>
          ))}
        </ol>
        <ul className="lap-tools" aria-label="Skills">
          {site.resume.skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <ul className="lap-also" aria-label="Selected work">
          {site.resume.selected.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                target={item.href.startsWith("/") ? undefined : "_blank"}
                rel={item.href.startsWith("/") ? undefined : "noreferrer"}
              >
                <strong>{item.title}</strong>
                <span>{item.meta}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <span className="lap-hinge" aria-hidden="true" />
    </div>
  );
}
