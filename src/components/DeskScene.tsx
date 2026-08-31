"use client";

import type { CSSProperties } from "react";
import type { OverlayId } from "@/data/site";

const HOTSPOTS: {
  id: OverlayId;
  label: string;
  kind?: "board";
  style: CSSProperties;
}[] = [
  {
    id: "projects",
    label: "Projects",
    kind: "board",
    style: { left: "3%", top: "17%", width: "28%", height: "42%" },
  },
  {
    id: "awards",
    label: "Awards",
    style: { left: "17%", top: "67%", width: "13%", height: "28%" },
  },
  {
    id: "lab",
    label: "Lab",
    style: { left: "31%", top: "67%", width: "10%", height: "28%" },
  },
  {
    id: "contact",
    label: "Contact",
    style: { left: "42%", top: "69%", width: "8%", height: "24%" },
  },
  {
    id: "resume",
    label: "Resume",
    style: { left: "50%", top: "59%", width: "21%", height: "36%" },
  },
  {
    id: "writing",
    label: "Writing",
    style: { left: "72%", top: "73%", width: "10%", height: "22%" },
  },
  {
    id: "github",
    label: "GitHub",
    style: { left: "80%", top: "65%", width: "16%", height: "34%" },
  },
];

export function DeskScene({
  onOpen,
}: {
  onOpen: (id: OverlayId) => void;
}) {
  return (
    <div className="scene-wrap">
      <SceneArt />
      {HOTSPOTS.map((h) => (
        <button
          key={h.id}
          type="button"
          className={h.kind === "board" ? "hotspot hotspot-board" : "hotspot"}
          style={h.style}
          onClick={() => onOpen(h.id)}
          aria-haspopup="dialog"
          aria-label={`${h.label} 열기`}
        >
          {h.kind === "board" ? null : (
            <span className="hotspot-label" aria-hidden="true">
              {h.label}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

function SceneArt() {
  return (
    <svg
      className="scene-svg"
      viewBox="0 0 960 520"
      role="img"
      aria-label="낙서 책상. 보드, 노트북, 책, 헤드폰을 누를 수 있습니다."
    >
      <defs>
        <filter id="sketch" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="2"
            seed="11"
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale="6.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <pattern
          id="hatch"
          width="9"
          height="9"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(32)"
        >
          <path
            d="M0 0 v9"
            stroke="var(--hatch)"
            strokeWidth="1.3"
          />
        </pattern>
        <clipPath id="pane">
          <path d="M678 46 c62-6 180 2 224 8 c8 3 10 13 6 24 v136 c2 14-8 20-22 16 H696 c-14 2-18-8-14-22 V60 c2-10 0-12 0-14z" />
        </clipPath>
        <linearGradient
          id="sky-fill"
          x1="678"
          y1="40"
          x2="678"
          y2="228"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--sky)" />
          <stop offset="100%" stopColor="var(--sky-deep)" />
        </linearGradient>
      </defs>

      <style>{`
        .sky { fill: url(#sky-fill); }
        .wood { fill: var(--wood); }
        .cork { fill: var(--cork); }
        .desk { fill: var(--desk); }
        .cup { fill: var(--hoodie); }
        .paper { fill: var(--cream); }
        .ink { fill: var(--stroke); }
        .screen { fill: oklch(0.3 0.04 250); }
        .leaf { fill: oklch(0.58 0.14 145); }
        .pot { fill: oklch(0.64 0.12 40); }
        .note-warm { fill: oklch(0.93 0.09 95); }
        .book-green { fill: oklch(0.55 0.12 145); }
        .book-red { fill: oklch(0.58 0.18 25); }
        .book-blue { fill: oklch(0.42 0.13 260); }
        .lid { fill: oklch(0.55 0.03 250); }
        .face { fill: oklch(0.9 0.05 85); }
        .face-line { fill: none; stroke: oklch(0.9 0.05 85); }
        .gh-body { fill: oklch(0.28 0.02 260); }
        .gh-ink { fill: oklch(0.93 0.08 95); }
        .night-mark, .city-light { opacity: 0; }
        .window-sun { fill: oklch(0.9 0.16 85); }
        .moon, .star { opacity: 0; }
        .lamp-glow { fill: oklch(0.92 0.1 85); opacity: 0; }
        html[data-theme="night"] .scene-svg .window-sun,
        html[data-theme="night"] .scene-svg .lamp-glow { opacity: 0; }
        html[data-theme="night"] .scene-svg .moon,
        html[data-theme="night"] .scene-svg .star,
        html[data-theme="night"] .scene-svg .night-mark,
        html[data-theme="night"] .scene-svg .city-light { opacity: 1; }
        html[data-theme="night"] .scene-svg .cloud { opacity: 0.28; }
        html[data-theme="night"] .scene-svg .city { fill: oklch(0.14 0.03 270); }
        html[data-theme="night"] .scene-svg .note-warm { fill: oklch(0.78 0.12 70); }
        html[data-theme="night"] .scene-svg .book-green { fill: oklch(0.36 0.09 145); }
        html[data-theme="night"] .scene-svg .book-red { fill: oklch(0.4 0.13 25); }
        html[data-theme="night"] .scene-svg .book-blue { fill: oklch(0.3 0.1 260); }
        html[data-theme="night"] .scene-svg .screen { fill: oklch(0.4 0.08 250); }
        html[data-theme="night"] .scene-svg .lid { fill: oklch(0.32 0.03 250); }
        html[data-theme="night"] .scene-svg .face { fill: oklch(0.96 0.08 85); }
        html[data-theme="night"] .scene-svg .face-line { stroke: oklch(0.96 0.08 85); }
        html[data-theme="night"] .scene-svg .gh-body { fill: oklch(0.16 0.02 270); }
        html[data-theme="night"] .scene-svg .gh-ink { fill: oklch(0.88 0.1 85); }
        html[data-theme="night"] .scene-svg .leaf { fill: oklch(0.4 0.1 145); }
        html[data-theme="night"] .scene-svg .pot { fill: oklch(0.42 0.08 40); }
        .idle { transform-box: fill-box; transform-origin: 50% 100%; animation: bob 3.4s cubic-bezier(0.16,1,0.3,1) infinite; }
        .idle-2 { animation-delay: 0.5s; animation-duration: 4.2s; }
        .cork-slip { transform-box: fill-box; transform-origin: 18% 8%; animation: sway 3.6s cubic-bezier(0.16,1,0.3,1) infinite; }
        .cork-slip-b { transform-origin: 82% 12%; animation-duration: 4.4s; animation-delay: -1.1s; }
        .cloud-drift { animation: drift 18s cubic-bezier(0.16,1,0.3,1) infinite alternate; }
        .cloud-drift-2 { animation: drift 24s cubic-bezier(0.16,1,0.3,1) infinite alternate-reverse; animation-delay: -6s; }
        .book-top { transform-box: fill-box; transform-origin: 100% 80%; animation: book-slide 5.2s cubic-bezier(0.16,1,0.3,1) infinite; }
        .cans { transform-box: fill-box; transform-origin: 50% 0%; animation: nod 3.3s cubic-bezier(0.16,1,0.3,1) infinite; }
        .steam { transform-box: fill-box; transform-origin: 50% 100%; animation: steam 2.6s cubic-bezier(0.16,1,0.3,1) infinite; }
        .steam-b { animation-delay: 0.85s; animation-duration: 3.1s; }
        .wink { transform-box: fill-box; transform-origin: 50% 50%; animation: wink 5.2s cubic-bezier(0.16,1,0.3,1) infinite; }
        .page { transform-box: fill-box; transform-origin: 12% 85%; animation: flutter 3.8s cubic-bezier(0.16,1,0.3,1) infinite; }
        .gh-box { transform-box: fill-box; transform-origin: 50% 100%; animation: rock 4.7s cubic-bezier(0.16,1,0.3,1) infinite; }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          45% { transform: translateY(-7px); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          40% { transform: rotate(3.2deg); }
          72% { transform: rotate(-2.4deg); }
        }
        @keyframes drift {
          from { transform: translateX(0); }
          to { transform: translateX(26px); }
        }
        @keyframes book-slide {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          42% { transform: translateX(7px) rotate(-2deg); }
        }
        @keyframes nod {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-7deg); }
        }
        @keyframes steam {
          0% { transform: translateY(0); opacity: 0.85; }
          65% { transform: translateY(-16px); opacity: 0; }
          100% { transform: translateY(-16px); opacity: 0; }
        }
        @keyframes wink {
          0%, 78%, 88%, 100% { transform: scaleY(1); }
          82%, 84% { transform: scaleY(0.08); }
        }
        @keyframes flutter {
          0%, 100% { transform: rotate(0deg); }
          28% { transform: rotate(-4deg); }
          58% { transform: rotate(2.5deg); }
        }
        @keyframes rock {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(5deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .idle, .cork-slip, .cloud-drift, .cloud-drift-2,
          .book-top, .cans, .steam, .wink, .page, .gh-box { animation: none; }
        }
      `}</style>

      <g transform="translate(0 68)">
        {/* Corkboard */}
        <g className="idle idle-2">
          <g filter="url(#sketch)">
            <path
              className="stroke wood"
              d="M36 28 c80-10 190 4 268 2 c12 2 14 16 10 32 v156 c4 18-10 28-28 24 H52 c-18 4-22-12-18-30 V48 c2-12 2-16 2-20z"
            />
            <path
              className="stroke cork"
              d="M52 48 c70-6 170 2 236 4 c10 2 12 12 8 24 v138 c2 14-8 20-22 18 H68 c-16 2-20-10-16-26 V62 c0-10 0-12 0-14z"
            />
            <path
              fill="url(#hatch)"
              d="M52 48 c70-6 170 2 236 4 c10 2 12 12 8 24 v138 c2 14-8 20-22 18 H68 c-16 2-20-10-16-26 V62 c0-10 0-12 0-14z"
            />
          </g>
          <g className="cork-slip cork-slip-a">
            <g filter="url(#sketch)">
              <path
                className="stroke paper"
                d="M72 70 l96-8 10 62 -98 10z"
              />
              <circle className="stroke" cx="86" cy="68" r="8" fill="var(--pin)" />
              <path className="stroke" fill="none" d="M92 92 c22 2 48-6 70 2 M90 110 c18 4 44 0 62-4" />
            </g>
          </g>
          <g className="cork-slip cork-slip-b">
            <g filter="url(#sketch)">
              <path
                className="stroke note-warm"
                d="M188 64 l88 12 -8 58 -92-8z"
              />
              <circle className="stroke" cx="258" cy="78" r="7" fill="var(--pin)" />
              <path className="stroke" fill="none" d="M204 96 c20 6 40 0 56 4 M202 114 c16-2 38 6 52 0" />
            </g>
          </g>
          <g className="night-mark" filter="url(#sketch)">
            <path
              className="stroke"
              fill="oklch(0.9 0.06 90)"
              d="M118 168c1-8 12-12 20-6 8 6 8 18 0 24-8 6-18 4-22-4 8 4 16 0 18-8 2-8-4-14-12-14-4 0-8 2-4 8z"
            />
            <circle cx="168" cy="176" r="2.4" fill="oklch(0.9 0.06 90)" />
            <circle cx="186" cy="198" r="1.8" fill="oklch(0.9 0.06 90)" />
          </g>
        </g>

        {/* Window — decorative only, clouds drift behind the panes */}
        <g>
          <g clipPath="url(#pane)">
            <path
              className="sky"
              d="M668 32 c70-6 200 2 246 8 c10 4 12 16 8 30 v160 c2 18-10 26-26 22 H686 c-16 2-22-10-18-28 V50 c2-12 0-16 0-18z"
            />
            <circle className="window-sun" cx="872" cy="72" r="22" />
            <path
              className="stroke moon"
              fill="oklch(0.94 0.07 90)"
              d="M840 56c4-16 26-26 44-12 18 12 22 38 6 54-16 16-42 18-56 2 18 10 40 2 48-16 8-18-2-36-18-42-10-4-22 2-24 14z"
            />
            <circle className="star" cx="720" cy="62" r="2.2" fill="oklch(0.95 0.04 90)" />
            <circle className="star" cx="798" cy="88" r="1.6" fill="oklch(0.95 0.04 90)" />
            <circle className="star" cx="844" cy="54" r="1.8" fill="oklch(0.95 0.04 90)" />
            <g className="cloud-drift">
              <path
                className="cloud"
                fill="oklch(0.98 0.02 230)"
                d="M692 92 c18-18 50-6 46 16 c22-8 40 16 14 26 c-30 4-68-8-78-20 c-8-12 4-18 18-22z"
              />
            </g>
            <g className="cloud-drift-2">
              <path
                className="cloud"
                fill="oklch(0.97 0.015 230)"
                d="M780 118 c12-12 34-4 32 10 c16-4 26 12 8 18 c-20 2-46-6-54-14 c-6-8 2-12 14-14z"
              />
            </g>
            <g className="city" fill="oklch(0.46 0.06 250)">
              <path d="M692 228 v-50 l26-6 8 56z" />
              <path d="M732 228 v-72 l22 4 10 68z" />
              <path d="M770 228 v-44 l34-8 6 52z" />
              <path d="M816 228 v-80 l20 6 8 74z" />
              <path d="M850 228 v-56 l28-4 6 60z" />
            </g>
            <g className="city-light" fill="oklch(0.9 0.14 85)">
              <rect x="700" y="192" width="4" height="6" rx="1" />
              <rect x="710" y="204" width="4" height="5" rx="1" />
              <rect x="742" y="176" width="4" height="6" rx="1" />
              <rect x="752" y="198" width="3.5" height="5" rx="1" />
              <rect x="782" y="198" width="4" height="5" rx="1" />
              <rect x="824" y="168" width="4" height="6" rx="1" />
              <rect x="832" y="190" width="3.5" height="5" rx="1" />
              <rect x="860" y="188" width="4" height="5" rx="1" />
            </g>
          </g>
          <g filter="url(#sketch)">
            <path
              className="stroke wood"
              fillRule="evenodd"
              d="M656 26 c82-8 224 0 272 12 c10 6 10 20 8 36 v168 c0 18-14 26-32 22 H676 c-18 4-26-10-24-28 V50 c2-14 2-20 4-24z M678 46 c62-6 180 2 224 8 c8 3 10 13 6 24 v136 c2 14-8 20-22 16 H696 c-14 2-18-8-14-22 V60 c2-10 0-12 0-14z"
            />
            <path
              className="stroke wood"
              d="M784 48 h14 v154 h-16z"
            />
            <path
              className="stroke wood"
              d="M676 132 h228 v12 H678z"
            />
            <path
              className="stroke wood"
              d="M662 214 l248 4 10 20 -262 4z"
            />
            <path className="stroke pot" d="M872 198 h28 l-6 24 h-18z" />
            <path
              className="stroke leaf"
              d="M886 196 c-12-16 0-28 4-28 c4 10 10 16 6 28z"
            />
          </g>
        </g>

        <g filter="url(#sketch)">
          {/* Desk */}
          <path
            className="stroke desk"
            d="M18 268 c90-8 240 2 470 0 c180-4 320 8 454 4 l-16 96 H40z"
          />
          <path
            className="stroke"
            fill="none"
            d="M16 266 c120 6 280-6 500 2 c170 6 310 0 426 4"
          />
        </g>

        {/* Headphones */}
        <g className="cans">
          <g filter="url(#sketch)">
            <path
              className="stroke"
              fill="none"
              d="M312 288 c6-30 24-40 46-36 c24 4 36 20 34 44"
            />
            <path
              className="stroke cup"
              d="M298 292 c-6 6-4 26 6 32 c12 6 22-2 20-14 c-2-14-10-22-26-18z"
            />
            <path
              className="stroke cup"
              d="M378 294 c-4 4 2 26 12 30 c12 4 20-8 14-18 c-4-14-14-20-26-12z"
            />
          </g>
        </g>

        {/* Notebook */}
        <g className="page">
          <g filter="url(#sketch)">
            <path
              className="stroke paper"
              d="M688 326 l88-14 8 34 -92 16z"
            />
            <path className="stroke" fill="none" d="M700 338 c22 0 46-6 66-2" />
            <path className="stroke" fill="none" d="M702 350 c18 2 42-4 60 0" />
          </g>
        </g>

        {/* Books */}
        <g>
          <g filter="url(#sketch)">
            <path
              className="stroke book-green"
              d="M170 340 l122-4 4 22 -126 8z"
            />
            <path
              className="stroke book-red"
              d="M174 316 l116 6 2 20 -118 0z"
            />
          </g>
          <g className="book-top">
            <g filter="url(#sketch)">
              <path
                className="stroke book-blue"
                d="M178 292 l108-10 6 22 -110 12z"
              />
            </g>
          </g>
        </g>

        {/* Mug */}
        <g>
          <g filter="url(#sketch)">
            <path
              className="stroke paper"
              d="M408 308 c18-4 42 4 44 12 v34 c2 10-8 14-18 12 H420 c-12 2-14-6-12-14z"
            />
            <path
              className="stroke"
              fill="none"
              d="M452 320 c14 0 22 8 18 18 c-4 10-12 10-20 6"
            />
            <path fill="var(--cobalt)" d="M414 328 h36 v10 H416z" />
          </g>
          <path
            className="stroke steam"
            fill="none"
            d="M422 294 c4-16 12-12 8 2"
          />
          <path
            className="stroke steam steam-b"
            fill="none"
            d="M438 292 c2-18 14-14 8 4"
          />
        </g>

        {/* Laptop */}
        <g>
          <g filter="url(#sketch)">
            <path
              className="stroke screen"
              d="M478 246 c52-8 132-2 172 10 l-12 90 H496z"
            />
            <path
              className="stroke lid"
              d="M462 344 c46-4 128 6 210-2 c10 2 10 10 4 16 H468 c-10 0-10-8-6-14z"
            />
          </g>
          <g transform="translate(548 280)">
            <path
              className="face"
              d="M-20 -8 c3 -8 14 -4 12 4 c-2 7 -12 8 -14 1 c-2 -5 0 -6 2 -5z"
            />
            <g className="wink">
              <path
                className="face"
                d="M10 -16 c5 -6 16 2 12 8 c-3 6 -14 4 -16 -2 c-2 -4 1 -5 4 -6z"
              />
            </g>
            <path
              className="face-line"
              strokeWidth="3.4"
              strokeLinecap="round"
              d="M-22 4 c8 20 22 16 40 -8"
            />
            <path
              className="face-line"
              strokeWidth="2.2"
              strokeLinecap="round"
              d="M-18 8 c10 14 24 8 32 -4"
            />
          </g>
        </g>

        {/* GitHub box */}
        <g className="gh-box">
          <g filter="url(#sketch)">
            <path
              className="stroke gh-body"
              d="M788 278 c22-6 70 4 88 14 c8 6 8 16 4 28 v52 c0 12-12 16-26 12 H804 c-16 4-20-8-16-22z"
            />
            <text
              className="gh-ink"
              x="834"
              y="332"
              textAnchor="middle"
              fontFamily="var(--font-caveat), cursive"
              fontSize="26"
              fontWeight="700"
              transform="rotate(-8 834 332)"
            >
              GitHub
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
