import { site } from "@/data/site";
import { DoodleCans } from "./doodles";

export function LabDrawer() {
  if (!site.lab.length) {
    return <p className="tape-empty">Nothing on the bench yet.</p>;
  }

  return (
    <div className="lab-cans">
      <DoodleCans />
      <p className="lab-lede">From the headphones.</p>
      <ul className="lab-scraps">
        {site.lab.map((item) => (
          <li key={item.title}>
            <a className="lab-scrap" href={item.href} target="_blank" rel="noreferrer">
              <strong>{item.title}</strong>
              {item.meta ? <span>{item.meta}</span> : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
