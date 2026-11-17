import React from 'react';
import {
  Code2,
  Layers,
  Brain,
  Quote,
  CheckCircle2,
  Sparkles,
  Award,
  Terminal,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_PILLARS } from '../data/portfolioData';

export const AboutMe = () => {
  const iconMap = {
    Code2: <Code2 className="w-6 h-6 text-violet-400" />,
    Layers: <Layers className="w-6 h-6 text-blue-400" />,
    Brain: <Brain className="w-6 h-6 text-cyan-400" />
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-xs mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A Little About Me
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            Engineering computational logic into high-impact software solutions.
          </p>
        </div>

        {/* Featured Resume Pull-Quote Card */}
        <div className="relative rounded-2xl bg-gradient-to-r from-violet-950/20 via-zinc-900/80 to-cyan-950/20 border border-white/10 p-6 sm:p-8 mb-16 shadow-xl backdrop-blur-sm">
          <div className="absolute -top-3.5 left-8 px-3 py-1 rounded-md bg-zinc-900 border border-violet-500/30 text-[11px] font-mono text-violet-300 flex items-center gap-1.5 shadow-sm">
            <Quote className="w-3 h-3 text-violet-400" />
            <span>EXCERPT FROM RESUME</span>
          </div>

          <blockquote className="text-base sm:text-lg text-zinc-200 font-normal leading-relaxed italic mt-2">
            "{PERSONAL_INFO.bioQuote}"
          </blockquote>

          {/* Personal Introduction */}
          <div className="mt-6 pt-6 border-t border-white/[0.06] text-sm text-zinc-400 leading-relaxed">
            <p>
              I believe great software emerges when algorithmic discipline meets practical system architecture. 
              As an Information Science and Engineering student at B.M.S. College of Engineering in Bengaluru, 
              I spend my time dissecting complex problems into optimal data structures, writing robust APIs, 
              and exploring how modern language models can be reliably grounded in verified source code. 
              Beyond the screen, my background in competitive dance and creative arts has trained me to bring 
              dedication, rhythm, teamwork, and composure to every engineering team I join.
            </p>
          </div>
        </div>

        {/* Three Highlight Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {HIGHLIGHT_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className={`group relative rounded-2xl bg-[#141419] hover:bg-[#181820] border border-white/[0.08] ${pillar.borderAccent} p-7 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between`}
            >
              {/* Top Accent Gradient Bar */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${pillar.accentColor} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-zinc-800/80 border border-white/10 group-hover:scale-105 transition-transform">
                    {iconMap[pillar.icon]}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-zinc-400 px-2.5 py-1 rounded-full bg-zinc-800/60 border border-white/5">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                {pillar.bulletPoints.map((bp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#111116] border border-white/[0.06] text-center">
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-violet-400 font-mono">
              400+
            </div>
            <div className="text-xs text-zinc-400 mt-1">Problems Solved (LeetCode & GFG)</div>
          </div>
          <div className="p-3 border-l border-white/[0.06]">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
              8.25
            </div>
            <div className="text-xs text-zinc-400 mt-1">CGPA at BMSCE Bengaluru</div>
          </div>
          <div className="p-3 border-l border-white/[0.06]">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">
              4th Place
            </div>
            <div className="text-xs text-zinc-400 mt-1">IEEEXtreme 18.0 Collegiate</div>
          </div>
          <div className="p-3 border-l border-white/[0.06]">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
              5
            </div>
            <div className="text-xs text-zinc-400 mt-1">Production-Grade Projects</div>
          </div>
        </div>

      </div>
    </section>
  );
};
