import { site } from "@/data/site";

function dateTime(date: string) {
  return date.replace(/\./g, "-");
}

function splitNotes<T>(items: readonly T[]) {
  const mid = Math.ceil(items.length / 2) || 0;
  return [items.slice(0, mid), items.slice(mid)] as const;
}

function Spine() {
  return (
    <div className="write-spine" aria-hidden="true">
      {Array.from({ length: 8 }, (_, i) => (
        <span key={i} className="write-hole" />
      ))}
    </div>
  );
}

function Entry({ title, date, href }: { title: string; date: string; href: string }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer">
        <time dateTime={dateTime(date)}>{date}</time>
        <strong>{title}</strong>
      </a>
    </li>
  );
}

export function WritingPad() {
  const notes = site.writing;
  const [left, right] = splitNotes(notes);

  return (
    <div className="write-book">
      <Spine />
      <div className="write-inner">
        <p className="write-lede">Study notes from the notebook on the desk.</p>
        <div className="write-spread">
          <section className="write-page write-page-left" aria-label="Left page">
            {left.length ? (
              <ol className="write-entries">
                {left.map((w) => (
                  <Entry key={w.href} {...w} />
                ))}
              </ol>
            ) : (
              <p className="write-empty">Nothing written yet.</p>
            )}
          </section>
          <section className="write-page write-page-right" aria-label="Right page">
            {right.length ? (
              <ol className="write-entries" start={left.length + 1}>
                {right.map((w) => (
                  <Entry key={w.href} {...w} />
                ))}
              </ol>
            ) : null}
          </section>
        </div>
      </div>
    </div>
  );
}
