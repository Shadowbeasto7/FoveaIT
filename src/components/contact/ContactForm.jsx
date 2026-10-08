import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Button from '../common/Button';
import { companyData } from '../../data/company';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web Development',
    budgetRange: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [serverMessage, setServerMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.projectType) newErrors.projectType = 'Please select a project category.';
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your project inquiry.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setServerMessage('');

    try {
      const endpoint = companyData.contact.formEndpoint;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus('success');
          setServerMessage('Thank you! Your project inquiry has been sent to Fovea IT engineering team. We will get back to you within 24 hours.');
          setFormData({ name: '', email: '', phone: '', projectType: 'Web Development', budgetRange: '', message: '' });
        } else {
          throw new Error('Form submission failed.');
        }
      } else {
        // Documented fallback when VITE_CONTACT_FORM_ENDPOINT is not yet set
        setTimeout(() => {
          setStatus('success');
          setServerMessage('Thank you! Your project inquiry details have been registered. (Integration Point: Configure VITE_CONTACT_FORM_ENDPOINT for live backend delivery).');
          setFormData({ name: '', email: '', phone: '', projectType: 'Web Development', budgetRange: '', message: '' });
        }, 1000);
      }
    } catch (err) {
      setStatus('error');
      setServerMessage('Unable to send inquiry automatically. Please contact us directly at contact@foveait.com');
    }
  };

  return (
    <div className="glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-indigo-500/30 relative">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 block mb-1">
          PROJECT INQUIRY FORM
        </span>
        <h3 className="text-2xl font-extrabold text-white">Send Us Your Requirements</h3>
        <p className="text-sm text-slate-400 mt-1">
          Fill out the form below to receive a technical scoping response and cost estimation.
        </p>
      </div>

      {status === 'success' && (
        <div className="mb-8 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Inquiry Received</p>
            <p className="text-xs mt-1 text-emerald-200">{serverMessage}</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-8 p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Submission Error</p>
            <p className="text-xs mt-1 text-rose-200">{serverMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Suman Sharma"
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.name ? 'border-rose-500' : 'border-indigo-500/30 focus:border-indigo-400'} text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-colors`}
            />
            {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. name@company.com"
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.email ? 'border-rose-500' : 'border-indigo-500/30 focus:border-indigo-400'} text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-colors`}
            />
            {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
          </div>
        </div>

        {/* Phone & Project Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+977 98XXXXXXXX"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-indigo-500/30 focus:border-indigo-400 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2">
              Project Category *
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#0c0d16] border border-indigo-500/30 focus:border-indigo-400 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-colors cursor-pointer"
            >
              <option value="Software Development">Software Development / Enterprise</option>
              <option value="Web Development">Full-Stack Web Development</option>
              <option value="Mobile Development">Mobile App Development</option>
              <option value="Digital Marketing">Digital Marketing & SEO</option>
              <option value="Cloud Solutions">Cloud Infrastructure & DevOps</option>
              <option value="UI/UX Design">UI/UX Product Design</option>
            </select>
          </div>
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budgetRange" className="block text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2">
            Estimated Budget / Range
          </label>
          <input
            type="text"
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            placeholder="e.g. 50,000 NPR, 2,500 USD, or Flexible"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-indigo-500/30 focus:border-indigo-400 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-colors"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2">
            Project Overview & Goals *
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project objectives, key features required, target audience, and preferred timelines..."
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.message ? 'border-rose-500' : 'border-indigo-500/30 focus:border-indigo-400'} text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 transition-colors`}
          ></textarea>
          {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full font-bold uppercase tracking-wider"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span>Submit Project Inquiry</span>
              <Send className="w-4 h-4" />
            </span>
          )}
        </Button>

      </form>
    </div>
  );
}

export default ContactForm;
