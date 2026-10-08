import React, { useState, useRef, useEffect } from 'react';
import { X, Send, User } from 'lucide-react';
import { servicesData } from '../../data/services';
import { projectsData } from '../../data/projects';
import { companyData } from '../../data/company';
import { faqCategories } from '../../data/faq';
import { leadershipData } from '../../data/team';

// ── Build knowledge base from real website data ──────────────────────────────

const allFaqs = faqCategories.flatMap(c => c.questions);

const servicesSummary = servicesData
  .map(s => `• ${s.title} (${s.shortTitle}): ${s.shortDescription} Stack: ${s.technologies.join(', ')}.`)
  .join('\n');

const projectsSummary = projectsData
  .map(p => `• ${p.title} (${p.category}): ${p.shortDescription}${p.liveUrl ? ' Live: ' + p.liveUrl : ' — Coming soon.'}`)
  .join('\n');

const teamSummary = leadershipData
  .map(m => `• ${m.name} — ${m.role}: ${m.bio}`)
  .join('\n');

// ── Intent matching helpers ───────────────────────────────────────────────────

function matchFaq(query) {
  const lower = query.toLowerCase();
  return allFaqs.find(faq =>
    faq.question.toLowerCase().split(' ').filter(w => w.length > 3).some(w => lower.includes(w))
  );
}

function matchService(query) {
  const lower = query.toLowerCase();
  return servicesData.find(s =>
    lower.includes(s.shortTitle.toLowerCase()) ||
    lower.includes(s.slug.replace(/-/g, ' ')) ||
    s.technologies.some(t => lower.includes(t.toLowerCase()))
  );
}

function matchProject(query) {
  const lower = query.toLowerCase();
  return projectsData.find(p =>
    lower.includes(p.title.toLowerCase()) ||
    lower.includes(p.slug.replace(/-/g, ' ')) ||
    lower.includes(p.category.toLowerCase())
  );
}

// ── Core answer engine (uses real data, no external API needed) ──────────────

function getAnswer(query) {
  const q = query.toLowerCase().trim();

  // ── Greeting ──
  if (/^(hi|hello|hey|namaste|yo|sup|howdy|good morning|good afternoon|good evening)[\s!?.]*$/.test(q)) {
    return `Namaste! 👋 I'm the Fovea IT Assistant.\n\nI can help you learn about:\n• Our 6 software services\n• Projects we've built\n• Technologies we use\n• Pricing & timelines\n• Our team & contact info\n\nWhat would you like to know?`;
  }

  // ── All services overview ──
  if (/\b(service|offer|what (do|can) you (do|build|make)|capability|work)\b/.test(q)) {
    return `Fovea IT offers 6 core engineering services:\n\n${servicesSummary}\n\nVisit /services for full details or ask me about any specific service!`;
  }

  // ── Projects / portfolio ──
  if (/\b(project|portfolio|work|case study|built|example|past work|previous)\b/.test(q)) {
    const match = matchProject(q);
    if (match) {
      return `Here's what we built for **${match.title}** (${match.category}):\n\n${match.fullDescription}\n\nKey features:\n${match.keyFeatures.map(f => '• ' + f).join('\n')}\n\nStack: ${match.technologies.join(', ')}${match.liveUrl ? `\n\n🔗 Live site: ${match.liveUrl}` : '\n\n⏳ Currently under development.'}`;
    }
    return `Here are our featured projects:\n\n${projectsSummary}\n\nVisit /services#projects for the full portfolio!`;
  }

  // ── Specific service detail match ──
  const serviceMatch = matchService(q);
  if (serviceMatch) {
    return `**${serviceMatch.title}**\n\n${serviceMatch.overview}\n\nCapabilities:\n${serviceMatch.capabilities.map(c => '• ' + c).join('\n')}\n\nTech stack: ${serviceMatch.technologies.join(', ')}\n\n"${serviceMatch.tagline}"\n\nWant to learn more? Visit /services/${serviceMatch.slug}`;
  }

  // ── Mobile app / Flutter ──
  if (/\b(mobile|flutter|ios|android|app|smartphone)\b/.test(q)) {
    const s = servicesData.find(x => x.slug === 'mobile-development');
    return `${s.overview}\n\nWe cover:\n${s.capabilities.map(c => '• ' + c).join('\n')}\n\nStack: ${s.technologies.join(', ')}\n\n${s.faqs[0]?.question ? `\n❓ "${s.faqs[0].question}"\n${s.faqs[0].answer}` : ''}`;
  }

  // ── Web development ──
  if (/\b(web|website|react|vite|django|frontend|backend|portal|ecommerce|e-commerce)\b/.test(q)) {
    const s = servicesData.find(x => x.slug === 'web-development');
    return `${s.overview}\n\nCapabilities:\n${s.capabilities.map(c => '• ' + c).join('\n')}\n\nStack: ${s.technologies.join(', ')}`;
  }

  // ── Cloud / DevOps ──
  if (/\b(cloud|aws|docker|devops|deploy|server|hosting|kubernetes|ci.cd)\b/.test(q)) {
    const s = servicesData.find(x => x.slug === 'cloud-solutions');
    return `${s.overview}\n\nCapabilities:\n${s.capabilities.map(c => '• ' + c).join('\n')}\n\nStack: ${s.technologies.join(', ')}`;
  }

  // ── Digital marketing / SEO ──
  if (/\b(seo|marketing|social media|ads|google|meta|content|campaign|instagram|facebook)\b/.test(q)) {
    const s = servicesData.find(x => x.slug === 'digital-marketing');
    return `${s.overview}\n\nCapabilities:\n${s.capabilities.map(c => '• ' + c).join('\n')}\n\nTools: ${s.technologies.join(', ')}`;
  }

  // ── UI/UX Design ──
  if (/\b(design|ui|ux|figma|wireframe|prototype|interface|accessibility)\b/.test(q)) {
    const s = servicesData.find(x => x.slug === 'ui-ux-design');
    return `${s.overview}\n\nCapabilities:\n${s.capabilities.map(c => '• ' + c).join('\n')}\n\nTools: ${s.technologies.join(', ')}`;
  }

  // ── Software / ERP / CRM / custom ──
  if (/\b(software|erp|crm|enterprise|custom|automation|api|database|python)\b/.test(q)) {
    const s = servicesData.find(x => x.slug === 'software-development');
    return `${s.overview}\n\nCapabilities:\n${s.capabilities.map(c => '• ' + c).join('\n')}\n\nStack: ${s.technologies.join(', ')}`;
  }

  // ── FAQ match ──
  const faqMatch = matchFaq(q);
  if (faqMatch) {
    return `**${faqMatch.question}**\n\n${faqMatch.answer}`;
  }

  // ── Cost / pricing / quote ──
  if (/\b(cost|price|pricing|quote|budget|rate|charge|how much|fee)\b/.test(q)) {
    return `Project costs at Fovea IT depend on scope, complexity, and the technologies involved.\n\n• Small web apps & landing pages — quick 2–3 week turnarounds\n• Mobile apps & full web platforms — scoped individually\n• Enterprise software & cloud setups — quoted after a discovery call\n\nWe offer three engagement models:\n• Fixed Budget — clear deliverables, set price\n• Dedicated Hours — flexible ongoing developer time\n• Sprint-Based — iterative feature delivery\n\n👉 Contact us for a free scoping call: ${companyData.contact.email} or ${companyData.contact.phone}`;
  }

  // ── Timeline / how long ──
  if (/\b(timeline|how long|duration|time|weeks|months|deadline|delivery)\b/.test(q)) {
    return `Timelines at Fovea IT vary by project:\n\n• Simple websites: 2–4 weeks\n• Web applications: 6–12 weeks\n• Mobile apps: 8–16 weeks\n• Enterprise software: scoped per requirements\n\nSEO & digital marketing: meaningful results in 2–4 months.\n\nWe provide a clear project roadmap before we start so you always know exactly where things stand.`;
  }

  // ── Tech stack / technologies ──
  if (/\b(tech|technology|stack|language|framework|tools|build with|use)\b/.test(q)) {
    return `Fovea IT's core technology stack:\n\n**Frontend:** React, TypeScript, Vite, Next.js, Tailwind CSS\n**Backend:** Python, Django, Node.js, Express\n**Mobile:** Flutter, Dart, Firebase\n**Database:** PostgreSQL, MongoDB, Redis, SQLite\n**Cloud:** AWS, Docker, Kubernetes, Terraform, GitHub Actions\n**Design:** Figma, design systems, WCAG accessibility standards\n**Marketing:** Google Analytics, Meta Ads, Semrush, Google Search Console`;
  }

  // ── Team / people / founder / CEO / CTO ──
  if (/\b(team|founder|ceo|cto|who|people|staff|member|leadership|build)\b/.test(q)) {
    return `Meet the Fovea IT leadership team:\n\n${teamSummary}\n\nWe also have engineers, designers, cloud specialists, and marketing experts.\n\n📍 Based in ${companyData.location.city}, ${companyData.location.country}.`;
  }

  // ── Location / address / where ──
  if (/\b(where|location|address|city|country|based|nepal|kathmandu|office)\b/.test(q)) {
    return `Fovea IT is based in ${companyData.location.city}, ${companyData.location.region}, ${companyData.location.country}.\n\n📞 Phone: ${companyData.contact.phone}\n📧 Email: ${companyData.contact.email}\n🕐 Hours: ${companyData.contact.operatingHours}\n\nWe work with clients locally in Nepal and internationally worldwide.`;
  }

  // ── Contact / reach out ──
  if (/\b(contact|reach|call|email|phone|whatsapp|message|talk|speak)\b/.test(q)) {
    return `You can reach Fovea IT directly:\n\n📞 Phone: ${companyData.contact.phone}\n📧 Email: ${companyData.contact.email}\n🕐 Hours: ${companyData.contact.operatingHours}\n\n🔗 LinkedIn: ${companyData.social.linkedin}\n📸 Instagram: ${companyData.social.instagram}\n\nOr use the Contact page on our website for a detailed project inquiry form.`;
  }

  // ── About / company / story ──
  if (/\b(about|company|who are you|fovea|story|history|founded|background|startup)\b/.test(q)) {
    return `${companyData.fullDescription}\n\n${companyData.tagline}\n\n${companyData.capabilities.map(c => `✅ ${c.title}: ${c.desc}`).join('\n')}\n\n📍 ${companyData.location.city}, ${companyData.location.country}`;
  }

  // ── Clients / partners / how many ──
  if (/\b(client|partner|customer|how many|50\+|companies)\b/.test(q)) {
    return `In just 6 months, Fovea IT has partnered with over 50 companies across Nepal and internationally. We've completed several flagship projects including:\n\n${projectsSummary}\n\nOur clients range from NGOs and startups to growing enterprises and e-commerce businesses.`;
  }

  // ── Support / maintenance / after launch ──
  if (/\b(support|maintain|maintenance|after launch|bug|update|ongoing)\b/.test(q)) {
    return `Yes! Fovea IT stays with you after launch:\n\n• Ongoing bug fixes and security patches\n• Regular dependency and server updates\n• Performance monitoring and alerts\n• Feature additions as your business grows\n• Dedicated support hours available\n\nContact us at ${companyData.contact.email} to discuss a maintenance plan.`;
  }

  // ── Fallback ──
  return `Thanks for your question! I'm Fovea IT's AI assistant and I have information about our services, projects, team, and more.\n\nTry asking me about:\n• "What mobile apps do you build?"\n• "Tell me about your projects"\n• "How much does a web app cost?"\n• "Who is the founder?"\n• "How do I contact Fovea IT?"\n\nOr visit our website pages directly, or email us at ${companyData.contact.email} for detailed help! 😊`;
}

// ── Component ─────────────────────────────────────────────────────────────────

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'ai',
    text: `Namaste! 👋 I'm the Fovea IT Assistant.\n\nI know everything about our services, projects, team, pricing, and more — all from our actual website data.\n\nHow can I help you today?`,
  }
];

const QUICK_PROMPTS = [
  "What services do you offer?",
  "Tell me about your projects",
  "Do you build Flutter mobile apps?",
  "Who is the founder of Fovea IT?",
  "How do I contact you?",
];

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const msgId = Date.now();
    setMessages(prev => [...prev, { id: msgId, sender: 'user', text: query }]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate a small thinking delay for natural feel
    setTimeout(() => {
      const answer = getAnswer(query);
      setMessages(prev => [...prev, { id: msgId + 1, sender: 'ai', text: answer }]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* ── Floating Trigger Button ── */}
      <div className="fixed bottom-6 right-20 md:right-24 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Fovea IT AI Assistant"
          className="relative px-4 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white font-bold text-xs shadow-2xl shadow-indigo-500/40 hover:opacity-95 transition-all duration-300 flex items-center gap-2.5 border border-indigo-400/40 hover:scale-105 active:scale-95"
        >
          <div className="relative">
            <img src="/logo.png" alt="Fovea IT" className="w-5 h-5 object-contain rounded" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0f172a] animate-pulse" />
          </div>
          <span className="hidden sm:inline">Fovea AI</span>
        </button>
      </div>

      {/* ── Chat Popup ── */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[93vw] sm:w-[400px] flex flex-col bg-[#0a0f1e]/97 border border-indigo-500/30 rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden animate-fadeIn"
          style={{ maxHeight: 'min(560px, 80vh)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#0f1535] via-[#0d1230] to-[#14103a] border-b border-indigo-500/20 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/25 border border-indigo-500/40 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Fovea IT" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  Fovea AI Assistant
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" title="Online" />
                </h3>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2.5 items-end ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 border overflow-hidden ${
                  msg.sender === 'ai'
                    ? 'bg-indigo-600/25 border-indigo-500/30'
                    : 'bg-purple-600/25 border-purple-500/30 text-purple-300'
                }`}>
                  {msg.sender === 'ai' ? <img src="/logo.png" alt="Fovea IT" className="w-5 h-5 object-contain" /> : <User className="w-4 h-4" />}
                </div>

                <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-br-sm shadow-md'
                    : 'bg-slate-900/90 text-slate-200 border border-slate-800/80 rounded-bl-sm shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-end">
                <div className="w-7 h-7 rounded-xl bg-indigo-600/25 border border-indigo-500/30 flex items-center justify-center shrink-0 overflow-hidden">
                  <img src="/logo.png" alt="Fovea IT" className="w-5 h-5 object-contain" />
                </div>
                <div className="px-4 py-3 bg-slate-900/90 border border-slate-800/80 rounded-2xl rounded-bl-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-4 py-2.5 border-t border-slate-800/60 bg-[#080d1a]/60 flex gap-1.5 overflow-x-auto shrink-0 scrollbar-none">
            {QUICK_PROMPTS.map(prompt => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSend(prompt)}
                className="text-[10px] font-semibold px-3 py-1.5 rounded-full bg-indigo-500/10 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/20 transition-all shrink-0 whitespace-nowrap"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={e => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-2 px-4 py-3 border-t border-slate-800/60 bg-[#080d1a]/80 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask anything about Fovea IT..."
              className="flex-1 bg-slate-900/80 border border-slate-700/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/70 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-35 disabled:cursor-not-allowed transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default AIChatWidget;
