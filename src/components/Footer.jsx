import React from 'react';
import { ArrowUp, Mail, Code2, Heart } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#070709] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06] items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-600/30 border border-violet-500/40 text-white font-mono font-bold text-xs">
                {PERSONAL_INFO.initials}
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 font-mono">
              "Building, Learning, and Solving."
            </p>

            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              Information Science & Engineering undergraduate at B.M.S. College of Engineering, Bengaluru. 
              Engineering scalable software and evidence-grounded AI systems.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="text-zinc-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-zinc-400 hover:text-white transition-colors">About Me</a>
              <a href="#education" className="text-zinc-400 hover:text-white transition-colors">Education</a>
              <a href="#skills" className="text-zinc-400 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">Projects</a>
              <a href="#achievements" className="text-zinc-400 hover:text-white transition-colors">Achievements</a>
              <a href="#creative" className="text-zinc-400 hover:text-white transition-colors">Extracurricular</a>
              <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect & Back-to-Top */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              Connect
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-violet-500/40 text-zinc-400 hover:text-white transition-all shadow-sm"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-violet-500/40 text-zinc-400 hover:text-white transition-all shadow-sm"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-violet-500/40 text-zinc-400 hover:text-white transition-all shadow-sm"
                title="LeetCode"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-violet-500/40 text-zinc-400 hover:text-white transition-all shadow-sm"
                title="Email"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 hover:text-white transition-all shadow-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-violet-400" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Vite & Tailwind CSS.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted in Bengaluru, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
