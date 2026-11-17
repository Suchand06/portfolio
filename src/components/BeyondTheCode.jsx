import React from 'react';
import {
  Sparkles,
  Palette,
  Camera,
  Brush,
  Languages,
  Code2,
  Cpu,
  Layers,
  HeartHandshake,
  Check
} from 'lucide-react';
import { BEYOND_THE_CODE } from '../data/portfolioData';

export const BeyondTheCode = () => {
  const iconMap = {
    Code2: <Code2 className="w-4 h-4 text-violet-400" />,
    Cpu: <Cpu className="w-4 h-4 text-cyan-400" />,
    Layers: <Layers className="w-4 h-4 text-blue-400" />,
    Sparkles: <Sparkles className="w-4 h-4 text-amber-400" />,
    Palette: <Palette className="w-4 h-4 text-rose-400" />,
    Brush: <Brush className="w-4 h-4 text-purple-400" />,
    Camera: <Camera className="w-4 h-4 text-emerald-400" />
  };

  return (
    <section id="beyond" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08. PERSONAL DIMENSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Beyond the Code
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            Technical curiosities, creative pursuits, and linguistic fluencies that shape my perspective.
          </p>
        </div>

        {/* 3-Column Creative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Technical Interests */}
          <div className="rounded-2xl bg-[#141419] border border-white/[0.08] hover:border-violet-500/30 p-6 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
                <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Technical Interests</h3>
                  <span className="text-[11px] font-mono text-zinc-500">Core engineering curiosities</span>
                </div>
              </div>

              <div className="space-y-3">
                {BEYOND_THE_CODE.interests.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.04] hover:bg-zinc-800/80 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                      {iconMap[item.icon] || <Sparkles className="w-4 h-4 text-violet-400" />}
                      <span>{item.name}</span>
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-1 pl-6">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
              Curiosity-driven building
            </div>
          </div>

          {/* Card 2: Creative Hobbies */}
          <div className="rounded-2xl bg-[#141419] border border-white/[0.08] hover:border-rose-500/30 p-6 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
                <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Creative Pursuits</h3>
                  <span className="text-[11px] font-mono text-zinc-500">Visual arts & photography</span>
                </div>
              </div>

              <div className="space-y-3">
                {BEYOND_THE_CODE.hobbies.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.04] hover:bg-zinc-800/80 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                      {iconMap[item.icon] || <Palette className="w-4 h-4 text-rose-400" />}
                      <span>{item.name}</span>
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-1 pl-6">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
              Patience, visual balance & framing
            </div>
          </div>

          {/* Card 3: Languages */}
          <div className="rounded-2xl bg-[#141419] border border-white/[0.08] hover:border-cyan-500/30 p-6 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Languages className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Languages</h3>
                  <span className="text-[11px] font-mono text-zinc-500">Communication & dialect</span>
                </div>
              </div>

              <div className="space-y-3">
                {BEYOND_THE_CODE.languages.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 border border-white/[0.04]"
                  >
                    <div>
                      <div className="text-xs font-semibold text-zinc-200">
                        {item.language}
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">
                        {item.proficiency}
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-zinc-800 border border-white/5 text-[10px] font-mono text-cyan-300">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500">
              Multilingual collaborator
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
