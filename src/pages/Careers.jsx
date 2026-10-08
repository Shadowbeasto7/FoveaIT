import React, { useState, useRef } from 'react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { pagesSeoData } from '../seo/seoData';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/home/CTASection';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Rocket, 
  Users, 
  CheckCircle2, 
  Send, 
  UploadCloud, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Layers, 
  Smartphone, 
  Search, 
  X,
  FileText,
  Clock,
  Heart
} from 'lucide-react';

export function Careers() {
  const seoInfo = pagesSeoData.careers || pagesSeoData.news;
  const formRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Internship (Frontend / Backend / Mobile)',
    experience: 'Fresher / Student (No experience required)',
    portfolioUrl: '',
    resumeFileName: '',
    resumeUrl: '',
    coverLetter: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Available open positions
  const openRoles = [
    {
      title: "Software Engineering Intern (Fresher)",
      type: "Internship / Full-time track",
      department: "Engineering",
      location: "Kathmandu, Nepal (Hybrid / On-site)",
      description: "Ideal for fresh computer science / IT graduates or final-year students looking to gain hands-on experience in React, Python, Django, and modern web development.",
      icon: GraduationCap,
      accent: "from-blue-500 to-indigo-600"
    },
    {
      title: "Mobile App Developer Intern (Flutter)",
      type: "Internship / Full-time track",
      department: "Mobile Engineering",
      location: "Kathmandu, Nepal",
      description: "Learn and build cross-platform mobile apps using Flutter and Dart. Work closely with senior mobile developers on production client applications.",
      icon: Smartphone,
      accent: "from-purple-500 to-pink-600"
    },
    {
      title: "Junior Backend Engineer (Django / Python)",
      type: "Full-Time",
      department: "Backend Engineering",
      location: "Kathmandu, Nepal",
      description: "Build robust REST APIs, design database schemas, and deploy server architectures using Django, PostgreSQL, and AWS/Linux environments.",
      icon: Code,
      accent: "from-emerald-500 to-teal-600"
    },
    {
      title: "Digital Marketing & SEO Specialist",
      type: "Full-Time / Internship",
      department: "Growth & Marketing",
      location: "Kathmandu, Nepal",
      description: "Execute high-ROI search engine optimization (SEO) strategies, content marketing, Google Ads campaigns, and social media brand building for top clients.",
      icon: Search,
      accent: "from-amber-500 to-orange-600"
    }
  ];

  const benefits = [
    {
      title: "Dedicated Mentorship",
      desc: "Every intern and fresher is paired with a senior software engineer for code reviews, technical guidance, and career planning.",
      icon: Users
    },
    {
      title: "Live Production Projects",
      desc: "Work directly on client applications deployed in the real world rather than synthetic demo assignments.",
      icon: Rocket
    },
    {
      title: "Modern Tech Stack",
      desc: "Master industry-standard technologies: React, Flutter, Python, Django, Tailwind CSS, PostgreSQL, and Git workflows.",
      icon: Code
    },
    {
      title: "Learning Stipend & Growth",
      desc: "Competitive internship stipend, access to online courses, weekly tech sharing sessions, and clear paths to full-time roles.",
      icon: Sparkles
    }
  ];

  const handleSelectRole = (roleTitle) => {
    setFormData(prev => ({ ...prev, position: roleTitle }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        resumeFileName: file.name
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError('Please fill in all required fields (Name, Email, and Phone Number).');
      return;
    }

    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <PageLayout>
      <SEO
        title={seoInfo.title}
        description={seoInfo.description}
        canonical={seoInfo.canonical}
        keywords={seoInfo.keywords}
        ogImage={seoInfo.ogImage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { name: 'Careers & Join Us' }
          ]} 
        />

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0D1527] via-[#111A33] to-[#1A103D] border border-indigo-500/30 p-8 sm:p-14 my-6 shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Join Fovea IT Team · Careers</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Build Your Tech Career at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Fovea IT</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Are you an ambitious fresher, student, or experienced developer looking to make an impact? We provide a supportive, high-growth environment where anybody can learn, build real-world software, and launch a successful tech career.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#application-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs font-bold shadow-lg shadow-indigo-500/25 hover:opacity-95 transition-all"
              >
                <span>Fill Application Form</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/news"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 text-xs font-semibold transition-all"
              >
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Read News &amp; Culture Blogs</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Highlight Blog Post Link */}
        <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-[#101935]/80 to-purple-950/60 border border-indigo-500/30 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0 mt-1">
              <Heart className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">Featured Article in News &amp; Updates</span>
              <h3 className="text-base font-bold text-white">Why Fovea IT is the Best Environment for Interns &amp; Freshers to Learn and Grow</h3>
              <p className="text-xs text-slate-300 font-light">Read how our mentorship model and live production projects help fresh graduates thrive.</p>
            </div>
          </div>

          <Link
            to="/news"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-indigo-600/30 border border-indigo-500/50 hover:bg-indigo-600/50 text-white text-xs font-semibold transition-all flex items-center gap-2"
          >
            <span>Read Full Post</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Why Join Us Grid */}
        <div className="my-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Why Fovea IT?</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">The Ideal Launchpad for Freshers &amp; Engineers</h2>
            <p className="text-xs sm:text-sm text-slate-300">We invest heavily in people. Here is what you can expect when you join our team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-[#0F172A]/80 border border-slate-800 p-6 hover:border-indigo-500/40 transition-all duration-300 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{b.title}</h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="my-16 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Current Openings</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Available Roles &amp; Internships</h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">Don't see an exact match? Fill out our open application form below and we will consider you for upcoming roles!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role, idx) => {
              const RoleIcon = role.icon;
              return (
                <div 
                  key={idx}
                  className="group rounded-2xl bg-[#0F172A]/90 border border-slate-800 p-6 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-semibold">
                        {role.department}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        {role.type}
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pt-1">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${role.accent} flex items-center justify-center text-white shrink-0 shadow-md`}>
                        <RoleIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{role.title}</h3>
                        <p className="text-xs text-slate-400">{role.location}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleSelectRole(role.title)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-indigo-500 group-hover:bg-indigo-600/20 text-slate-200 group-hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <span>Apply For This Position</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Application Form Section */}
        <div id="application-form" ref={formRef} className="my-16 scroll-mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-[#0F172A] border border-indigo-500/30 p-6 sm:p-12 shadow-2xl">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                  <Send className="w-3.5 h-3.5" />
                  <span>Join Our Team</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Submit Your Information</h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                  Fill out the form below. Whether you want to apply for an internship, fresher software role, or experienced position, our HR team will review your application and reach out!
                </p>
              </div>

              {formError && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium flex items-center gap-2">
                  <X className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aarav@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Phone / WhatsApp Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+977 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Target Position */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-[#CBD5E1] block">
                      Position Interested In <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Internship (Frontend / Backend / Mobile)">Internship (Frontend / Backend / Mobile)</option>
                      <option value="Software Engineering Intern (Fresher)">Software Engineering Intern (Fresher)</option>
                      <option value="Mobile App Developer Intern (Flutter)">Mobile App Developer Intern (Flutter)</option>
                      <option value="Junior Backend Engineer (Django / Python)">Junior Backend Engineer (Django / Python)</option>
                      <option value="Digital Marketing & SEO Specialist">Digital Marketing &amp; SEO Specialist</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="General / Open Application">General / Open Application</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Experience Level */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Experience Level <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Fresher / Student (No experience required)">Fresher / Student (No experience required)</option>
                      <option value="Internship Candidate">Internship Candidate</option>
                      <option value="Junior (1-2 years experience)">Junior (1-2 years experience)</option>
                      <option value="Mid / Senior (3+ years experience)">Mid / Senior (3+ years experience)</option>
                    </select>
                  </div>

                  {/* Portfolio / GitHub URL */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 block">
                      GitHub / Portfolio / LinkedIn URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://github.com/yourusername"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Resume Upload / Link */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Resume / CV (File or Google Drive Link)
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Simulated File Upload Input */}
                    <div className="relative border-2 border-dashed border-slate-800 hover:border-indigo-500/50 rounded-xl p-4 text-center cursor-pointer transition-colors bg-slate-900/50">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center justify-center space-y-1">
                        <UploadCloud className="w-6 h-6 text-indigo-400" />
                        <span className="text-xs font-medium text-slate-300">
                          {formData.resumeFileName ? formData.resumeFileName : "Click or drag resume file (PDF/DOC)"}
                        </span>
                        <span className="text-[10px] text-slate-500">Max size 5MB</span>
                      </div>
                    </div>

                    {/* Or URL link */}
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] text-slate-400 mb-1">Or paste direct link to Resume/Drive:</span>
                      <input
                        type="url"
                        placeholder="https://drive.google.com/file/d/..."
                        value={formData.resumeUrl}
                        onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Cover Letter / Message */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Tell Us About Yourself &amp; Career Aspirations
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share a brief intro, technologies you enjoy, projects you've built, or why you'd like to join Fovea IT..."
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting Your Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Application Now</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {submitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-md bg-[#0B0F19] border border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-extrabold text-white">Application Received!</h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Your application for <strong className="text-indigo-300">{formData.position}</strong> has been logged successfully. Our HR team will review your details and contact you via email ({formData.email}) or phone within 24 to 48 hours.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      position: 'Internship (Frontend / Backend / Mobile)',
                      experience: 'Fresher / Student (No experience required)',
                      portfolioUrl: '',
                      resumeFileName: '',
                      resumeUrl: '',
                      coverLetter: ''
                    });
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          </div>
        )}

        <CTASection />
      </div>
    </PageLayout>
  );
}

export default Careers;
