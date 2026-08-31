const ink = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function DoodleSmile() {
  return (
    <svg className="lap-smile" viewBox="0 0 88 52" aria-hidden="true">
      <ellipse cx="24" cy="18" rx="9" ry="8" fill="oklch(0.9 0.05 85)" />
      <ellipse cx="58" cy="14" rx="10" ry="9" fill="oklch(0.9 0.05 85)" />
      <path
        d="M18 32 c12 18 32 14 50 -8"
        fill="none"
        stroke="oklch(0.9 0.05 85)"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleCans() {
  return (
    <svg className="lab-cans-art" viewBox="0 0 160 88" aria-hidden="true">
      <path
        d="M38 48 c8-34 28-42 52-38 c28 4 42 22 40 48"
        {...ink}
        strokeWidth="3.2"
      />
      <path
        d="M18 46 c-8 8-4 34 10 42 c16 8 30-4 26-18 c-4-18-14-28-36-24z"
        {...ink}
        fill="var(--hoodie)"
        strokeWidth="2.6"
      />
      <path
        d="M122 48 c-4 6 4 34 16 40 c16 6 26-10 18-24 c-6-18-18-26-34-16z"
        {...ink}
        fill="var(--hoodie)"
        strokeWidth="2.6"
      />
    </svg>
  );
}

export function DoodleMug() {
  return (
    <svg className="mug-art" viewBox="0 0 88 100" aria-hidden="true">
      <path
        d="M18 28 c8-4 38 0 42 6 v40 c2 12-8 16-20 14 H28 c-12 2-14-6-12-16z"
        {...ink}
        fill="var(--cream)"
        strokeWidth="2.6"
      />
      <path
        d="M60 42 c16 0 24 10 20 22 c-4 12-14 12-22 6"
        {...ink}
        strokeWidth="2.6"
      />
      <path fill="var(--cobalt)" d="M22 52 h34 v11 H24z" />
      <path
        d="M32 14 c4-16 12-12 8 4"
        {...ink}
        strokeWidth="2.2"
      />
      <path
        d="M46 12 c2-18 14-14 8 6"
        {...ink}
        strokeWidth="2.2"
      />
    </svg>
  );
}

export function DoodleTick() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="5.2" {...ink} fill="var(--surface)" />
      <path d="M5.6 8.1 l1.8 2 3.4-4.2" {...ink} />
    </svg>
  );
}
