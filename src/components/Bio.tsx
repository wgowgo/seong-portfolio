import { site } from "@/data/site";

export function Bio() {
  return (
    <section className="bio" aria-label="About">
      <h1>{site.name}</h1>
      <p className="bio-role">{site.role}</p>
      <p className="bio-links">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <span aria-hidden="true"> · </span>
        <a href={site.socials.github}>GitHub</a>
      </p>
    </section>
  );
}
