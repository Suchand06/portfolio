import React from 'react';
import { Trophy, Award, ExternalLink, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-xs mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>06. RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Milestones
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            Demonstrated performance in algorithmic problem solving and worldwide collegiate hackathons.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-[#141419] hover:bg-[#181822] border border-white/[0.08] hover:border-violet-500/40 p-8 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Metric & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-4xl sm:text-5xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
                      {item.metric}
                    </span>
                    <span className="block text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-zinc-800/80 border border-white/10 group-hover:scale-105 transition-transform">
                    {index === 0 ? (
                      <Code2 className="w-7 h-7 text-violet-400" />
                    ) : (
                      <Trophy className="w-7 h-7 text-amber-400" />
                    )}
                  </div>
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-violet-400 mb-4">
                  {item.organization}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action / Link Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 text-[11px] font-mono text-zinc-400">
                  {item.badge}
                </span>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors group/link"
                  >
                    <span>{item.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Official Competition Standing
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
