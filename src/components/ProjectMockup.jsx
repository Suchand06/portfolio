import React from 'react';
import {
  FileCode,
  CheckCircle,
  Database,
  Terminal,
  Activity,
  Zap,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  GitBranch,
  ShieldAlert,
  Flame
} from 'lucide-react';

export const ProjectMockup = ({ type }) => {
  switch (type) {
    case 'repolens-dashboard':
      return (
        <div className="w-full h-48 sm:h-56 bg-[#0d0d12] rounded-xl border border-white/10 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none">
          {/* Subtle glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-violet-600/20 rounded-full blur-2xl" />

          {/* Top Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="font-semibold text-white">RepoLens</span>
              <span className="text-zinc-500">/ engine-query</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px]">
                Grounding: 94%
              </span>
            </div>
          </div>

          {/* Body: Left file tree + Right grounded answer */}
          <div className="grid grid-cols-12 gap-2 my-auto">
            {/* Tree */}
            <div className="col-span-4 bg-zinc-900/60 rounded p-2 border border-white/[0.04] space-y-1 text-zinc-400 hidden sm:block">
              <div className="text-zinc-300 font-semibold flex items-center gap-1">
                <FileCode className="w-3 h-3 text-violet-400" />
                <span>src/</span>
              </div>
              <div className="pl-3 text-zinc-500">├── ingestion.py</div>
              <div className="pl-3 text-violet-300 bg-violet-500/10 rounded px-1">└── rrf_rank.py</div>
              <div className="pl-3 text-zinc-500">└── drift.py</div>
            </div>

            {/* Answer */}
            <div className="col-span-12 sm:col-span-8 bg-zinc-900/80 rounded p-2 border border-white/[0.06] space-y-1.5">
              <div className="text-[10px] text-zinc-400 flex items-center justify-between">
                <span className="text-violet-400 font-semibold">Q: How does hybrid ranking work?</span>
                <span className="text-emerald-400 font-mono">100% verified</span>
              </div>
              <p className="text-zinc-300 text-[10px] leading-relaxed line-clamp-2">
                "Dense LanceDB vectors and BM25 token frequencies are normalized with Reciprocal Rank Fusion."
              </p>
              <div className="flex items-center gap-1.5 pt-1 text-[9px] text-cyan-300">
                <span className="px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 font-mono">
                  src/rrf_rank.py#L42-L78
                </span>
                <span className="text-zinc-500">• 0 hallucinations</span>
              </div>
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500">
            <span>LanceDB Dense + BM25 Sparse</span>
            <span className="text-violet-400">Tree-sitter AST OK</span>
          </div>
        </div>
      );

    case 'resume-dashboard':
      return (
        <div className="w-full h-48 sm:h-56 bg-[#0d0d12] rounded-xl border border-white/10 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none">
          {/* Subtle glow */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />

          {/* Top Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="font-semibold text-white">ResumeIQ</span>
              <span className="text-zinc-500">/ ATS Analytics</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/30 text-[10px]">
              Llama 3.3 70B
            </span>
          </div>

          {/* Body */}
          <div className="grid grid-cols-12 gap-2 my-auto items-center">
            {/* Score Ring */}
            <div className="col-span-5 sm:col-span-4 flex flex-col items-center justify-center p-2 rounded bg-zinc-900/60 border border-white/[0.04]">
              <span className="text-xs text-zinc-400">ATS Match</span>
              <span className="text-2xl font-extrabold text-emerald-400">88%</span>
              <span className="text-[9px] text-emerald-500">Strong Candidate</span>
            </div>

            {/* Keyword stats */}
            <div className="col-span-7 sm:col-span-8 space-y-1.5">
              <div className="text-[10px] text-zinc-400">Semantic Keywords Matched:</div>
              <div className="flex flex-wrap gap-1">
                {['FastAPI', 'React', 'PostgreSQL', 'Docker', 'RAG'].map((kw) => (
                  <span key={kw} className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 text-[9px] border border-white/5">
                    ✓ {kw}
                  </span>
                ))}
              </div>
              <div className="text-[10px] text-amber-300/80 bg-amber-500/10 p-1.5 rounded border border-amber-500/20">
                Persona: FAANG Recruiter • Added metric quantification
              </div>
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500">
            <span>Supabase Auth + PostgreSQL</span>
            <span className="text-cyan-400">LaTeX Export Ready</span>
          </div>
        </div>
      );

    case 'datascope-dashboard':
      return (
        <div className="w-full h-48 sm:h-56 bg-[#0d0d12] rounded-xl border border-white/10 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none">
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-cyan-600/20 rounded-full blur-2xl" />

          {/* Top Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="font-semibold text-white">DataScope</span>
              <span className="text-zinc-500">/ SQLite Studio</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[10px]">
              Gemini NL-to-SQL
            </span>
          </div>

          {/* Body */}
          <div className="space-y-2 my-auto">
            {/* Query */}
            <div className="bg-zinc-900/90 rounded p-2 border border-white/[0.06] text-[10px] space-y-1">
              <div className="text-zinc-500 flex items-center justify-between">
                <span>SQL Workbench (Monaco)</span>
                <span className="text-emerald-400 font-mono">Exec: 1.4ms</span>
              </div>
              <div className="text-zinc-300">
                <span className="text-violet-400">SELECT</span> dept, <span className="text-violet-400">AVG</span>(salary) <span className="text-violet-400">FROM</span> engineers <span className="text-violet-400">GROUP BY</span> dept;
              </div>
            </div>

            {/* Visual ER / Profiler tags */}
            <div className="flex items-center gap-2 text-[9px]">
              <span className="px-2 py-1 rounded bg-zinc-800 border border-white/5 text-zinc-300 flex items-center gap-1">
                <Database className="w-2.5 h-2.5 text-cyan-400" />
                Mermaid ER: 6 Tables Linked
              </span>
              <span className="px-2 py-1 rounded bg-zinc-800 border border-white/5 text-zinc-300 flex items-center gap-1">
                <Activity className="w-2.5 h-2.5 text-emerald-400" />
                Profiling: 0% Nulls
              </span>
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500">
            <span>FastAPI + Pandas Profiler</span>
            <span className="text-cyan-400">EXPLAIN QUERY PLAN OK</span>
          </div>
        </div>
      );

    case 'spacehack-game':
      return (
        <div className="w-full h-48 sm:h-56 bg-[#04060e] rounded-xl border border-white/10 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none">
          {/* Animated stars & neon grid */}
          <div className="absolute inset-0 bg-dot-pattern opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl" />

          {/* HUD Bar */}
          <div className="relative flex items-center justify-between pb-2 border-b border-cyan-500/20 text-cyan-300">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-xs tracking-wider">SPACE STRIKE</span>
              <span className="text-[10px] text-cyan-400">LVL 05</span>
            </div>
            <div className="flex items-center gap-3 text-[10px]">
              <span>SCORE: <strong className="text-white font-bold">12,850</strong></span>
              <span className="text-rose-400">SHIELD: 80%</span>
            </div>
          </div>

          {/* Canvas Mockup Scene */}
          <div className="relative h-24 flex items-center justify-center">
            {/* Boss Alien */}
            <div className="absolute top-1 text-center animate-bounce">
              <div className="inline-block px-2 py-0.5 rounded bg-rose-950/80 border border-rose-500/50 text-rose-300 text-[10px] font-bold">
                👾 BOSS ENCOUNTER
              </div>
            </div>

            {/* Laser beams */}
            <div className="absolute top-8 w-0.5 h-8 bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            <div className="absolute top-8 left-1/2 ml-3 w-0.5 h-8 bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

            {/* Spaceship */}
            <div className="absolute bottom-2 flex flex-col items-center">
              <div className="w-4 h-6 border-b-2 border-l-2 border-r-2 border-cyan-300 bg-cyan-500/40 rounded-t-sm shadow-[0_0_15px_#22d3ee]" />
              <div className="w-2 h-2 bg-amber-400 rounded-full blur-[1px] animate-pulse" />
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className="relative pt-2 border-t border-cyan-500/20 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="text-cyan-400">HTML5 Canvas 60 FPS</span>
            <span className="text-amber-400">Web Audio API Active</span>
          </div>
        </div>
      );

    case 'traffic-dashboard':
      return (
        <div className="w-full h-48 sm:h-56 bg-[#0d0d12] rounded-xl border border-white/10 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] select-none">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-600/15 rounded-full blur-2xl" />

          {/* Top Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-white">Traffic Analytics</span>
              <span className="text-zinc-500">/ Time-Series</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px]">
              RMSE: 19.8
            </span>
          </div>

          {/* Graph visual */}
          <div className="my-auto space-y-2">
            <div className="flex items-end gap-1 h-16 pt-2 px-1">
              {[20, 35, 60, 95, 80, 50, 40, 75, 100, 85, 45, 30].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className={`w-full rounded-t ${
                      val > 70
                        ? 'bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.4)]'
                        : val > 45
                        ? 'bg-amber-500/70'
                        : 'bg-emerald-500/70'
                    }`}
                    style={{ height: `${val}%` }}
                  />
                  <span className="text-[7px] text-zinc-500">{i * 2}h</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[9px] text-zinc-400 px-1">
              <span>Peak: 08:00 - 10:00 & 18:00</span>
              <span className="text-emerald-400">MAE: 14.2 vehicles/hr</span>
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500">
            <span>Pandas + Scikit-Learn</span>
            <span className="text-emerald-400">Lag Features Preprocessed</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
