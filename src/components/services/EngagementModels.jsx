import React, { useState } from 'react';
import { Coins, Users, Briefcase, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

const models = [
  {
    id: "fixed-price",
    title: "Fixed Price Model",
    icon: Coins,
    badge: "Defined Scope Projects",
    desc: "Great for projects with clear requirements, set timelines, and fixed deliverables.",
    features: [
      "Fixed budget with clear milestone payments",
      "Upfront project scope and timeline agreement",
      "Guaranteed delivery matching project specs",
      "Ideal for MVPs, web portals, and dedicated upgrades"
    ]
  },
  {
    id: "dedicated-team",
    title: "Dedicated Engineering Team",
    icon: Users,
    badge: "Continuous Product Scaling",
    desc: "Perfect for ongoing product development, continuous improvements, and dedicated sprints.",
    features: [
      "Dedicated developers, designers, & QA for your app",
      "Direct daily communication with our technical team",
      "Flexible sprint planning every 1–2 weeks",
      "Scale team capacity up or down as needed"
    ]
  },
  {
    id: "project-based",
    title: "Project-Based Scoped Model",
    icon: Briefcase,
    badge: "Multi-Phase Products",
    desc: "Best for multi-phase software projects with evolving goals over time.",
    features: [
      "Structured phase-by-phase delivery milestones",
      "Flexibility to refine features between project phases",
      "Continuous code review and quality testing",
      "Smooth launch deployment & post-launch support"
    ]
  }
];

export function EngagementModels() {
  const [selectedId, setSelectedId] = useState("fixed-price");

  return (
    <div className="py-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 block mb-1">
          FLEXIBLE COLLABORATION
        </span>
        <h2 className="text-3xl font-extrabold text-white">
          How We Work Together
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          Pick the engagement model that best fits your timeline, budget, and project goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((model) => {
          const Icon = model.icon;
          const isSelected = selectedId === model.id;
          return (
            <div
              key={model.id}
              onClick={() => setSelectedId(model.id)}
              className={`glass-panel rounded-[2rem] p-6 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'border-indigo-400 bg-indigo-950/40 shadow-xl shadow-indigo-950/50 scale-[1.02]'
                  : 'border-indigo-500/20 hover:border-indigo-500/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isSelected ? 'bg-indigo-600 text-white' : 'bg-indigo-950/80 text-indigo-300 border border-indigo-500/30'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 text-indigo-300 border border-white/10">
                    {model.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{model.title}</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed font-light">{model.desc}</p>

                <div className="space-y-2.5 border-t border-indigo-500/15 pt-4">
                  {model.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Button 
                  to="/contact" 
                  variant={isSelected ? 'primary' : 'secondary'} 
                  size="sm" 
                  className="w-full text-xs font-semibold"
                >
                  Discuss {model.title}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EngagementModels;
