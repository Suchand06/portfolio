import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Code2,
  Send,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [statusNotice, setStatusNotice] = useState(null);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Please enter a subject';
    if (!formData.message.trim()) errors.message = 'Please write your message';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Honest, direct functional mailto fallback
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setStatusNotice({
      type: 'info',
      text: 'Opening your mail client. If it doesn\'t launch automatically, click "Copy Message" below to send manually.'
    });

    window.open(mailtoUrl, '_blank');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyDraftMessage = () => {
    const fullText = `From: ${formData.name || 'Anonymous'} <${formData.email || 'Not provided'}>\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\n${formData.message || ''}`;
    navigator.clipboard.writeText(fullText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0c0c10]/40">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>09. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Together.
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            I'm always interested in connecting with developers, exploring new technologies, and working on meaningful software projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy Action */}
            <div className="p-6 rounded-2xl bg-[#141419] border border-white/[0.08] hover:border-violet-500/30 transition-all shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Primary Inbox
                </span>
              </div>

              <div className="text-base sm:text-lg font-bold text-white mb-4 break-all">
                {PERSONAL_INFO.email}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>

                <button
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-white/10 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-2xl bg-[#141419] border border-white/[0.08] space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-800 text-rose-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {PERSONAL_INFO.location}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">
                    B.M.S. College of Engineering Campus / Bengaluru Tech Hub
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links List */}
            <div className="p-6 rounded-2xl bg-[#141419] border border-white/[0.08] space-y-3">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Connect on Platforms
              </div>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-white/[0.04] text-zinc-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <Github className="w-4 h-4 text-zinc-200" />
                  <span>GitHub (@Suchand06)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-white/[0.04] text-zinc-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn (suchand-c-achar)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 border border-white/[0.04] text-zinc-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>LeetCode (uZggT8ZDkd)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#141419] border border-white/[0.08] shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Fill out the details below to dispatch an email inquiry directly to my inbox.
              </p>

              {statusNotice && (
                <div className="mb-6 p-4 rounded-xl bg-violet-950/40 border border-violet-500/30 text-xs text-violet-200 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div className="flex-1 leading-relaxed">{statusNotice.text}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Kumar"
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border ${
                        formErrors.name ? 'border-rose-500' : 'border-white/10 focus:border-violet-500'
                      } text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors`}
                    />
                    {formErrors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border ${
                        formErrors.email ? 'border-rose-500' : 'border-white/10 focus:border-violet-500'
                      } text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Software Engineering Internship / Project Collaboration"
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border ${
                      formErrors.subject ? 'border-rose-500' : 'border-white/10 focus:border-violet-500'
                    } text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors`}
                  />
                  {formErrors.subject && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {formErrors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hi Suchand, I checked out your RepoLens and ResumeIQ projects and would love to chat about..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border ${
                      formErrors.message ? 'border-rose-500' : 'border-white/10 focus:border-violet-500'
                    } text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors resize-none`}
                  />
                  {formErrors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border border-violet-400/30 transition-all shadow-lg shadow-violet-600/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message (Email Client)</span>
                  </button>

                  <button
                    type="button"
                    onClick={copyDraftMessage}
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-white/10 transition-colors"
                  >
                    {copiedMessage ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Message Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Draft to Clipboard</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-zinc-500 pt-2 font-mono">
                  🔒 Zero tracking. Opens standard mail transport or copies directly to your clipboard.
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
