import React from 'react';
import { Award, BookOpen, ExternalLink, CheckCircle, GraduationCap, Globe, Cpu } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications = () => {
  const iconMap = {
    Globe: <Globe className="w-5 h-5 text-blue-400" />,
    Cpu: <Cpu className="w-5 h-5 text-violet-400" />
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#0c0c10]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05. CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Learning
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            Structured deep-dives into modern web architecture and advanced data structures.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-[#141419] hover:bg-[#181822] border border-white/[0.08] hover:border-amber-500/30 p-7 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header with platform & instructor */}
                <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-white/10 group-hover:scale-105 transition-transform">
                      {iconMap[cert.icon] || <Award className="w-5 h-5 text-amber-400" />}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-amber-400 uppercase tracking-wider">
                        {cert.platform}
                      </span>
                      <div className="text-xs text-zinc-400 font-mono">
                        Instructor: {cert.instructor}
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-[10px] font-mono text-zinc-400">
                    Verified Curriculum
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Covered Core Topics */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono text-zinc-400">Core Syllabus Mastery:</div>
                  <div className="flex flex-wrap gap-2">
                    {cert.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-white/5 text-xs text-zinc-300 font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Completed Comprehensive Program</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Honors
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
