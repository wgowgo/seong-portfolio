export type Award = {
  title: string;
  meta?: string;
};

export type ContactHat = {
  role: string;
  place: string;
  note: string;
  href?: string;
};

export type OverlayId =
  | "projects"
  | "resume"
  | "awards"
  | "lab"
  | "contact"
  | "writing"
  | "github"
  | "photos";

export type Project = {
  title: string;
  blurb: string;
  href: string;
  color: string;
  icon: "radio" | "wrench" | "shuffle" | "pencil" | "book" | "smile" | "flag" | "plane" | "beaker" | "game";
};

const local = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const site = {
  name: "SeongWook",
  nameKo: "성",
  role: "Developer",
  title: "SeongWook — Portfolio",
  description: "Developer Seong. Unity, C#, TypeScript.",
  email: "wgowgosy@gmail.com",
  socials: {
    github: "https://github.com/wgowgo",
  },
  contactHats: [
    {
      role: "Unity Developer",
      place: "Independent",
      note: "Unity · C# · AR · Multiplayer",
    },
    {
      role: "Pet Healthcare Developer",
      place: "Pet Healthcare AI",
      note: "AI Healthcare",
      href: "https://petcloudai.com",
    },
    {
      role: "Software Engineer",
      place: "RecoverAI",
      note: "B2B AI SaaS",
    },
    {
      role: "Lead Developer",
      place: "SOYANG Development Studio",
      note: "Software outsourcing",
      href: "https://soyanggame.com",
    },
  ] satisfies ContactHat[],
  githubHide: ["wgowgo.github.io", "blindcollective", "seong-portfolio"],
  boardPins: [
    {
      name: "soyang-game",
      label: "SOYANG Game",
      description: "Korean folktales rebuilt as playable systems.",
      href: "https://soyanggame.com",
      language: "Studio",
      stars: 0,
      image: local("/pins/soyang-game.png"),
      pageShot: true,
    },
    {
      name: "pet-cloud-ai",
      label: "Pet Cloud AI",
      description: "Pet healthcare AI.",
      href: "https://petcloudai.com",
      language: "Healthcare",
      stars: 0,
      image: local("/pins/pet-cloud.png"),
      pageShot: true,
    },
    {
      name: "the-lost-story",
      label: "TheLostStory",
      description: "TheArchivist Rewrites The Dead",
      href: "https://youtu.be/9bWMTYSG0Q8",
      language: "YouTube",
      stars: 0,
      image: "https://i.ytimg.com/vi/9bWMTYSG0Q8/hqdefault.jpg",
    },
    {
      name: "osolim",
      label: "Osolim",
      description: "Offline event program.",
      href: "https://osolim.netlify.app",
      language: "Event",
      stars: 0,
      image: local("/pins/osolim.png"),
    },
    {
      name: "arout",
      label: "Firefly Expedition",
      description: "Web-based AR program. 1,800 daily visitors, 5,400 total.",
      href: "https://arout.netlify.app",
      language: "AR",
      stars: 0,
      badge: "1,800/day",
      image: local("/pins/arout.png"),
    },
    {
      name: "ai-structure",
      label: "BlindCollective",
      description: "C4 architecture for a confidential procurement network. AI recommends; legal acts pass policy and signatures.",
      href: local("/architecture/index.html"),
      language: "C4",
      stars: 0,
      image: local("/pins/ai-structure.svg"),
    },
    {
      name: "biotwin-hmtf",
      label: "BioTwin H-MTF",
      description: "Multimodal early warning that aligns farm environment, biometrics, and husbandry on a 5-minute timeline, then forecasts 1h / 3h / 6h risk.",
      href: local("/work/biotwin.html"),
      language: "Python",
      stars: 0,
      image: local("/pins/biotwin.svg"),
    },
    {
      name: "pension-ai",
      label: "Pension Agent",
      description: "Pension Q&A API that separates source documents, timing rules, and product-fit checks. No retrieval, math, rules, or verification — no answer. The LLM only polishes the sentence.",
      href: local("/work/pension.html"),
      language: "Python",
      stars: 0,
      image: local("/pins/pension-ai.svg"),
    },
    {
      name: "dot-exchange",
      label: "Dot Exchange",
      description: "An engine that shrinks photos into a meaning-based palette, then redraws them as dot illustrations.",
      href: local("/work/dot-exchange.html"),
      language: "JavaScript",
      stars: 0,
      image: local("/pins/dot-exchange.svg"),
    },
  ],
  featured: [
    {
      title: "MyNetEngine",
      blurb: "Unity multiplayer networking engine. C#.",
      href: "https://github.com/wgowgo/Unity_Custom_Multy_Engine",
      tone: "cobalt" as const,
    },
    {
      title: "BidMate AI",
      blurb: "G2B bid matching. Next.js, FastAPI.",
      href: "https://github.com/wgowgo/BidMate-AI",
      tone: "pin" as const,
    },
  ],
  projects: [
    {
      title: "MyNetEngine",
      blurb: "Mirror-compatible Unity multiplayer engine.",
      href: "https://github.com/wgowgo/Unity_Custom_Multy_Engine",
      color: "#3A3F8C",
      icon: "game",
    },
    {
      title: "BidMate AI",
      blurb: "G2B notice matching and proposal support.",
      href: "https://github.com/wgowgo/BidMate-AI",
      color: "#ae4244",
      icon: "flag",
    },
    {
      title: "Class Orbit",
      blurb: "Public education data plus an AI workspace.",
      href: "https://github.com/wgowgo/AI_STUDY_Class_Orbit",
      color: "#3a91d8",
      icon: "book",
    },
    {
      title: "VHS Shader",
      blurb: "Unity URP VHS / CRT post effect.",
      href: "https://github.com/wgowgo/Unity_VHS_Shader",
      color: "#cf1e69",
      icon: "smile",
    },
    {
      title: "Aurora NPR",
      blurb: "URP anime cel shader. Body, face, hair.",
      href: "https://github.com/wgowgo/Unity_Shader_Aurora_NPR",
      color: "#6b5b95",
      icon: "beaker",
    },
    {
      title: "ToonMax v2",
      blurb: "NPR toon shader that keeps base color.",
      href: "https://github.com/wgowgo/ToonMax-v2-Stylized-NPR-Anime-Shader-URP",
      color: "#e07a5f",
      icon: "smile",
    },
    {
      title: "Linking Workspace",
      blurb: "Notes and highlights Chrome extension.",
      href: "https://github.com/wgowgo/Linking_Workspace",
      color: "#981ddf",
      icon: "shuffle",
    },
    {
      title: "Asset Description",
      blurb: "Unity editor extension for asset notes.",
      href: "https://github.com/wgowgo/UnityTool_AssetDescription",
      color: "#cb5704",
      icon: "pencil",
    },
    {
      title: "FarmGuard AI",
      blurb: "Farm risk dashboard. Public APIs.",
      href: "https://github.com/wgowgo/Farmguard-ai",
      color: "#16a05d",
      icon: "plane",
    },
    {
      title: "Distributed Chat",
      blurb: "Redis and Socket.IO distributed chat server.",
      href: "https://github.com/wgowgo/Distributed_Chat_Server",
      color: "#8b5a2b",
      icon: "radio",
    },
    {
      title: "IOCP Simulation",
      blurb: "C++ IOCP server plus a tick-world sim.",
      href: "https://github.com/wgowgo/IOCP-Simulation-Server",
      color: "#2c3e50",
      icon: "game",
    },
    {
      title: "OpenCompose Studio",
      blurb: "App drafts from OSS data. Local AI.",
      href: "https://github.com/wgowgo/OpenCompose_OSS_Studio",
      color: "#1f6f8b",
      icon: "wrench",
    },
    {
      title: "DevLift",
      blurb: "Developer PC performance optimizer. .NET, Avalonia.",
      href: "https://github.com/wgowgo/DevLift",
      color: "#1a3a5c",
      icon: "wrench",
    },
  ] satisfies Project[],
  awards: [
    {
      title: "키즈토피아 X 청강문화산업대학교 콘텐츠 공모전 체험학습 콘텐츠 기획부문 우수상",
      meta: "2026.03",
    },
    {
      title: "2025 RISE Culture and Art 창업 경진대회 은상",
      meta: "2025.12",
    },
    {
      title: "오렌지플래닛 러닝메이트 6기 수료",
      meta: "2025.12",
    },
    {
      title: "제11회 START UP ESG 창업아이디어 경진대회 은상",
      meta: "2025.11",
    },
    {
      title: "혁신 창업 아이디어 발굴 공모전 참가 수료",
      meta: "2025.11",
    },
    {
      title: "청강문화산업대학교 교내 창업아이디어 경진대회 대상",
      meta: "2025.09",
    },
    {
      title: "HUSS 해커톤 본선 진출",
      meta: "2025.08",
    },
    {
      title: "청강문화산업대학교 교내 새내기 게임 공모전 with CKF 최우수상",
      meta: "2025.03",
    },
    {
      title: "제1회 일상뒤집기 장려상",
    },
    {
      title: "제26회 모바일 기술대상 본선 진출",
    },
    {
      title: "2026 PlayX4 B2B 라운지 게임전시",
    },
    {
      title: "2026 스토리테마파크 청춘놀자 1차 서류합격",
    },
    {
      title: "2026 창업 300 최종합격",
    },
  ] satisfies Award[],
  lab: [
    {
      title: "Color Previewer",
      meta: "Preview texture color before Unity import.",
      href: "https://github.com/wgowgo/Unity_Color_Previewer",
    },
    {
      title: "Sprite Light Previewer",
      meta: "Preview 2D sprite lighting presets.",
      href: "https://github.com/wgowgo/2D-Sprite-Light-Previewer",
    },
    {
      title: "Shader Look Generator",
      meta: "Shader Graph presets from reference images.",
      href: "https://github.com/wgowgo/Shader-Look-Generator",
    },
    {
      title: "VFX Sheet Generator",
      meta: "Flipbook and VFX suggestions from effect type.",
      href: "https://github.com/wgowgo/VFX-Texture-Sheet-Generator",
    },
    {
      title: "Mechanic Stress Tester",
      meta: "Abuse and bypass scenarios for game mechanics.",
      href: "https://github.com/wgowgo/Game_Mechanic_Stress_Tester",
    },
    {
      title: "Player Experience Timeline",
      meta: "Minute-by-minute feel sim from a design doc.",
      href: "https://github.com/wgowgo/Player-Experience-Timeline-Simulator",
    },
    {
      title: "Design Conflict Simulator",
      meta: "System conflict and balance-risk checks.",
      href: "https://github.com/wgowgo/Game-Design-Conflict-Simulator",
    },
  ],
  writing: [
    {
      title: "Unity Optimization Study Notes",
      date: "2025.05",
      href: "https://wgowgo.github.io/posts/Study/",
    },
    {
      title: "Data Structures: Lists and Arrays",
      date: "2025.05",
      href: "https://wgowgo.github.io/posts/ListArray/",
    },
    {
      title: "Unity Invoke",
      date: "2024.12",
      href: "https://wgowgo.github.io/posts/Invoke/",
    },
    {
      title: "Unity Vector Normalization",
      date: "2024.12",
      href: "https://wgowgo.github.io/posts/normalized/",
    },
  ],
  photos: [
    { alt: "Desk", color: "#c4b5a0" },
    { alt: "Window", color: "#6b7c9c" },
    { alt: "Keyboard", color: "#3d3a38" },
    { alt: "Studio", color: "#d4c4b0" },
  ],
  repos: [
    {
      name: "Unity_Custom_Multy_Engine",
      stars: 1,
      blurb: "Mirror-compatible Unity multiplayer engine.",
      href: "https://github.com/wgowgo/Unity_Custom_Multy_Engine",
    },
    {
      name: "BidMate-AI",
      stars: 0,
      blurb: "G2B bid matching. Next.js, FastAPI.",
      href: "https://github.com/wgowgo/BidMate-AI",
    },
    {
      name: "AI_STUDY_Class_Orbit",
      stars: 0,
      blurb: "Public education data plus an AI workspace.",
      href: "https://github.com/wgowgo/AI_STUDY_Class_Orbit",
    },
    {
      name: "Unity_VHS_Shader",
      stars: 1,
      blurb: "URP VHS / CRT post effect.",
      href: "https://github.com/wgowgo/Unity_VHS_Shader",
    },
    {
      name: "Unity_Shader_Aurora_NPR",
      stars: 0,
      blurb: "URP anime cel shader. Body, face, hair.",
      href: "https://github.com/wgowgo/Unity_Shader_Aurora_NPR",
    },
    {
      name: "ToonMax-v2-Stylized-NPR-Anime-Shader-URP",
      stars: 0,
      blurb: "NPR toon shader that keeps base color.",
      href: "https://github.com/wgowgo/ToonMax-v2-Stylized-NPR-Anime-Shader-URP",
    },
    {
      name: "Linking_Workspace",
      stars: 0,
      blurb: "Notes and highlights Chrome extension.",
      href: "https://github.com/wgowgo/Linking_Workspace",
    },
    {
      name: "UnityTool_AssetDescription",
      stars: 1,
      blurb: "Unity editor extension for asset notes.",
      href: "https://github.com/wgowgo/UnityTool_AssetDescription",
    },
    {
      name: "Farmguard-ai",
      stars: 0,
      blurb: "Farm risk dashboard.",
      href: "https://github.com/wgowgo/Farmguard-ai",
    },
    {
      name: "Distributed_Chat_Server",
      stars: 0,
      blurb: "Redis and Socket.IO distributed chat.",
      href: "https://github.com/wgowgo/Distributed_Chat_Server",
    },
    {
      name: "IOCP-Simulation-Server",
      stars: 0,
      blurb: "C++ IOCP server plus a tick-world sim.",
      href: "https://github.com/wgowgo/IOCP-Simulation-Server",
    },
    {
      name: "Unity_Color_Previewer",
      stars: 0,
      blurb: "Unity texture color preview.",
      href: "https://github.com/wgowgo/Unity_Color_Previewer",
    },
    {
      name: "OpenCompose_OSS_Studio",
      stars: 0,
      blurb: "App drafts from OSS data. Local AI.",
      href: "https://github.com/wgowgo/OpenCompose_OSS_Studio",
    },
    {
      name: "DevLift",
      stars: 0,
      blurb: "Developer PC performance optimizer. Avalonia.",
      href: "https://github.com/wgowgo/DevLift",
    },
  ],
  resume: {
    headline: "Software Engineer",
    skills: [
      "Unity",
      "C#",
      "C++",
      "C",
      "HLSL",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Python",
      "FastAPI",
      "Java",
      "PHP",
      "SQL",
      "Go",
      "Swift",
      "Lua",
    ],
    selected: [
      {
        title: "MyNetEngine",
        meta: "Unity multiplayer engine",
        href: "https://github.com/wgowgo/Unity_Custom_Multy_Engine",
      },
      {
        title: "BidMate AI",
        meta: "G2B bid matching",
        href: "https://github.com/wgowgo/BidMate-AI",
      },
      {
        title: "Aurora NPR",
        meta: "URP anime cel shader",
        href: "https://github.com/wgowgo/Unity_Shader_Aurora_NPR",
      },
    ],
  },
  timeline: [
    {
      date: "2026 — Present",
      title: "Founder & Software Engineer",
      place: "RecoverAI",
      role: "B2B AI SaaS",
    },
    {
      date: "2025 — 2026",
      title: "Founder & AI Engineer",
      place: "Pet Healthcare AI",
      role: "AI Healthcare",
    },
    {
      date: "2024 — 2025",
      title: "Founder & Lead Developer",
      place: "SOYANG Development Studio",
      role: "Software Outsourcing Studio",
    },
    {
      date: "2016 — Present",
      title: "Unity Developer",
      place: "Independent",
      role: "Unity · C# · AR · Multiplayer",
    },
  ],
} as const;
