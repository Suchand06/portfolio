import React, { useState } from 'react';
import {
  Terminal,
  Cpu,
  Layers,
  Database,
  Layout,
  Wrench,
  Server,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryIcons = {
    'Programming Languages': <Terminal className="w-5 h-5 text-violet-400" />,
    'Frontend Development': <Layout className="w-5 h-5 text-blue-400" />,
    'Backend Development': <Server className="w-5 h-5 text-teal-400" />,
    'Databases & Storage': <Database className="w-5 h-5 text-emerald-400" />,
    'AI, ML & Emerging Tech': <Cpu className="w-5 h-5 text-cyan-400" />,
    'Developer Tools & Libraries': <Wrench className="w-5 h-5 text-amber-400" />
  };

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.name === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>03. TECH STACK & TOOLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technologies I Work With
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              Practical technical competencies across languages, architectures, databases, and AI frameworks.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-900/80 border border-white/10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.name
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.name}
              className="group relative rounded-2xl bg-[#141419] hover:bg-[#181822] border border-white/[0.08] hover:border-violet-500/30 p-6 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-white/10 group-hover:scale-105 transition-transform">
                    {categoryIcons[cat.name] || <Terminal className="w-5 h-5 text-violet-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-violet-200 transition-colors">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {cat.skills.length} core technologies
                    </span>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/70 hover:bg-zinc-800 border border-white/[0.04] hover:border-violet-500/30 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-6 h-6 rounded-lg bg-zinc-950 flex items-center justify-center shrink-0 border border-white/5">
                          <TechIcon name={skill.icon} className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-zinc-200 truncate group-hover/item:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 px-1.5 py-0.5 rounded bg-zinc-950 border border-white/5 shrink-0 ml-1">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Production tested</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
