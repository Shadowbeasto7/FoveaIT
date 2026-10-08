import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQAccordion({ items = [], title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="py-8 max-w-4xl mx-auto">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-8">
          {title}
        </h2>
      )}

      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const buttonId = `faq-btn-${index}`;
          const panelId = `faq-panel-${index}`;

          return (
            <div 
              key={index}
              className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen ? 'border-indigo-500/40 bg-indigo-950/20 shadow-lg shadow-indigo-950/30' : 'border-indigo-500/15 hover:border-indigo-500/30'
              }`}
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-2xl cursor-pointer"
              >
                <span className="text-base font-semibold text-white pr-2">
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-200 border-indigo-400/50' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div 
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed font-light border-t border-indigo-500/10 animate-fadeIn"
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQAccordion;
