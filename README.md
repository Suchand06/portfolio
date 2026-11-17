# Suchand C Achar — Personal Developer Portfolio

A production-quality developer portfolio website built for **Suchand C Achar**, an Information Science & Engineering student at **B.M.S. College of Engineering**, Bengaluru, and aspiring Software Engineer.

Designed with a premium, minimal, dark-mode aesthetic inspired by Linear, Vercel, and Apple developer platforms.

---

## 🚀 Live Demos & Verified Links

- **GitHub Profile**: [github.com/Suchand06](https://github.com/Suchand06)
- **LinkedIn**: [linkedin.com/in/suchand-c-achar](https://linkedin.com/in/suchand-c-achar)
- **LeetCode**: [leetcode.com/u/uZggT8ZDkd](https://leetcode.com/u/uZggT8ZDkd) (400+ Problems Solved)
- **Featured Live Project Demos**:
  - **ResumeIQ**: [resume-optimizer-seven-omega.vercel.app](https://resume-optimizer-seven-omega.vercel.app/)
  - **spaceHack (SPACE STRIKE)**: [spacehack-seven.vercel.app](https://spacehack-seven.vercel.app/)

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 19, Vite, TypeScript/JSX, Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React + Custom SVG Brand Glyphs
- **Performance**: 672ms client build time, zero runtime lag, responsive design, prefers-reduced-motion compliance
- **Design System**:
  - Background: Near-black `#09090B`
  - Cards: Charcoal `#141419`
  - Accents: Electric violet `#8B5CF6`, Indigo `#6366F1`, Cyan `#06B6D4`
  - Typography: Plus Jakarta Sans & JetBrains Mono

---

## 📂 Project Structure

```text
portfolio/
├── dist/                      # Production build output
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutMe.jsx        # Resume quote, 3 pillars, quick metrics
│   │   ├── Achievements.jsx   # 400+ DSA & IEEEXtreme 18.0 4th place
│   │   ├── BeyondTechnology.jsx # Danz Addix (RCB Unbox, NIFT 1st place, IIM)
│   │   ├── BeyondTheCode.jsx  # Technical interests, sketch art, languages
│   │   ├── BrandIcons.jsx     # Crisp GitHub & LinkedIn SVGs
│   │   ├── Certifications.jsx # Angela Yu Web Dev & Love Babbar DSA Supreme
│   │   ├── Contact.jsx        # Mailto fallback, copy draft, validation
│   │   ├── Education.jsx      # BMSCE (8.25 CGPA), PUC (91.66%), SSLC (88.96%)
│   │   ├── Footer.jsx         # SCA brand, navigation, dynamic year
│   │   ├── Hero.jsx           # Rotating titles, terminal, code viewer, CTAs
│   │   ├── Navbar.jsx         # Sticky glassmorphic nav, scroll spy, CV trigger
│   │   ├── ProjectMockup.jsx  # High-fidelity SVG UI previews for all 5 projects
│   │   ├── ProjectModal.jsx   # Expandable in-depth technical project modal
│   │   ├── Projects.jsx       # Category filter tabs, Bento grid, verified links
│   │   ├── ResumeModal.jsx    # In-browser printable resume sheet
│   │   └── TechIcon.jsx       # Technology badge icon mapper
│   ├── data/
│   │   └── portfolioData.js   # Centralized verified data store
│   ├── App.jsx                # Layout orchestration
│   ├── index.css              # Tailwind v4 import & custom styles
│   └── main.jsx               # Entrypoint
├── index.html                 # SEO metadata, web fonts & favicon
├── package.json
├── vite.config.js
└── README.md
```

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploy to Vercel

This repository is pre-configured for one-click deployment on [Vercel](https://vercel.com):
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
