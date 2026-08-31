import { site } from "@/data/site";
import { DoodleMug } from "./doodles";

function mailFor(role: string) {
  const subject = encodeURIComponent(`[${role}]`);
  return `mailto:${site.email}?subject=${subject}`;
}

export function ContactMug() {
  return (
    <div className="mug-desk">
      <div className="mug-side">
        <DoodleMug />
        <a
          className="mug-gh"
          href={site.socials.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className="mug-cards-wrap">
        <p className="mug-lede">Cards by the mug.</p>
        <ul className="mug-cards">
          {site.contactHats.map((hat) => (
            <li key={hat.role}>
              <a className="mug-card" href={mailFor(hat.role)}>
                <em>{hat.role}</em>
                <strong>{site.name}</strong>
                <span className="mug-place">{hat.place}</span>
                <span className="mug-note">{hat.note}</span>
                <span className="mug-mail">{site.email}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
