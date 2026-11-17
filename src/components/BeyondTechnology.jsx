import React from 'react';
import { Sparkles, Users, Award, Flame, Star, Compass } from 'lucide-react';
import { CREATIVE_EXPERIENCE } from '../data/portfolioData';

export const BeyondTechnology = () => {
  return (
    <section id="creative" className="py-24 relative overflow-hidden bg-[#0c0c10]/40">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-300 font-mono text-xs mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>07. EXTRACURRICULAR EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Beyond Technology
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            Teamwork, stage presence, and artistic leadership through collegiate dance.
          </p>
        </div>

        {/* Featured Creative Card */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#16131c] via-[#141419] to-[#121217] border border-white/[0.08] p-8 sm:p-10 shadow-2xl overflow-hidden">
          
          {/* Subtle Stage Lighting Graphic Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-500/10 via-amber-500/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Organization & Overview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 font-mono text-xs">
                <Users className="w-3.5 h-3.5" />
                <span>Premier College Dance Crew</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {CREATIVE_EXPERIENCE.organization}
              </h3>
              
              <div className="text-sm font-semibold text-rose-400 font-mono">
                {CREATIVE_EXPERIENCE.role}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {CREATIVE_EXPERIENCE.description}
              </p>

              {/* Core Attributes */}
              <div className="flex flex-wrap gap-2 pt-2">
                {CREATIVE_EXPERIENCE.skillsDemonstrated.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-white/5 text-xs font-mono text-zinc-300"
                  >
                    ★ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Performance Milestones */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Significant Cultural Milestones
              </div>

              {CREATIVE_EXPERIENCE.milestones.map((item, mIdx) => (
                <div
                  key={mIdx}
                  className="p-4 rounded-xl bg-zinc-900/70 border border-white/[0.06] hover:border-rose-500/30 transition-colors space-y-1"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    <span>{item.event}</span>
                    {item.event.includes('1st') || item.detail.includes('1st place') ? (
                      <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        1st Place Winner
                      </span>
                    ) : null}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pl-4">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
