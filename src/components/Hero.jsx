import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Check,
  Copy,
  ChevronRight,
  Play
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: 'SCA Core Terminal v2.5 initialized [BMSCE/ISE]' },
    { type: 'system', text: 'Type "help" or click quick chips below to run commands.' }
  ]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Typewriter effect for professional titles
  useEffect(() => {
    const currentTitle = PERSONAL_INFO.titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseDuration = 1800;

    let timeout;
    if (!isDeleting && displayedText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentTitle.substring(0, displayedText.length - 1)
            : currentTitle.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleTerminalSubmit = (e) => {
    e?.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    executeCommand(cmd);
    setTerminalInput('');
  };

  const executeCommand = (cmd) => {
    const newEntry = [{ type: 'user', text: `$ ${cmd}` }];

    switch (cmd) {
      case 'help':
        newEntry.push({
          type: 'output',
          text: 'Available commands: whoami, skills, projects, achievements, contact, clear'
        });
        break;
      case 'whoami':
        newEntry.push({
          type: 'output',
          text: `${PERSONAL_INFO.name} — Information Science & Engineering student at BMSCE, Bengaluru. Specializing in C++, scalable full-stack development, and AI/RAG architectures.`
        });
        break;
      case 'skills':
        newEntry.push({
          type: 'output',
          text: 'Core: C++, C, Python, JavaScript, SQL | Frontend: React, Tailwind, Vite | Backend: FastAPI, Node.js, Express | DB: SQLite, MySQL, Supabase, MongoDB | AI: LLMs, RAG, Embeddings'
        });
        break;
      case 'projects':
        newEntry.push({
          type: 'output',
          text: '1. RepoLens (Local-First RAG)\n2. ResumeIQ (AI Resume Optimizer)\n3. DataScope (AI SQLite Visualizer)\n4. spaceHack (HTML5 Canvas Shooter)\n5. Traffic Flow Prediction (ML)'
        });
        break;
      case 'achievements':
        newEntry.push({
          type: 'output',
          text: '• 400+ Problems Solved (LeetCode & GFG)\n• 4th Place Collegiately — IEEEXtreme 18.0 Global Competition'
        });
        break;
      case 'contact':
        newEntry.push({
          type: 'output',
          text: `Email: ${PERSONAL_INFO.email} | GitHub: Suchand06 | LinkedIn: suchand-c-achar`
        });
        break;
      case 'clear':
        setTerminalHistory([]);
        return;
      default:
        newEntry.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`
        });
        break;
    }

    setTerminalHistory((prev) => [...prev, ...newEntry]);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-20 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/15 rounded-full blur-[128px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-[128px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Introductory Label Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wider uppercase text-[11px] font-semibold text-zinc-300">
                HELLO, I'M SUCHAND C ACHAR
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Building Intelligent{' '}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Solutions Through
              </span>{' '}
              Code.
            </h1>

            {/* Rotating Titles */}
            <div className="flex items-center gap-2 mb-6 text-lg sm:text-xl font-mono text-zinc-300">
              <span className="text-zinc-500">{'>'}</span>
              <span className="text-violet-400 font-semibold">{displayedText}</span>
              <span className="w-2 h-5 bg-cyan-400 animate-pulse" />
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border border-violet-400/30 shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/10 hover:border-violet-500/40 hover:text-white transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 text-violet-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Secondary Social Links & Location */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.08] w-full text-xs text-zinc-400">
              {/* Location Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-white/[0.06] text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-white/[0.06] hover:border-white/20 text-zinc-300 hover:text-white transition-all"
                title="GitHub: Suchand06"
              >
                <Github className="w-3.5 h-3.5 text-zinc-200" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-white/[0.06] hover:border-white/20 text-zinc-300 hover:text-white transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              {/* LeetCode */}
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-white/[0.06] hover:border-white/20 text-zinc-300 hover:text-white transition-all"
                title="LeetCode: uZggT8ZDkd"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode</span>
              </a>

              {/* Email Copy Trigger */}
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-white/[0.06] hover:border-white/20 text-zinc-300 hover:text-white transition-all"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-violet-400" />
                    <span>Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Developer Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating Technology Badges */}
            <div className="absolute -top-6 -left-4 z-20 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-violet-500/40 text-xs font-mono font-medium text-violet-300 shadow-xl shadow-violet-950/40 backdrop-blur-md animate-float-slow hidden sm:flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span>React.js</span>
            </div>

            <div className="absolute top-12 -right-5 z-20 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-blue-500/40 text-xs font-mono font-medium text-blue-300 shadow-xl shadow-blue-950/40 backdrop-blur-md animate-float-delay hidden sm:flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Python 3.11</span>
            </div>

            <div className="absolute bottom-16 -left-6 z-20 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-cyan-500/40 text-xs font-mono font-medium text-cyan-300 shadow-xl shadow-cyan-950/40 backdrop-blur-md animate-float-slow hidden sm:flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>FastAPI & RAG</span>
            </div>

            <div className="absolute -bottom-4 right-6 z-20 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-emerald-500/40 text-xs font-mono font-medium text-emerald-300 shadow-xl shadow-emerald-950/40 backdrop-blur-md animate-float-delay hidden sm:flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>C++ & DSA (400+)</span>
            </div>

            {/* Main Window Frame */}
            <div className="relative rounded-2xl bg-[#111116] border border-white/10 shadow-2xl shadow-black/80 overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#16161c] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">workspace / suchand-c-achar</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${
                      activeTab === 'profile'
                        ? 'bg-zinc-800 text-violet-300 border border-violet-500/30'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    engineer.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${
                      activeTab === 'architecture'
                        ? 'bg-zinc-800 text-cyan-300 border border-cyan-500/30'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    rag_flow.py
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors flex items-center gap-1 ${
                      activeTab === 'terminal'
                        ? 'bg-zinc-800 text-emerald-300 border border-emerald-500/30'
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>terminal</span>
                  </button>
                </div>
              </div>

              {/* Tab 1: TypeScript Profile Code */}
              {activeTab === 'profile' && (
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300 overflow-x-auto min-h-[340px]">
                  <div className="text-zinc-500 mb-2">// Suchand C Achar — Engineering Profile</div>
                  <div>
                    <span className="text-violet-400">interface</span>{' '}
                    <span className="text-yellow-300">SoftwareEngineer</span> {'{'}
                  </div>
                  <div className="pl-4">
                    name: <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>;
                  </div>
                  <div className="pl-4">
                    education: <span className="text-emerald-300">"B.M.S. College of Engineering"</span>;
                  </div>
                  <div className="pl-4">
                    major: <span className="text-emerald-300">"Information Science & Engineering ('27)"</span>;
                  </div>
                  <div className="pl-4">
                    cgpa: <span className="text-cyan-300">8.25</span>;
                  </div>
                  <div className="pl-4">
                    dsaSolved: <span className="text-cyan-300">400</span>; <span className="text-zinc-500">// LeetCode + GFG</span>
                  </div>
                  <div className="pl-4">
                    coreStrengths: [<span className="text-emerald-300">"C++"</span>, <span className="text-emerald-300">"FastAPI"</span>, <span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"RAG"</span>];
                  </div>
                  <div className="pl-4">
                    openToRelocation: <span className="text-rose-400">true</span>;
                  </div>
                  <div>{'}'}</div>
                  <div className="mt-3">
                    <span className="text-violet-400">const</span>{' '}
                    <span className="text-blue-400">suchand</span>:{' '}
                    <span className="text-yellow-300">SoftwareEngineer</span> = {'{'}
                  </div>
                  <div className="pl-4 text-zinc-400">
                    passion: <span className="text-emerald-300">"Building evidence-grounded AI & robust backends"</span>,
                  </div>
                  <div className="pl-4 text-zinc-400">
                    mindset: <span className="text-emerald-300">"High-throughput code, clean abstractions"</span>
                  </div>
                  <div>{'};'}</div>
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500">
                    <span>UTF-8 • TypeScript 5.5</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Compiled 0 errors
                    </span>
                  </div>
                </div>
              )}

              {/* Tab 2: Architecture Python Code */}
              {activeTab === 'architecture' && (
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300 overflow-x-auto min-h-[340px]">
                  <div className="text-zinc-500 mb-2">// RepoLens Grounded Retrieval Pipeline</div>
                  <div>
                    <span className="text-violet-400">async def</span>{' '}
                    <span className="text-blue-400">grounded_retrieve</span>(query: <span className="text-yellow-300">str</span>, repo_id: <span className="text-yellow-300">str</span>):
                  </div>
                  <div className="pl-4 text-zinc-400">
                    # 1. Hybrid Reciprocal Rank Fusion
                  </div>
                  <div className="pl-4">
                    dense_hits = <span className="text-violet-400">await</span> lancedb.vector_search(query)
                  </div>
                  <div className="pl-4">
                    sparse_hits = bm25.search(query, k=<span className="text-cyan-300">20</span>)
                  </div>
                  <div className="pl-4">
                    chunks = rrf_merge(dense_hits, sparse_hits, alpha=<span className="text-cyan-300">60</span>)
                  </div>
                  <div className="pl-4 mt-2 text-zinc-400">
                    # 2. Syntax AST Verification via Tree-sitter
                  </div>
                  <div className="pl-4">
                    spans = validate_citations(chunks, verify_disk=<span className="text-rose-400">True</span>)
                  </div>
                  <div className="pl-4">
                    grounding_score = compute_nli_entailment(spans)
                  </div>
                  <div className="pl-4 mt-2">
                    <span className="text-violet-400">return</span> GroundedResponse(score=grounding_score, verified=<span className="text-rose-400">True</span>)
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500">
                    <span>Python 3.11 • LanceDB + Tree-Sitter</span>
                    <span className="text-cyan-400">Verified Pipeline</span>
                  </div>
                </div>
              )}

              {/* Tab 3: Interactive CLI Terminal */}
              {activeTab === 'terminal' && (
                <div className="p-4 font-mono text-xs leading-relaxed flex flex-col justify-between min-h-[340px]">
                  <div className="space-y-1.5 overflow-y-auto max-h-[220px] pr-1">
                    {terminalHistory.map((item, index) => (
                      <div
                        key={index}
                        className={`whitespace-pre-wrap ${
                          item.type === 'user'
                            ? 'text-cyan-300 font-semibold'
                            : item.type === 'error'
                            ? 'text-rose-400'
                            : item.type === 'system'
                            ? 'text-zinc-500'
                            : 'text-zinc-300'
                        }`}
                      >
                        {item.text}
                      </div>
                    ))}
                  </div>

                  {/* Quick Command Chips */}
                  <div className="pt-3 border-t border-white/[0.06]">
                    <div className="text-[10px] text-zinc-500 mb-1.5">Quick triggers:</div>
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {['whoami', 'skills', 'projects', 'achievements', 'contact'].map((cmd) => (
                        <button
                          key={cmd}
                          onClick={() => executeCommand(cmd)}
                          className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[11px] border border-white/5 transition-colors"
                        >
                          {cmd}
                        </button>
                      ))}
                    </div>

                    {/* Interactive Input Form */}
                    <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1.5">
                      <span className="text-emerald-400 font-bold">$</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        placeholder="Type a command (e.g. whoami, projects) ..."
                        className="flex-1 bg-transparent border-none text-zinc-200 placeholder-zinc-600 focus:outline-none text-xs"
                      />
                      <button
                        type="submit"
                        className="px-2 py-1 rounded bg-violet-600/30 text-violet-300 hover:bg-violet-600/50 text-[11px]"
                      >
                        Run
                      </button>
                    </form>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
