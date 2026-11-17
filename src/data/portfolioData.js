export const PERSONAL_INFO = {
  name: "Suchand C Achar",
  initials: "SCA",
  headline: "Building Intelligent Solutions Through Code.",
  subheadline:
    "I'm an Information Science and Engineering student passionate about software engineering, AI-driven applications, full-stack development, and solving complex problems through technology.",
  bioQuote:
    "Dynamic Information Science & Engineering student focused on Data Structures and Algorithms. Proficient in C++, C, and scalable full-stack development. Passionate about leveraging computational logic and modern frameworks to engineer high-performance solutions.",
  aboutExtended:
    "I combine rigorous algorithmic discipline with pragmatic system architecture. Whether developing local-first RAG pipelines with verifiable code citations, engineering responsive modern web applications, or profiling SQL execution plans, I thrive at the convergence of deep computational thinking and intuitive user experience.",
  location: "Bengaluru, Karnataka, India",
  email: "suchandacharya6@gmail.com",
  github: "https://github.com/Suchand06",
  linkedin: "https://linkedin.com/in/suchand-c-achar",
  leetcode: "https://leetcode.com/u/uZggT8ZDkd",
  availabilityStatus: "Open for Software Engineering Roles & Internships",
  titles: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "Competitive Programmer"
  ]
};

export const HIGHLIGHT_PILLARS = [
  {
    id: "problem-solving",
    title: "Problem Solving & DSA",
    badge: "Core Strength",
    stats: "400+ Problems Solved",
    description:
      "Consistent practice across LeetCode and GeeksforGeeks with focus on graph algorithms, dynamic programming, trees, and optimal asymptotic time/space complexities.",
    bulletPoints: [
      "400+ algorithmic problems solved across LeetCode & GFG",
      "IEEEXtreme 18.0 Collegiate 4th Place globally competing teams",
      "Proficient in C++ and C with optimal memory & cache efficiency"
    ],
    accentColor: "from-violet-500/20 to-purple-500/5",
    borderAccent: "group-hover:border-violet-500/40",
    icon: "Code2"
  },
  {
    id: "software-engineering",
    title: "Full-Stack Software Engineering",
    badge: "Production Ready",
    stats: "End-to-End Delivery",
    description:
      "Building scalable frontend interfaces and resilient backend microservices with typed contracts, database design, and clean architectural separation of concerns.",
    bulletPoints: [
      "Full-stack React, TypeScript, and modern state architectures",
      "High-throughput asynchronous backends with FastAPI and Node.js",
      "Relational & document database modeling: PostgreSQL, SQLite, MongoDB"
    ],
    accentColor: "from-blue-500/20 to-cyan-500/5",
    borderAccent: "group-hover:border-blue-500/40",
    icon: "Layers"
  },
  {
    id: "ai-systems",
    title: "AI & Intelligent Systems",
    badge: "Emerging Tech",
    stats: "Local-First & Grounded",
    description:
      "Designing Retrieval-Augmented Generation (RAG) engines, embedding search spaces, structured prompt systems, and AI-assisted developer developer tooling.",
    bulletPoints: [
      "Local-first RAG engines with AST-aware code parsing (Tree-sitter)",
      "Dense and BM25 hybrid vector retrieval with LanceDB",
      "Automated documentation drift and citation verification"
    ],
    accentColor: "from-cyan-500/20 to-emerald-500/5",
    borderAccent: "group-hover:border-cyan-500/40",
    icon: "Brain"
  }
];

export const EDUCATION = [
  {
    institution: "B.M.S. College of Engineering",
    location: "Bengaluru, Karnataka",
    degree: "Bachelor of Engineering in Information Science and Engineering",
    period: "2023 — 2027",
    status: "Currently Pursuing (3rd Year)",
    score: "CGPA: 8.25 / 10",
    scoreBadge: "8.25 CGPA",
    description:
      "Premier autonomous engineering institution in Bengaluru. Building strong computer science fundamentals through hands-on coursework and technical leadership.",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Computer Networks"
    ]
  },
  {
    institution: "Government Pre-University College",
    location: "Thirthahalli, Karnataka",
    degree: "Pre-University Education (12th Grade)",
    period: "2020 — 2022",
    status: "Completed",
    score: "91.66% Overall",
    scoreBadge: "PCMCS: 96.0%",
    description:
      "Specialized in Physics, Chemistry, Mathematics, and Computer Science (PCMCS). Achieved outstanding distinction across core technical subjects.",
    coursework: [
      "Computer Science Fundamentals",
      "Mathematics & Calculus",
      "Physics Mechanics & Electromagnetism",
      "Chemistry"
    ]
  },
  {
    institution: "Government Junior College",
    location: "Thirthahalli, Karnataka",
    degree: "Secondary School Leaving Certificate (10th Grade)",
    period: "2020",
    status: "Completed",
    score: "88.96%",
    scoreBadge: "88.96% Distinction",
    description:
      "Strong academic foundation with distinction honors in regional secondary school board examinations.",
    coursework: [
      "Science & Technology",
      "Mathematics",
      "Languages & Social Sciences"
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Programming Languages",
    icon: "Terminal",
    skills: [
      { name: "C++", tag: "Advanced / DSA", icon: "cpp" },
      { name: "C", tag: "Systems", icon: "c" },
      { name: "Python", tag: "Backend & ML", icon: "python" },
      { name: "Java", tag: "OOP Principles", icon: "java" },
      { name: "JavaScript", tag: "Modern ES6+", icon: "javascript" },
      { name: "SQL", tag: "Complex Queries", icon: "sql" }
    ]
  },
  {
    name: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", tag: "SPA & Hooks", icon: "react" },
      { name: "HTML5", tag: "Semantic & Canvas", icon: "html" },
      { name: "CSS3", tag: "Modern Layouts", icon: "css" },
      { name: "Tailwind CSS", tag: "Design Systems", icon: "tailwind" },
      { name: "Vite", tag: "Fast Bundling", icon: "vite" }
    ]
  },
  {
    name: "Backend Development",
    icon: "Server",
    skills: [
      { name: "FastAPI", tag: "Async Python", icon: "fastapi" },
      { name: "Node.js", tag: "Runtime", icon: "nodejs" },
      { name: "Express.js", tag: "REST Services", icon: "express" },
      { name: "REST APIs", tag: "Contract Design", icon: "api" }
    ]
  },
  {
    name: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "MySQL", tag: "Relational", icon: "mysql" },
      { name: "MongoDB", tag: "NoSQL Documents", icon: "mongodb" },
      { name: "Supabase", tag: "PostgreSQL & Auth", icon: "supabase" },
      { name: "SQLite", tag: "Embedded Engine", icon: "sqlite" }
    ]
  },
  {
    name: "AI, ML & Emerging Tech",
    icon: "Cpu",
    skills: [
      { name: "Large Language Models", tag: "Llama / Gemini", icon: "llm" },
      { name: "AI Agents", tag: "Reasoning & Tools", icon: "agent" },
      { name: "Vector Embeddings", tag: "Semantic Search", icon: "vector" },
      { name: "Pandas", tag: "Data Analysis", icon: "pandas" },
      { name: "NumPy", tag: "Matrix Operations", icon: "numpy" }
    ]
  },
  {
    name: "Developer Tools & Libraries",
    icon: "Wrench",
    skills: [
      { name: "Git", tag: "VCS Branching", icon: "git" },
      { name: "GitHub", tag: "CI/CD & Actions", icon: "github" },
      { name: "Postman", tag: "API Testing", icon: "postman" },
      { name: "Mongoose", tag: "ODM Modeling", icon: "mongoose" }
    ]
  }
];

export const PROJECTS = [
  {
    id: "repolens",
    title: "RepoLens",
    tagline: "Local-First RAG Engine for Codebases",
    category: "AI & ML",
    categoryBadge: "AI & Systems Flagship",
    featured: true,
    github: "https://github.com/Suchand06/RepoLens",
    liveDemo: null, // No verified live demo, show only GitHub
    shortDescription:
      "A local-first Retrieval-Augmented Generation engine that helps developers understand complex code repositories through evidence-grounded answers with verifiable file and line-range citations.",
    problemStatement:
      "When developers onboard to unfamiliar codebases or explore open-source libraries, general LLMs frequently hallucinate function signatures, invent non-existent APIs, and provide ungrounded assumptions without proving where in the code the behavior actually exists.",
    solutionOverview:
      "RepoLens solves this by indexing the repository locally. Code is structurally parsed into semantic AST chunks using Tree-sitter, indexed with hybrid dense vector and BM25 sparse retrieval in LanceDB, and queried with reciprocal rank fusion (RRF). Every generated answer sentence cites verifiable file and line-range spans verified against disk, supplemented with a computed grounding score.",
    keyFeatures: [
      "Repository-aware question answering with deep syntactic context",
      "Verifiable file and line-range citations anchored to exact disk locations",
      "Grounding score calculation measuring answer factual alignment",
      "Tree-sitter structural code parsing preserving function and class boundaries",
      "Hybrid dense and BM25 reciprocal rank fusion (RRF) retrieval",
      "Automated documentation drift detection flagging contradictory doc claims",
      "Pre-validation of citations against source files before surfacing responses"
    ],
    techStack: [
      "Python 3.11+",
      "FastAPI",
      "React",
      "LanceDB",
      "Tree-sitter",
      "RAG",
      "BM25",
      "LLMs (Groq)"
    ],
    architectureHighlights: [
      {
        title: "Ingestion Pipeline",
        description: "Git walker feeds files to Tree-sitter for AST chunking, then computes dense embeddings and BM25 token frequencies for LanceDB storage."
      },
      {
        title: "Hybrid Retrieval",
        description: "Merges semantic dense similarity with lexical BM25 keyword matching via Reciprocal Rank Fusion (RRF) to eliminate missing symbol queries."
      },
      {
        title: "Grounding & Verification",
        description: "Verifies every cited line span against checked-out disk buffers to ensure 100% citation truthfulness."
      }
    ],
    mockupType: "repolens-dashboard"
  },
  {
    id: "resume-optimizer",
    title: "ResumeIQ",
    tagline: "AI-Powered Resume Analysis & Optimization Platform",
    category: "Full Stack",
    categoryBadge: "Full-Stack & AI Flagship",
    featured: true,
    github: "https://github.com/Suchand06/resume-optimizer",
    liveDemo: "https://resume-optimizer-seven-omega.vercel.app/",
    shortDescription:
      "An intelligent AI-powered resume analysis and optimization platform designed to improve resume compatibility with Applicant Tracking Systems (ATS) and recruiter expectations.",
    problemStatement:
      "Job seekers face high rejection rates from opaque ATS filters due to missing domain keywords, poorly quantified impact bullets, and semantic disconnects from job descriptions.",
    solutionOverview:
      "ResumeIQ parses resumes against target job descriptions using TF-IDF and Jaccard similarity to quantify keyword density, detect critical skill gaps, simulate recruiter personas (FAANG, Startup, HR), and provide AI-assisted bullet re-writing with one-click LaTeX code generation.",
    keyFeatures: [
      "Intelligent ATS compatibility scoring with matched/missing keyword breakdown",
      "Multi-strategy job description keyword extraction and semantic matching",
      "Skill gap detection differentiating critical requirements vs nice-to-haves",
      "AI-driven bullet point rewriter converting tasks into quantified achievements",
      "Recruiter simulation providing persona-based feedback (FAANG, Startup, HR)",
      "Automated LaTeX generation for high-fidelity professional resume compiling",
      "Secure user management via Supabase Auth with Google OAuth and JWTs"
    ],
    techStack: [
      "React",
      "JavaScript",
      "FastAPI",
      "Supabase (PostgreSQL)",
      "Groq API (Llama 3.3)",
      "Tailwind CSS",
      "Vite"
    ],
    architectureHighlights: [
      {
        title: "Scoring Engine",
        description: "Dual-engine assessment combining TF-IDF lexical frequency with semantic overlap boosts for high-relevance qualifications."
      },
      {
        title: "AI Suggestion Pipeline",
        description: "Asynchronous FastAPI endpoints orchestrate Groq-accelerated Llama 3.3 inference for sub-second bullet re-generation."
      },
      {
        title: "State & Document Export",
        description: "Generates clean, ATS-compliant LaTeX code blocks and maintains resume evolution history across version iterations."
      }
    ],
    mockupType: "resume-dashboard"
  },
  {
    id: "datascope",
    title: "DataScope",
    tagline: "AI-Powered SQLite Database Visualizer & Query Workbench",
    category: "Software Engineering",
    categoryBadge: "Database & AI Flagship",
    featured: true,
    github: "https://github.com/Suchand06/DataScope",
    liveDemo: null, // No verified live demo, show only GitHub
    shortDescription:
      "An AI-powered SQLite database visualizer and workbench that helps developers explore schemas, inspect table profiles, generate SQL from natural language, and render visual ER diagrams.",
    problemStatement:
      "Inspecting SQLite database files usually involves cumbersome desktop software, manual schema inspection, and tedious handwritten queries without instant automated data profiling.",
    solutionOverview:
      "DataScope delivers a dark-themed developer workbench where users drag-and-drop SQLite databases to instantly explore foreign-key schemas, generate interactive Mermaid.js Entity-Relationship diagrams, auto-profile distributions and null counts via Pandas, and formulate complex queries using Gemini Natural-Language-to-SQL.",
    keyFeatures: [
      "Drag-and-drop instant SQLite database file uploads & in-memory querying",
      "Interactive schema explorer with table metadata and index inspectors",
      "Monaco-powered SQL editor with syntax highlighting and query execution",
      "Natural-language-to-SQL query generation powered by Google Gemini API",
      "Automatic data profiling: null counts, uniqueness ratios, distributions",
      "Interactive charts and metrics visualizations powered by Recharts",
      "Automated Entity Relationship (ER) diagrams dynamically rendered via Mermaid.js",
      "Visual EXPLAIN QUERY PLAN breakdown to optimize query execution costs"
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "SQLite",
      "Pandas",
      "NumPy",
      "Gemini API",
      "Monaco Editor",
      "Mermaid.js",
      "Recharts"
    ],
    architectureHighlights: [
      {
        title: "Monaco SQL Workspace",
        description: "Full-featured query execution environment with auto-completion, execution timers, and formatted tabular outputs."
      },
      {
        title: "Dynamic ER Modeling",
        description: "Introspects primary and foreign key constraints to dynamically compile visual Mermaid diagrams depicting table associations."
      },
      {
        title: "Data Profiling Pipeline",
        description: "Pandas and NumPy statistics worker analyzes column cardinalities, distributions, and outliers with zero manual setup."
      }
    ],
    mockupType: "datascope-dashboard"
  },
  {
    id: "spacehack",
    title: "spaceHack — SPACE STRIKE",
    tagline: "Playable 2D Browser Space Shooter Arcade",
    category: "Creative & Arcade",
    categoryBadge: "HTML5 Canvas Engine",
    featured: false,
    github: "https://github.com/Suchand06/spaceHack",
    liveDemo: "https://spacehack-seven.vercel.app/",
    shortDescription:
      "A complete, responsive browser-based 2D arcade space shooter developed using React, Vite, Tailwind CSS, and HTML5 Canvas API with procedural particle physics and Web Audio.",
    problemStatement:
      "Building a smooth, 60 FPS interactive game entirely within the web DOM requires precise frame-loop budgeting, efficient multi-entity collision detection, and zero-latency audio.",
    solutionOverview:
      "Developed a custom requestAnimationFrame game engine decoupling game tick updates from React renders. Features particle physics, boss waves every 5 levels, collision math, and Web Audio API synthesis with persistent high scores in LocalStorage.",
    keyFeatures: [
      "Responsive spaceship flight mechanics with keyboard, mouse, and touch drag controls",
      "Increasing difficulty curve with dynamic enemy waves and boss fights every 5 levels",
      "Accurate bounding-box and circle collision detection math",
      "Power-up drop system: rapid fire cannons, energy shields, and health packs",
      "Particle explosion simulation, starfield parallax, and screen-shake effects",
      "Procedural sound effects and synthesizer music via Web Audio API",
      "Persistent top-5 leaderboard stored in browser LocalStorage"
    ],
    techStack: [
      "React.js",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "HTML5 Canvas API",
      "Web Audio API",
      "LocalStorage"
    ],
    architectureHighlights: [
      {
        title: "Decoupled Game Loop",
        description: "RequestAnimationFrame loop manages Player, Enemy, Bullet, and Particle entities independently of React DOM re-renders."
      },
      {
        title: "Web Audio Synthesizer",
        description: "Synthesizes laser blasts, thrusters, and explosion tones directly in browser memory without heavy external MP3 assets."
      },
      {
        title: "Touch & Multi-Input",
        description: "Unified pointer and keyboard event bus providing seamless playability across desktop monitors and mobile touchscreens."
      }
    ],
    mockupType: "spacehack-game"
  },
  {
    id: "traffic-flow-prediction",
    title: "Traffic Flow Prediction",
    tagline: "Time-Series Predictive Modeling for Urban Road Networks",
    category: "AI & ML",
    categoryBadge: "Machine Learning",
    featured: false,
    github: "https://github.com/Suchand06/Traffic-Flow-Prediction",
    liveDemo: null, // No verified live demo, show only GitHub
    shortDescription:
      "A machine learning project focused on analyzing historical urban traffic flow patterns and engineering predictive time-series models to forecast vehicle volume.",
    problemStatement:
      "Metropolitan road networks experience volatile congestion spikes. Transportation planners need data-driven forecasting to predict volume bottlenecks before gridlock occurs.",
    solutionOverview:
      "Conducted exploratory data analysis on historical timestamped vehicle counts to uncover diurnal peak cycles and weekend variance. Engineered temporal feature vectors (lagged volumes, moving averages, hour-of-day encodings) and trained predictive models evaluated against Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE).",
    keyFeatures: [
      "Exploratory Data Analysis (EDA) uncovering diurnal peak and off-peak traffic distributions",
      "Data preprocessing pipeline handling missing timestamps, scaling, and outlier smoothing",
      "Temporal feature engineering including lag features, rolling windows, and cyclical hour encodings",
      "Comparative regression modeling evaluating linear baselines against tree-based ensembles",
      "Model evaluation using standard metrics: Mean Absolute Error (MAE) & Root Mean Squared Error (RMSE)",
      "Visualization of predicted volume curves against actual sensor recordings"
    ],
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook"
    ],
    architectureHighlights: [
      {
        title: "Time-Series Preprocessing",
        description: "Resamples uneven traffic sensor records into uniform intervals and imputes short-duration sensor dropouts."
      },
      {
        title: "Feature Matrix Construction",
        description: "Builds rolling historical statistics and cyclical trigonometric time encodings to expose rush hour periodicity."
      },
      {
        title: "Error Quantification",
        description: "Calculates MAE and RMSE residuals across test splits to rigorously assess model predictive fidelity."
      }
    ],
    mockupType: "traffic-dashboard"
  }
];

export const CERTIFICATIONS = [
  {
    title: "The Complete 2024 Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    platform: "Udemy",
    icon: "Globe",
    topics: [
      "Full-Stack Web Development",
      "React.js & Frontend Ecosystem",
      "Node.js, Express & REST APIs",
      "PostgreSQL, MongoDB & Databases",
      "Authentication & Security"
    ],
    description:
      "Comprehensive 65+ hour curriculum covering full-stack software development from core frontend foundations to production backend deployment and API integration."
  },
  {
    title: "Data Structures and Algorithms (Supreme Batch)",
    instructor: "Love Babbar",
    platform: "CodeHelp",
    icon: "Cpu",
    topics: [
      "Advanced C++ & STL Architecture",
      "Recursion, Backtracking & DP",
      "Trees, Graphs & Heaps",
      "Time & Space Complexity Analysis",
      "System Design Fundamentals"
    ],
    description:
      "Rigorous master-level program emphasizing algorithmic problem solving, optimal complexity bounds, bit manipulation, tree/graph algorithms, and interview-grade implementations."
  }
];

export const ACHIEVEMENTS = [
  {
    metric: "400+",
    label: "Problems Solved",
    title: "Competitive Programming Excellence",
    organization: "LeetCode & GeeksforGeeks",
    description:
      "Demonstrated algorithmic proficiency and persistent problem solving with over 400 problems solved across LeetCode and GeeksforGeeks, specializing in data structures, graph theory, and dynamic programming.",
    badge: "Algorithmic Problem Solving",
    link: "https://leetcode.com/u/uZggT8ZDkd",
    linkText: "View LeetCode Profile",
    icon: "Trophy"
  },
  {
    metric: "4th Place",
    label: "Collegiately",
    title: "IEEEXtreme 18.0 Global Programming Competition",
    organization: "IEEE Worldwide",
    description:
      "Secured 4th place collegiately among global competing teams in the prestigious 24-hour worldwide IEEEXtreme 18.0 virtual programming competition, solving complex algorithmic challenges under strict time and resource constraints.",
    badge: "Collegiate Distinction",
    link: null,
    linkText: null,
    icon: "Award"
  }
];

export const CREATIVE_EXPERIENCE = {
  organization: "Danz Addix",
  role: "Performing Artist & Cultural Representative",
  tagline: "Teamwork, Stage Presence, and Cultural Leadership",
  description:
    "Beyond writing code, I am an active performing artist and cultural representative with Danz Addix, the premier college dance crew. Performing at high-stakes cultural stages has strengthened my collaboration, leadership under pressure, creative rhythm, and dedication to excellence.",
  milestones: [
    {
      event: "RCB Unbox Event",
      detail: "Represented the dance crew on stage at the official Royal Challengers Bengaluru (RCB) Unbox Mega Event in front of thousands of spectators."
    },
    {
      event: "NIFT Bengaluru National Competition",
      detail: "Showcased high-energy choreography, synchronized teamwork, and athletic performance, securing 1st Place at NIFT Bengaluru's national-level competition."
    },
    {
      event: "IIM Bengaluru Representation",
      detail: "Represented the college cultural contingent at the prestigious Indian Institute of Management (IIM) Bengaluru festival."
    }
  ],
  skillsDemonstrated: [
    "High-Pressure Performance",
    "Cross-Functional Teamwork",
    "Choreographic Precision",
    "Stage Presence & Confidence"
  ]
};

export const BEYOND_THE_CODE = {
  interests: [
    { name: "Competitive Programming", icon: "Code2", desc: "Algorithmic speed & asymptotic limits" },
    { name: "DSA Problem Solving", icon: "Cpu", desc: "Complex trees, graphs, and dynamic programming" },
    { name: "Full-Stack Architecture", icon: "Layers", desc: "Decoupled APIs and scalable web apps" },
    { name: "Micro-Projects", icon: "Sparkles", desc: "Rapid weekend prototypes & developer tools" }
  ],
  hobbies: [
    { name: "Pencil Sketching", icon: "Palette", desc: "Fine-line portraits, anatomy, and graphite shading" },
    { name: "Digital Drawing", icon: "Brush", desc: "Digital illustration, concept sketches, and perspective" },
    { name: "Photography", icon: "Camera", desc: "Visual storytelling, lighting, architecture, and framing" }
  ],
  languages: [
    { language: "English", proficiency: "Professional Working Proficiency", level: "Fluent" },
    { language: "Kannada", proficiency: "Native / Mother Tongue", level: "Native" },
    { language: "Tulu", proficiency: "Conversational / Native Region", level: "Conversational" },
    { language: "Hindi", proficiency: "Working Proficiency", level: "Working" }
  ]
};
