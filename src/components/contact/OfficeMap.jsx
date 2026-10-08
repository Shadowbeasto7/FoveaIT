import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { companyData } from '../../data/company';
import Button from '../common/Button';

export function OfficeMap() {
  return (
    <div className="glass-panel rounded-[2.5rem] p-8 border border-indigo-500/25 relative overflow-hidden text-left">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 block mb-1">
            LOCATION & REGION
          </span>
          <h3 className="text-xl font-extrabold text-white">Kathmandu Headquarters</h3>
        </div>
        <div className="w-10 h-10 rounded-full bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shadow-md">
          <MapPin className="w-5 h-5" />
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-indigo-500/30 my-6 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3881976099524!2d85.33475097526554!3d27.705298076183716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190021baf561%3A0xf2d3a595740a18a1!2sFovea%20IT!5e0!3m2!1sen!2snp!4v1790922061515!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Fovea IT Office Location"
          className="w-full h-full rounded-2xl"
        />
      </div>

      <Button
        href={companyData.location.mapUrl}
        variant="outline"
        size="sm"
        icon={Navigation}
        className="w-full text-xs font-semibold uppercase"
      >
        Open Directions in Google Maps
      </Button>
    </div>
  );
}

export default OfficeMap;
