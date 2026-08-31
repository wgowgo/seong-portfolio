import { site } from "@/data/site";

export function AwardsCase() {
  if (!site.awards.length) {
    return <p className="award-empty">Nothing on the board yet.</p>;
  }

  return (
    <div className="award-cork">
      <div className="award-cork-inner">
        <p className="award-lede">Pinned to the corkboard.</p>
        <ol className="award-notes">
          {site.awards.map((item) => (
            <li key={item.title} className="award-note">
              <span className="award-pin" aria-hidden="true" />
              {item.meta ? <time>{item.meta}</time> : null}
              <strong>{item.title}</strong>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
