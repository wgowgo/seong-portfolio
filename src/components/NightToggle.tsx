"use client";

export function NightToggle() {
  return (
    <button
      type="button"
      className="night-toggle"
      aria-label="Toggle day and night"
      onClick={() => {
        const html = document.documentElement;
        const next = html.getAttribute("data-theme") === "night" ? "day" : "night";
        html.setAttribute("data-theme", next);
      }}
    >
      <svg
        className="toggle-icon toggle-sun"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3.6" />
        <path
          fill="none"
          d="M12 3.2v1.7M12 19.1v1.7M20.8 12h-1.7M4.9 12H3.2M18.3 5.7l-1.2 1.2M7 17.1 5.8 18.3M18.3 18.3 17.1 17M7 6.9 5.8 5.7"
        />
      </svg>
      <svg
        className="toggle-icon toggle-moon"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
      >
        <path d="M14.6 4.1A8.1 8.1 0 1 0 19.9 15.2 6.3 6.3 0 0 1 14.6 4.1Z" />
      </svg>
    </button>
  );
}
