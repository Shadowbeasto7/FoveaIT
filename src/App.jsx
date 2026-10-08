import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import News from './pages/News';
import Careers from './pages/Careers';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import CookiesPolicy from './pages/CookiesPolicy';
import DataSecurity from './pages/DataSecurity';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:serviceId" element={<ServiceDetails />} />
      <Route path="/news" element={<News />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/news/careers" element={<Careers />} />
      <Route path="/projects" element={<Navigate to="/services#projects" replace />} />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
      <Route path="/data-security" element={<DataSecurity />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
