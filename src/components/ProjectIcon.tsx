import type { Project } from "@/data/site";

export function ProjectIcon({
  name,
  color,
}: {
  name: Project["icon"];
  color: string;
}) {
  const stroke = { fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "radio":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="8" width="18" height="12" rx="2" {...stroke} />
          <path d="M7 8L16 3" {...stroke} />
          <circle cx="9" cy="14" r="2" {...stroke} />
        </svg>
      );
    case "wrench":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 7l3-3 3 3-3 3M4 20l8-8" {...stroke} />
          <path d="M14 7a4 4 0 1 0-4 4" {...stroke} />
        </svg>
      );
    case "shuffle":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 8h4l12 8h4M4 16h4l4-3" {...stroke} />
          <path d="M16 7l4 1-1 4M16 17l4-1-1-4" {...stroke} />
        </svg>
      );
    case "pencil":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 20l4-1 11-11-3-3L5 16z" {...stroke} />
          <path d="M14 7l3 3" {...stroke} />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5h7a3 3 0 0 1 3 3v11H7a3 3 0 0 0-3 3z" {...stroke} />
          <path d="M20 5h-7a3 3 0 0 0-3 3v11h7a3 3 0 0 1 3 3z" {...stroke} />
        </svg>
      );
    case "smile":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" {...stroke} />
          <path d="M9 10h.01M15 10h.01M8.5 14c1 2 6 2 7 0" {...stroke} />
        </svg>
      );
    case "flag":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 4v16M6 4h10l-2 4 2 4H6" {...stroke} />
        </svg>
      );
    case "plane":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l18-8-8 18-2-7z" {...stroke} />
        </svg>
      );
    case "beaker":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 3h6M10 3v6L5 19h14L14 9V3" {...stroke} />
        </svg>
      );
    case "game":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="8" width="18" height="10" rx="4" {...stroke} />
          <path d="M8 13h4M10 11v4M16 12h.01M18 14h.01" {...stroke} />
        </svg>
      );
    default:
      return null;
  }
}
