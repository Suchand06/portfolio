import React from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Database,
  Server,
  Layout,
  Wrench,
  Globe,
  Share2,
  Sparkles,
  GitBranch,
  Box,
  Binary,
  Zap,
  Flame,
  FileCode,
  Coffee
} from 'lucide-react';
import { Github } from './BrandIcons';

export const TechIcon = ({ name, className = "w-4 h-4" }) => {
  const normalized = name?.toLowerCase() || '';

  // Return crisp, pure SVGs that never overflow text
  switch (normalized) {
    // Languages
    case 'cpp':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="1.75" />
          <path d="M11 9H8a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h3" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 12h3M15.5 10.5v3M18.5 12h3M20 10.5v3" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'c':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#60A5FA" strokeWidth="1.75" />
          <path d="M14 8.5h-2.5a3.5 3.5 0 0 0-3.5 3.5v0a3.5 3.5 0 0 0 3.5 3.5H14" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M11.9 2c-4 0-3.8 1.7-3.8 1.7v1.8h3.9v.6H6.5S3 5.6 3 9.8c0 4.1 3 4 3 4h.9v-1.9s-.1-2.2 2.2-2.2h3.8s2.1 0 2.1-2.1V3.7S15.9 2 11.9 2zm-1.2 1.3a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z"
            fill="#38BDF8"
          />
          <path
            d="M12.1 22c4 0 3.8-1.7 3.8-1.7v-1.8H12v-.6h5.5s3.5.5 3.5-3.7c0-4.1-3-4-3-4h-.9v1.9s.1 2.2-2.2 2.2H11s-2.1 0-2.1 2.1v3.9s-.9 1.7 3.2 1.7zm1.2-1.3a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z"
            fill="#FACC15"
          />
        </svg>
      );

    case 'java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      );

    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#FACC15" />
          <path d="M9 16.5c0 .8.5 1.5 1.5 1.5s1.5-.5 1.5-1.5V11" stroke="#09090B" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 11.5c-.8-.5-1.7-.5-2.2 0-.6.5-.4 1.2.2 1.6l1 .7c.8.6 1 1.4.5 2.1-.6.8-1.8.8-2.5.3" stroke="#09090B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'sql':
      return <Database className={`text-emerald-400 ${className}`} />;

    // Frontend
    case 'react':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      );

    case 'html':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3l1.8 16.5L12 22l6.2-2.5L20 3H4z" />
          <path d="M16 7H8l.5 5h7l-.5 4.5-3 1-3-1-.2-2" />
        </svg>
      );

    case 'css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3l1.8 16.5L12 22l6.2-2.5L20 3H4z" />
          <path d="M8 8h8M8 12h7l-.5 4.5-2.5.8-2.5-.8-.2-2" />
        </svg>
      );

    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.8">
          <path d="M12 6C9.5 6 8 7.5 7.5 10.5C8.5 9 9.75 8.5 11.25 9C12.1 9.3 12.7 9.9 13.4 10.6C14.5 11.7 15.8 13 18.5 13C21 13 22.5 11.5 23 8.5C22 10 20.75 10.5 19.25 10C18.4 9.7 17.8 9.1 17.1 8.4C16 7.3 14.7 6 12 6Z" fill="#38BDF8" fillOpacity="0.25" />
          <path d="M5.5 13C3 13 1.5 14.5 1 17.5C2 16 3.25 15.5 4.75 16C5.6 16.3 6.2 16.9 6.9 17.6C8 18.7 9.3 20 12 20C14.5 20 16 18.5 16.5 15.5C15.5 17 14.25 17.5 12.75 17C11.9 16.7 11.3 16.1 10.6 15.4C9.5 14.3 8.2 13 5.5 13Z" fill="#38BDF8" fillOpacity="0.25" />
        </svg>
      );

    case 'vite':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M15.5 2L4 4.2L11.5 22L13 22L20.5 4.2L15.5 2Z" fill="#A855F7" fillOpacity="0.3" stroke="#A855F7" strokeWidth="1.5" />
          <path d="M14 2L9 12H13.5L10 20L17 9H12.5L14 2Z" fill="#FACC15" />
        </svg>
      );

    // Backend
    case 'fastapi':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#009688" fillOpacity="0.25" stroke="#009688" strokeWidth="1.5" />
          <path d="M13 3L6 13h5l-1 8 8-11h-5l1-7z" fill="#009688" stroke="#14B8A6" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      );

    case 'nodejs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2.5l8.5 4.9v9.8L12 22l-8.5-4.8V7.4L12 2.5z"
            stroke="#22C55E"
            strokeWidth="1.75"
            fill="#22C55E"
            fillOpacity="0.15"
          />
          <path d="M8.5 10v4l3.5 2 3.5-2v-4" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'express':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="#71717A" strokeWidth="1.5" fill="#27272A" />
          <path d="M7 8.5h4M7 12h3M7 15.5h4M13.5 9l4 6M17.5 9l-4 6" stroke="#E4E4E7" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'api':
      return <Share2 className={`text-indigo-400 ${className}`} />;

    // Databases
    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.75" strokeLinecap="round">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );

    case 'mongodb':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2c-.3 0-.6.1-.8.3C9.5 4 6 8.5 6 13.5c0 4.1 2.9 6.8 5.4 7.4.3.1.6 0 .6-.3V2.5c0-.3-.1-.5-.2-.5z"
            fill="#10B981"
          />
          <path
            d="M12 2c.3 0 .6.1.8.3 1.7 1.7 5.2 6.2 5.2 11.2 0 4.1-2.9 6.8-5.4 7.4-.3.1-.6 0-.6-.3V2.5c0-.3.1-.5.2-.5z"
            fill="#34D399"
          />
        </svg>
      );

    case 'supabase':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M13.5 2.5L3.5 15h9l-2 6.5 10-12.5h-9l2-6.5z"
            fill="#10B981"
            fillOpacity="0.25"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'sqlite':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 7l8-4 8 4-8 4-8-4z" stroke="#60A5FA" strokeWidth="1.5" fill="#60A5FA" fillOpacity="0.2" />
          <path d="M4 12l8 4 8-4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 17l8 4 8-4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    // AI & Tools
    case 'llm':
      return <Sparkles className={`text-violet-400 ${className}`} />;

    case 'agent':
      return <Cpu className={`text-cyan-400 ${className}`} />;

    case 'vector':
      return <Binary className={`text-indigo-400 ${className}`} />;

    case 'pandas':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="4" width="7" height="7" rx="1.5" fill="#3B82F6" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" fill="#60A5FA" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" fill="#93C5FD" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" fill="#2563EB" />
        </svg>
      );

    case 'numpy':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#38BDF8" strokeWidth="1.5" fill="#38BDF8" fillOpacity="0.15" />
          <path d="M12 22V12M12 12L3 7M12 12l9-5" stroke="#38BDF8" strokeWidth="1.5" />
        </svg>
      );

    case 'git':
      return <GitBranch className={`text-orange-400 ${className}`} />;

    case 'github':
      return <Github className={`text-zinc-200 ${className}`} />;

    case 'postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9.5" fill="#F97316" fillOpacity="0.25" stroke="#F97316" strokeWidth="1.5" />
          <path d="M8 12l3 3 5-6" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'mongoose':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="8" r="4" fill="#F59E0B" fillOpacity="0.3" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="4" fill="#D97706" fillOpacity="0.3" stroke="#D97706" strokeWidth="1.5" />
          <path d="M11 11l2 2" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    default:
      return <Code2 className={`text-zinc-400 ${className}`} />;
  }
};
