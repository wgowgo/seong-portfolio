"use client";

import { useCallback, useState } from "react";
import type { OverlayId } from "@/data/site";
import { DeskScene } from "./DeskScene";
import { OverlayWindow } from "./OverlayWindow";
import { Panel, panelTitle } from "./Panel";
import { Bio } from "./Bio";
import { Timeline } from "./Timeline";
import { NightToggle } from "./NightToggle";

const MOBILE_LINKS: { id: OverlayId; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "awards", label: "Awards" },
  { id: "lab", label: "Lab" },
  { id: "writing", label: "Writing" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export function Portfolio() {
  const [open, setOpen] = useState<OverlayId | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <a className="skip" href="#bio">
        Skip to content
      </a>
      <NightToggle />
      <main>
        <div className="stage">
          <DeskScene onOpen={setOpen} />
        </div>
        <nav className="mobile-nav" aria-label="Shortcuts">
          {MOBILE_LINKS.map((l) => (
            <button key={l.id} type="button" onClick={() => setOpen(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>
        <div id="bio">
          <Bio />
        </div>
        <Timeline />
      </main>
      {open ? (
        <OverlayWindow title={panelTitle(open)} onClose={close}>
          <Panel id={open} />
        </OverlayWindow>
      ) : null}
    </>
  );
}
