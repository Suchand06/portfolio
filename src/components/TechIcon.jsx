import React from 'react';
import {
  Code,
  Terminal,
  Cpu,
  Layers,
  Database,
  Server,
  Layout,
  Wrench,
  Globe,
  FileCode,
  Braces,
  Share2,
  Sparkles,
  GitBranch,
  Box,
  Binary
} from 'lucide-react';

export const TechIcon = ({ name, className = "w-5 h-5" }) => {
  const iconMap = {
    // Languages
    cpp: (
      <span className={`inline-flex items-center justify-center font-bold text-xs text-blue-400 ${className}`}>
        C++
      </span>
    ),
    c: (
      <span className={`inline-flex items-center justify-center font-bold text-xs text-blue-300 ${className}`}>
        C
      </span>
    ),
    python: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 6 4.5 6 4.5V7h6V8H4.5S2 8.48 2 14c0 5.52 2.5 5 2.5 5H6v-2.5s-.48-3 5-3h1v-1.5s0-2.5 5-2.5h-5V6s0-4-6-4z" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" />
        <path d="M12 22c5.52 0 6-2.5 6-2.5V17h-6v-1h7.5s2.5-.48 2.5-6c0-5.52-2.5-5-2.5-5H18v2.5s.48 3-5 3h-1v1.5s0 2.5-5 2.5h5V18s0 4 6 4z" fill="#FACC15" fillOpacity="0.2" stroke="#FACC15" />
      </svg>
    ),
    java: (
      <span className={`inline-flex items-center justify-center font-bold text-xs text-orange-400 ${className}`}>
        Java
      </span>
    ),
    javascript: (
      <span className={`inline-flex items-center justify-center font-bold text-xs text-amber-300 ${className}`}>
        JS
      </span>
    ),
    sql: (
      <Database className={`text-emerald-400 ${className}`} />
    ),

    // Frontend
    react: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
      </svg>
    ),
    html: <Layout className={`text-orange-500 ${className}`} />,
    css: <Layers className={`text-blue-500 ${className}`} />,
    tailwind: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.8">
        <path d="M12 6C9.5 6 8 7.5 7.5 10.5C8.5 9 9.75 8.5 11.25 9C12.1 9.3 12.7 9.9 13.4 10.6C14.5 11.7 15.8 13 18.5 13C21 13 22.5 11.5 23 8.5C22 10 20.75 10.5 19.25 10C18.4 9.7 17.8 9.1 17.1 8.4C16 7.3 14.7 6 12 6Z" fill="#38BDF8" fillOpacity="0.2" />
        <path d="M5.5 13C3 13 1.5 14.5 1 17.5C2 16 3.25 15.5 4.75 16C5.6 16.3 6.2 16.9 6.9 17.6C8 18.7 9.3 20 12 20C14.5 20 16 18.5 16.5 15.5C15.5 17 14.25 17.5 12.75 17C11.9 16.7 11.3 16.1 10.6 15.4C9.5 14.3 8.2 13 5.5 13Z" fill="#38BDF8" fillOpacity="0.2" />
      </svg>
    ),
    vite: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.8">
        <path d="M15.5 2L4 4L11.5 22L13 22L20.5 4L15.5 2Z" fill="#A855F7" fillOpacity="0.2" />
        <path d="M14 2L9 12H13.5L10 20L17 9H12.5L14 2Z" fill="#FACC15" />
      </svg>
    ),

    // Backend
    fastapi: (
      <span className={`inline-flex items-center justify-center font-mono font-bold text-xs text-teal-400 ${className}`}>
        ⚡FastAPI
      </span>
    ),
    nodejs: (
      <span className={`inline-flex items-center justify-center font-mono font-bold text-xs text-green-400 ${className}`}>
        Node
      </span>
    ),
    express: (
      <span className={`inline-flex items-center justify-center font-mono font-bold text-xs text-zinc-300 ${className}`}>
        ex
      </span>
    ),
    api: <Share2 className={`text-indigo-400 ${className}`} />,

    // Databases
    mysql: <Database className={`text-sky-400 ${className}`} />,
    mongodb: <Database className={`text-emerald-500 ${className}`} />,
    supabase: (
      <span className={`inline-flex items-center justify-center font-bold text-xs text-emerald-400 ${className}`}>
        ⚡Supa
      </span>
    ),
    sqlite: <Database className={`text-blue-400 ${className}`} />,

    // AI & Tools
    llm: <Sparkles className={`text-violet-400 ${className}`} />,
    agent: <Cpu className={`text-cyan-400 ${className}`} />,
    vector: <Binary className={`text-indigo-400 ${className}`} />,
    pandas: <Box className={`text-blue-400 ${className}`} />,
    numpy: <Box className={`text-sky-400 ${className}`} />,
    git: <GitBranch className={`text-orange-400 ${className}`} />,
    github: <Code className={`text-zinc-200 ${className}`} />,
    postman: <Globe className={`text-orange-500 ${className}`} />,
    mongoose: <Database className={`text-amber-500 ${className}`} />
  };

  return iconMap[name?.toLowerCase()] || <Code className={`text-zinc-400 ${className}`} />;
};
