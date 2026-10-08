import React from 'react';
import { MapPin, Mail, Phone, Clock, Globe } from 'lucide-react';
import { companyData } from '../../data/company';

export function ContactDetails() {
  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-[2.5rem] p-8 border border-indigo-500/25">
        <h3 className="text-xl font-extrabold text-white mb-6 border-b border-indigo-500/20 pb-4">
          Direct Contact Channels
        </h3>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0 shadow-md">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-bold">Office Address</h4>
              <p className="text-sm font-semibold text-white mt-1">
                {companyData.location.addressPlaceholder}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {companyData.location.city}, {companyData.location.country}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0 shadow-md">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-bold">Email Communication</h4>
              <a href={`mailto:${companyData.contact.email}`} className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors mt-1 block">
                {companyData.contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0 shadow-md">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-bold">Telephone Inquiry</h4>
              <p className="text-sm font-semibold text-white mt-1">
                {companyData.contact.phone}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0 shadow-md">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-bold">Operating Hours</h4>
              <p className="text-sm text-slate-300 mt-1 font-light">
                {companyData.contact.operatingHours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
