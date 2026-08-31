"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";

export function OverlayWindow({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const headingId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const root = document.documentElement;
    const sbw = Math.max(0, window.innerWidth - root.clientWidth);
    root.style.setProperty("--sbw", `${sbw}px`);
    root.classList.add("overlay-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      root.classList.remove("overlay-open");
      root.style.removeProperty("--sbw");
      prev?.focus();
    };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-labelledby={headingId}>
      <button type="button" className="dim" onClick={onClose} aria-label="닫기" />
      <div className="chrome">
        <h2 id={headingId}>{title}</h2>
        <button
          ref={closeRef}
          type="button"
          className="chrome-close"
          onClick={onClose}
          aria-label="닫기"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="overlay-body" onClick={onClose}>
        <div className="panel" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 3l10 10M13 3L3 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
