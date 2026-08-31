import { site } from "@/data/site";

export function Timeline() {
  return (
    <section className="timeline" aria-label="Experience">
      <h2 className="section-label">Experience</h2>
      <ol className="cv-list">
        {site.timeline.map((item) => (
          <li className="cv-row" key={item.title + item.date}>
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
    </section>
  );
}
