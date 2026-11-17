import React, { useState } from 'react';
import {
  Code,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers,
  Terminal,
  Cpu,
  CheckCircle2,
  Info
} from 'lucide-react';
import { Github } from './BrandIcons';
import { PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & ML', 'Full Stack', 'Software Engineering', 'Creative & Arcade'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-xs mb-3">
              <Code className="w-3.5 h-3.5" />
              <span>04. FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Things I've Built
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              Turning ideas into practical software solutions with clean engineering and verified architectures.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-900/80 border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Projects Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isFeaturedLarge = project.featured;

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl bg-[#141419] hover:bg-[#181822] border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between overflow-hidden ${
                  isFeaturedLarge ? 'lg:col-span-1 ring-1 ring-violet-500/10' : ''
                }`}
              >
                {/* Featured Badge Flag */}
                {project.featured && (
                  <div className="absolute top-3 right-3 z-20">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-violet-950/80 border border-violet-500/40 text-[10px] font-mono font-semibold text-violet-300 shadow-sm backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-violet-400" />
                      FLAGSHIP
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Category Pill */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-200 transition-colors mt-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Visual Mockup Preview */}
                  <div className="mb-5 rounded-xl overflow-hidden border border-white/[0.06] group-hover:border-violet-500/20 transition-colors">
                    <ProjectMockup type={project.mockupType} />
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Key Features Preview */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-white/[0.04]">
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/5 text-[10px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/5 text-[10px] font-mono text-zinc-500">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-[#111116] border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {/* GitHub Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {/* Live Demo Button (ONLY if verified) */}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 hover:text-violet-200 border border-violet-500/30 transition-all text-xs font-semibold"
                        title="Open Verified Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 hover:text-white transition-colors group/btn"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-violet-400" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
