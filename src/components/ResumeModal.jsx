import React, { useEffect } from 'react';
import {
  X,
  Printer,
  Download,
  ExternalLink,
  GraduationCap,
  Code,
  Layers,
  Award,
  CheckCircle2,
  MapPin,
  Mail
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { PERSONAL_INFO, EDUCATION, PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS, CERTIFICATIONS, CREATIVE_EXPERIENCE } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#111116] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#16161e] border-b border-white/[0.08] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-xs text-zinc-300 font-semibold">
              Suchand_C_Achar_Resume.pdf
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-white/5">
              Verified Candidate
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 border border-white/10 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Sheet */}
        <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto font-sans text-zinc-200 space-y-7 bg-[#0f0f14] print:bg-white print:text-black print:p-0">
          
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
                {PERSONAL_INFO.name}
              </h1>
              <span className="text-xs font-mono text-violet-400 print:text-zinc-600 font-semibold">
                Information Science & Engineering • BMSCE
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs text-zinc-400 print:text-zinc-700 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-rose-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-violet-300 hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub: Suchand06
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer" className="hover:underline">
                LeetCode: 400+
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 print:text-black mb-2 border-b border-white/[0.06] pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-300 print:text-zinc-800">
              {PERSONAL_INFO.bioQuote}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 print:text-black mb-3 border-b border-white/[0.06] pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                  <div>
                    <div className="font-bold text-white print:text-black text-xs sm:text-sm">
                      {edu.institution}
                    </div>
                    <div className="text-zinc-300 print:text-zinc-800">
                      {edu.degree}
                    </div>
                    {edu.coursework && (
                      <div className="text-[11px] text-zinc-500 print:text-zinc-600 mt-0.5">
                        Coursework: {edu.coursework.join(', ')}
                      </div>
                    )}
                  </div>
                  <div className="text-right sm:shrink-0 font-mono text-[11px] text-violet-300 print:text-zinc-700">
                    <div className="font-semibold">{edu.score}</div>
                    <div className="text-zinc-500">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 print:text-black mb-3 border-b border-white/[0.06] pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-2 rounded bg-zinc-900/60 print:bg-transparent border border-white/[0.04] print:border-none">
                  <span className="font-bold text-zinc-300 print:text-black font-mono text-[11px]">
                    {cat.name}:{' '}
                  </span>
                  <span className="text-zinc-400 print:text-zinc-700">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 print:text-black mb-3 border-b border-white/[0.06] pb-1">
              Featured Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-white print:text-black flex items-center gap-2">
                      <span>{proj.title}</span>
                      <span className="font-normal text-zinc-500">| {proj.techStack.slice(0, 5).join(', ')}</span>
                    </div>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-cyan-400 print:text-zinc-700 hover:underline"
                    >
                      {proj.github.replace('https://github.com/', 'github.com/')}
                    </a>
                  </div>
                  <p className="text-zinc-400 print:text-zinc-700 text-[11px] leading-relaxed">
                    {proj.shortDescription}
                  </p>
                  <ul className="list-disc pl-4 text-[11px] text-zinc-300 print:text-zinc-800 space-y-0.5">
                    {proj.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Achievements */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 print:text-black mb-3 border-b border-white/[0.06] pb-1">
              Achievements & Extracurricular
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 print:text-black font-bold">✓</span>
                <div>
                  <strong className="text-white print:text-black">400+ Problems Solved</strong> — LeetCode & GeeksforGeeks. Proficient in dynamic programming, graph traversal, and trees.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 print:text-black font-bold">✓</span>
                <div>
                  <strong className="text-white print:text-black">IEEEXtreme 18.0 Global Competition</strong> — Secured 4th Place Collegiately among global competing teams.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 print:text-black font-bold">✓</span>
                <div>
                  <strong className="text-white print:text-black">Danz Addix (Performing Artist)</strong> — Represented crew at official RCB Unbox Event; secured 1st place at NIFT Bengaluru national competition; represented at IIM Bengaluru.
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-violet-400 print:text-black mb-2 border-b border-white/[0.06] pb-1">
              Certifications
            </h2>
            <div className="text-[11px] text-zinc-400 print:text-zinc-700 space-y-1">
              <div>• <strong>The Complete 2024 Web Development Bootcamp</strong> — Dr. Angela Yu (Udemy)</div>
              <div>• <strong>Data Structures and Algorithms (Supreme Batch)</strong> — Love Babbar (CodeHelp)</div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Controls */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#14141a] border-t border-white/[0.08] print:hidden">
          <span className="text-xs text-zinc-500 font-mono">
            Candidate ID: BMSCE-ISE-2027
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
