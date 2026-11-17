import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { Github } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

export const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Compute scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }

      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = 'home';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-transparent">
        <div 
          className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav bg-[#09090b]/85 backdrop-blur-xl py-3 border-b border-white/[0.08] shadow-2xl shadow-black/40'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="Suchand C Achar Home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-600/20 border border-violet-500/30 group-hover:border-violet-400/60 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]">
                <span className="font-mono font-extrabold text-sm tracking-wider text-white">
                  {PERSONAL_INFO.initials}
                </span>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-violet-300 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="font-mono text-[10px] text-zinc-400 tracking-wider">
                  BMSCE '27 • ISE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-zinc-900/60 border border-white/[0.06] backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/10 shadow-sm shadow-white/5'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 -z-10 border border-violet-500/30" />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Actions: Resume & GitHub */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={onOpenResume}
                className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-violet-500/40 transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
              >
                <FileText className="w-3.5 h-3.5 text-violet-400 group-hover:rotate-6 transition-transform" />
                <span>Resume</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-white/20 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-200 bg-zinc-900 border border-white/10"
              >
                <FileText className="w-3.5 h-3.5 text-violet-400" />
                <span>CV</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-300 hover:text-white bg-zinc-900 border border-white/10 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden px-4 pt-3 pb-6 mt-3 bg-[#0c0c10]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-violet-600/20 to-cyan-600/10 border border-violet-500/30'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white py-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub @Suchand06</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Resume</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
