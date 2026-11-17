import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0c0c10]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>02. ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            Strong foundations in computer science, mathematics, and systems engineering.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12 ml-2 sm:ml-4">
          {EDUCATION.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#141419] border-2 border-violet-500 group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-200 shadow-md shadow-violet-950/40">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-300 group-hover:text-cyan-300" />
              </div>

              {/* Education Card */}
              <div className="rounded-2xl bg-[#141419] hover:bg-[#181822] border border-white/[0.08] hover:border-violet-500/30 p-6 sm:p-8 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                
                {/* Header: Institution, Period & Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-200 transition-colors">
                      {item.institution}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mt-1.5 font-mono">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Score Highlight Badge */}
                  <div className="self-start sm:self-auto flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-violet-950/40 border border-violet-500/30 text-violet-300 font-mono text-xs font-semibold shadow-inner">
                    <Award className="w-3.5 h-3.5 text-violet-400" />
                    <span>{item.score}</span>
                  </div>
                </div>

                {/* Degree / Program */}
                <div className="text-sm sm:text-base font-semibold text-zinc-200 mb-3">
                  {item.degree}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Relevant Coursework */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="text-xs font-mono text-zinc-400 mb-2.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Relevant Coursework:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-white/5 text-[11px] sm:text-xs text-zinc-300 font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
