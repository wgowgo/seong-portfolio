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
  description: "개발자 성. Unity, C#, TypeScript.",
  email: "wgowgosy@gmail.com",
  socials: {
    github: "https://github.com/wgowgo",
  },
  githubHide: ["wgowgo.github.io", "blindcollective", "seong-portfolio"],
  boardPins: [
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
      description: "사진을 의미 기반 팔레트로 줄여 도트 일러스트로 재구성하는 엔진.",
      href: local("/work/dot-exchange.html"),
      language: "JavaScript",
      stars: 0,
      image: local("/pins/dot-exchange.svg"),
    },
  ],
  featured: [
    {
      title: "MyNetEngine",
      blurb: "Unity 멀티플레이어 네트워킹 엔진. C#.",
      href: "https://github.com/wgowgo/Unity_Custom_Multy_Engine",
      tone: "cobalt" as const,
    },
    {
      title: "BidMate AI",
      blurb: "나라장터 입찰 매칭. Next.js, FastAPI.",
      href: "https://github.com/wgowgo/BidMate-AI",
      tone: "pin" as const,
    },
  ],
  projects: [
    {
      title: "MyNetEngine",
      blurb: "Mirror 호환 Unity 멀티플레이어 엔진.",
      href: "https://github.com/wgowgo/Unity_Custom_Multy_Engine",
      color: "#3A3F8C",
      icon: "game",
    },
    {
      title: "BidMate AI",
      blurb: "나라장터 공고 매칭·제안서 보조.",
      href: "https://github.com/wgowgo/BidMate-AI",
      color: "#ae4244",
      icon: "flag",
    },
    {
      title: "Class Orbit",
      blurb: "공공 교육 데이터 + AI 워크스페이스.",
      href: "https://github.com/wgowgo/AI_STUDY_Class_Orbit",
      color: "#3a91d8",
      icon: "book",
    },
    {
      title: "VHS Shader",
      blurb: "Unity URP VHS / CRT 포스트 이펙트.",
      href: "https://github.com/wgowgo/Unity_VHS_Shader",
      color: "#cf1e69",
      icon: "smile",
    },
    {
      title: "Aurora NPR",
      blurb: "URP 애니 셀 셰이더. 바디·얼굴·헤어.",
      href: "https://github.com/wgowgo/Unity_Shader_Aurora_NPR",
      color: "#6b5b95",
      icon: "beaker",
    },
    {
      title: "ToonMax v2",
      blurb: "베이스 컬러 유지 NPR 툰 셰이더.",
      href: "https://github.com/wgowgo/ToonMax-v2-Stylized-NPR-Anime-Shader-URP",
      color: "#e07a5f",
      icon: "smile",
    },
    {
      title: "Linking Workspace",
      blurb: "노트·하이라이트 Chrome 확장.",
      href: "https://github.com/wgowgo/Linking_Workspace",
      color: "#981ddf",
      icon: "shuffle",
    },
    {
      title: "Asset Description",
      blurb: "Unity 에셋 설명 에디터 확장.",
      href: "https://github.com/wgowgo/UnityTool_AssetDescription",
      color: "#cb5704",
      icon: "pencil",
    },
    {
      title: "FarmGuard AI",
      blurb: "농지 리스크 대시보드. 공공 API.",
      href: "https://github.com/wgowgo/Farmguard-ai",
      color: "#16a05d",
      icon: "plane",
    },
    {
      title: "Distributed Chat",
      blurb: "Redis · Socket.IO 분산 채팅 서버.",
      href: "https://github.com/wgowgo/Distributed_Chat_Server",
      color: "#8b5a2b",
      icon: "radio",
    },
    {
      title: "IOCP Simulation",
      blurb: "C++ IOCP 서버 + 틱 월드 시뮬.",
      href: "https://github.com/wgowgo/IOCP-Simulation-Server",
      color: "#2c3e50",
      icon: "game",
    },
    {
      title: "OpenCompose Studio",
      blurb: "OSS 데이터로 앱 초안. 로컬 AI.",
      href: "https://github.com/wgowgo/OpenCompose_OSS_Studio",
      color: "#1f6f8b",
      icon: "wrench",
    },
    {
      title: "DevLift",
      blurb: "개발자 PC 성능 최적화. .NET, Avalonia.",
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
      title: "PlayX4 B2B 라운지 게임전시",
    },
    {
      title: "스토리테마파크 청춘놀자 1차 서류합격",
    },
    {
      title: "창업 300 최종합격",
    },
  ],
  lab: [
    {
      title: "Color Previewer",
      meta: "Unity 임포트 전 텍스처 색 미리보기.",
      href: "https://github.com/wgowgo/Unity_Color_Previewer",
    },
    {
      title: "Sprite Light Previewer",
      meta: "2D 스프라이트 조명 프리셋 미리보기.",
      href: "https://github.com/wgowgo/2D-Sprite-Light-Previewer",
    },
    {
      title: "Shader Look Generator",
      meta: "레퍼런스 이미지로 Shader Graph 프리셋.",
      href: "https://github.com/wgowgo/Shader-Look-Generator",
    },
    {
      title: "VFX Sheet Generator",
      meta: "이펙트 타입으로 플립북·VFX 추천.",
      href: "https://github.com/wgowgo/VFX-Texture-Sheet-Generator",
    },
    {
      title: "Mechanic Stress Tester",
      meta: "게임 메카닉 남용·우회 시나리오.",
      href: "https://github.com/wgowgo/Game_Mechanic_Stress_Tester",
    },
    {
      title: "Player Experience Timeline",
      meta: "기획서 기준 분 단위 체감 시뮬.",
      href: "https://github.com/wgowgo/Player-Experience-Timeline-Simulator",
    },
    {
      title: "Design Conflict Simulator",
      meta: "시스템 충돌·밸런스 리스크 점검.",
      href: "https://github.com/wgowgo/Game-Design-Conflict-Simulator",
    },
  ],
  writing: [
    {
      title: "Unity 최적화 스터디 정리본",
      date: "2025.05",
      href: "https://wgowgo.github.io/posts/Study/",
    },
    {
      title: "자료구조 - 리스트, 배열",
      date: "2025.05",
      href: "https://wgowgo.github.io/posts/ListArray/",
    },
    {
      title: "Unity 인보크 (Invoke)",
      date: "2024.12",
      href: "https://wgowgo.github.io/posts/Invoke/",
    },
    {
      title: "Unity 벡터 정규화 (Vector Normalization)",
      date: "2024.12",
      href: "https://wgowgo.github.io/posts/normalized/",
    },
  ],
  photos: [
    { alt: "책상", color: "#c4b5a0" },
    { alt: "창밖", color: "#6b7c9c" },
    { alt: "키보드", color: "#3d3a38" },
    { alt: "작업실", color: "#d4c4b0" },
  ],
  repos: [
    {
      name: "Unity_Custom_Multy_Engine",
      stars: 1,
      blurb: "Mirror 호환 Unity 멀티플레이어 엔진.",
      href: "https://github.com/wgowgo/Unity_Custom_Multy_Engine",
    },
    {
      name: "BidMate-AI",
      stars: 0,
      blurb: "나라장터 입찰 매칭. Next.js, FastAPI.",
      href: "https://github.com/wgowgo/BidMate-AI",
    },
    {
      name: "AI_STUDY_Class_Orbit",
      stars: 0,
      blurb: "공공 교육 데이터 + AI 워크스페이스.",
      href: "https://github.com/wgowgo/AI_STUDY_Class_Orbit",
    },
    {
      name: "Unity_VHS_Shader",
      stars: 1,
      blurb: "URP VHS / CRT 포스트 이펙트.",
      href: "https://github.com/wgowgo/Unity_VHS_Shader",
    },
    {
      name: "Unity_Shader_Aurora_NPR",
      stars: 0,
      blurb: "URP 애니 셀 셰이더. 바디·얼굴·헤어.",
      href: "https://github.com/wgowgo/Unity_Shader_Aurora_NPR",
    },
    {
      name: "ToonMax-v2-Stylized-NPR-Anime-Shader-URP",
      stars: 0,
      blurb: "베이스 컬러 유지 NPR 툰 셰이더.",
      href: "https://github.com/wgowgo/ToonMax-v2-Stylized-NPR-Anime-Shader-URP",
    },
    {
      name: "Linking_Workspace",
      stars: 0,
      blurb: "노트·하이라이트 Chrome 확장.",
      href: "https://github.com/wgowgo/Linking_Workspace",
    },
    {
      name: "UnityTool_AssetDescription",
      stars: 1,
      blurb: "Unity 에셋 설명 에디터 확장.",
      href: "https://github.com/wgowgo/UnityTool_AssetDescription",
    },
    {
      name: "Farmguard-ai",
      stars: 0,
      blurb: "농지 리스크 대시보드.",
      href: "https://github.com/wgowgo/Farmguard-ai",
    },
    {
      name: "Distributed_Chat_Server",
      stars: 0,
      blurb: "Redis · Socket.IO 분산 채팅.",
      href: "https://github.com/wgowgo/Distributed_Chat_Server",
    },
    {
      name: "IOCP-Simulation-Server",
      stars: 0,
      blurb: "C++ IOCP 서버 + 틱 월드 시뮬.",
      href: "https://github.com/wgowgo/IOCP-Simulation-Server",
    },
    {
      name: "Unity_Color_Previewer",
      stars: 0,
      blurb: "Unity 텍스처 색 미리보기.",
      href: "https://github.com/wgowgo/Unity_Color_Previewer",
    },
    {
      name: "OpenCompose_OSS_Studio",
      stars: 0,
      blurb: "OSS 데이터로 앱 초안. 로컬 AI.",
      href: "https://github.com/wgowgo/OpenCompose_OSS_Studio",
    },
    {
      name: "DevLift",
      stars: 0,
      blurb: "개발자 PC 성능 최적화. Avalonia.",
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
        meta: "Unity 멀티플레이어 엔진",
        href: "https://github.com/wgowgo/Unity_Custom_Multy_Engine",
      },
      {
        title: "BidMate AI",
        meta: "나라장터 입찰 매칭",
        href: "https://github.com/wgowgo/BidMate-AI",
      },
      {
        title: "Aurora NPR",
        meta: "URP 애니 셀 셰이더",
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
