import type { OverlayId } from "@/data/site";
import { site } from "@/data/site";
import { ProjectBoard } from "./ProjectBoard";
import { GithubPack } from "./GithubPack";
import { WritingPad } from "./WritingPad";
import { ResumeLaptop } from "./ResumeLaptop";
import { AwardsCase } from "./AwardsCase";
import { LabDrawer } from "./LabDrawer";
import { ContactMug } from "./ContactMug";

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
      return <ResumeLaptop />;
    case "awards":
      return <AwardsCase />;
    case "lab":
      return <LabDrawer />;
    case "writing":
      return <WritingPad />;
    case "github":
      return <GithubPack />;
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
      return <ContactMug />;
    default:
      return null;
  }
}

function ProjectsPanel() {
  return <ProjectBoard />;
}
