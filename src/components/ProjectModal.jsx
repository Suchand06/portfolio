import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
  Terminal,
  AlertCircle,
  Lightbulb,
  FileCode,
  ShieldCheck
} from 'lucide-react';
import { Github } from './BrandIcons';
import { ProjectMockup } from './ProjectMockup';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#111116] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#16161e] border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-violet-300 font-semibold">
              {project.categoryBadge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-1 text-sm sm:text-base font-mono text-zinc-400">
              {project.tagline}
            </p>
          </div>

          {/* Project Preview Visual */}
          <div className="rounded-xl overflow-hidden border border-white/[0.08] shadow-lg">
            <ProjectMockup type={project.mockupType} />
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-zinc-800 hover:bg-zinc-700 border border-white/10 hover:border-white/20 transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border border-violet-400/30 transition-all shadow-md shadow-violet-600/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Verified Live Demo</span>
              </a>
            )}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-rose-500/20 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold">
                <AlertCircle className="w-4 h-4" />
                <span>THE ENGINEERING PROBLEM</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-emerald-500/20 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                <Lightbulb className="w-4 h-4" />
                <span>THE ARCHITECTURAL SOLUTION</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>
          </div>

          {/* Key Capabilities */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-violet-400" />
              <span>Core System Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/40 border border-white/[0.04] text-xs text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && (
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Architecture Breakdown</span>
              </h3>
              <div className="space-y-3">
                {project.architectureHighlights.map((arch, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] space-y-1"
                  >
                    <div className="font-semibold text-xs text-violet-300">
                      {arch.title}
                    </div>
                    <div className="text-xs text-zinc-400 leading-relaxed">
                      {arch.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack Badges */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-yellow-400" />
              <span>Verified Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="flex items-center justify-end px-6 py-4 bg-[#14141a] border-t border-white/[0.08]">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
