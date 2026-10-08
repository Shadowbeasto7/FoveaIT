import React, { useState, useEffect } from 'react';
import { Shield, Cookie, X, Check, Settings } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('foveait_cookie_consent');
    if (!savedConsent) {
      // Delay display slightly for smooth page entry
      const timer = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(timer);
    } else {
      try {
        setPreferences(JSON.parse(savedConsent));
      } catch (_e) {
        // ignore parse error
      }
    }
  }, []);

  // Expose function to reopen modal globally (e.g. from footer link)
  useEffect(() => {
    const handleReopen = () => {
      setShowModal(true);
      setShowBanner(false);
    };
    window.addEventListener('open_cookie_preferences', handleReopen);
    return () => window.removeEventListener('open_cookie_preferences', handleReopen);
  }, []);

  const saveConsent = (customPreferences) => {
    localStorage.setItem('foveait_cookie_consent', JSON.stringify(customPreferences));
    setPreferences(customPreferences);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const handleRejectOptional = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  if (!showBanner && !showModal) return null;

  return (
    <>
      {/* ── Cookie Banner at Bottom ── */}
      {showBanner && !showModal && (
        <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-fadeIn">
          <div className="bg-[#0f172a]/95 border border-indigo-500/30 rounded-2xl p-5 shadow-2xl backdrop-blur-xl text-white">
            <div className="flex items-start gap-3.5 mb-3">
              <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">Cookie Preferences</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  We use cookies to optimize site performance and deliver an enhanced browsing experience. Learn more in our{' '}
                  <a href="/cookies-policy" className="text-indigo-400 underline hover:text-indigo-300">
                    Cookie Policy
                  </a>.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 py-2 px-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleRejectOptional}
                className="flex-1 py-2 px-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700"
              >
                Reject Optional
              </button>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-indigo-400 hover:text-white transition-colors border border-slate-700"
                title="Manage Preferences"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Cookie Preferences Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#0f172a] border border-indigo-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-white relative">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Manage Cookie Settings</h2>
                <p className="text-xs text-slate-400">Customize your privacy and data collection choices</p>
              </div>
            </div>

            <div className="space-y-4 my-6">
              {/* Essential */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Strictly Necessary Cookies</span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      Required
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Essential for website security, page navigation, and basic core functions. Cannot be disabled.
                  </p>
                </div>
                <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">Analytics & Performance Cookies</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Help us understand site usage and improve speed and user experience anonymously.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-5 h-5 accent-indigo-600 rounded cursor-pointer shrink-0"
                />
              </div>

              {/* Marketing */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">Marketing & Campaign Cookies</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Used to deliver relevant announcements and measure marketing campaign performance.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="w-5 h-5 accent-indigo-600 rounded cursor-pointer shrink-0"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => saveConsent(preferences)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-500/25"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieConsent;
