import { site } from "@/data/site";
import { DoodleMug } from "./doodles";

function mailFor(role: string) {
  const subject = encodeURIComponent(`[${role}]`);
  return `mailto:${site.email}?subject=${subject}`;
}

function hostOf(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
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
          {site.contactHats.map((hat) => {
            const href = hat.href ?? mailFor(hat.role);
            const external = Boolean(hat.href);
            return (
              <li key={hat.role}>
                <a
                  className="mug-card"
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  <em>{hat.role}</em>
                  <strong>{site.name}</strong>
                  <span className="mug-place">{hat.place}</span>
                  <span className="mug-note">{hat.note}</span>
                  <span className="mug-mail">
                    {hat.href ? hostOf(hat.href) : site.email}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
