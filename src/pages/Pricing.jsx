import React, { useState } from 'react';
import { FiCheck, FiCpu, FiMapPin, FiGlobe, FiArrowRight, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Pricing = () => {
  // Calculator state
  const [calcMarket, setCalcMarket] = useState('bd'); // 'bd' or 'global'
  const [calculator, setCalculator] = useState({
    pages: 1,
    uiux: false,
    database: false,
    ecommerce: false,
    seo: false,
  });

  const bdBase = 25000;
  const bdPerPage = 8000;
  const bdUiux = 16000;
  const bdDb = 50000;
  const bdEcom = 45000;
  const bdSeo = 12000;

  const globalBase = 350;
  const globalPerPage = 120;
  const globalUiux = 250;
  const globalDb = 700;
  const globalEcom = 650;
  const globalSeo = 180;

  const calculateEstimate = () => {
    if (calcMarket === 'bd') {
      let total = bdBase + (calculator.pages - 1) * bdPerPage;
      if (calculator.uiux) total += bdUiux;
      if (calculator.database) total += bdDb;
      if (calculator.ecommerce) total += bdEcom;
      if (calculator.seo) total += bdSeo;
      return `BDT ${total.toLocaleString()}`;
    } else {
      let total = globalBase + (calculator.pages - 1) * globalPerPage;
      if (calculator.uiux) total += globalUiux;
      if (calculator.database) total += globalDb;
      if (calculator.ecommerce) total += globalEcom;
      if (calculator.seo) total += globalSeo;
      return `$${total.toLocaleString()}`;
    }
  };

  const packages = [
    {
      badge: 'New Business',
      badgeColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      timeline: '5-7 Days',
      name: 'Launch Pack',
      localPrice: 'BDT 25,000 - 40,000',
      intlPrice: '$350 - $650',
      description: 'A focused package for startups, personal brands, campaigns, and service launches that need a premium first impression.',
      tags: ['UI/UX Design', 'Responsive Web Design', 'Landing Page Development'],
      features: [
        '1 high-converting landing page',
        'Mobile-first responsive layout',
        'Lead form or WhatsApp CTA',
        'Basic SEO structure',
        '7 days minor update support'
      ],
      cta: 'Start Launch Pack',
      popular: false,
      highlighted: false,
    },
    {
      badge: 'Most Requested',
      badgeColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      timeline: '10-15 Days',
      name: 'Business Website Pack',
      localPrice: 'BDT 65,000 - 110,000',
      intlPrice: '$900 - $1,800',
      description: 'A complete company website for agencies, shops, clinics, education brands, and professional service businesses.',
      tags: ['UI/UX Design', 'Responsive Web Design', 'Frontend Development', 'Full Website Development'],
      features: [
        'Up to 5 custom pages',
        'Figma-style UI direction',
        'Reusable frontend sections',
        'Contact and service pages',
        '1 month maintenance support'
      ],
      cta: 'Choose Business Pack',
      popular: true,
      highlighted: true,
    },
    {
      badge: 'Existing Website',
      badgeColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      timeline: '7-14 Days',
      name: 'Growth & Care Pack',
      localPrice: 'BDT 40,000 - 85,000',
      intlPrice: '$650 - $1,500',
      description: 'A practical package for brands that already have a site and need a redesign, performance fixes, content updates, or ongoing care.',
      tags: ['Website Redesign', 'Website Maintenance & Support', 'Website Update Service', 'Responsive Web Design'],
      features: [
        'Visual redesign or section rebuilds',
        'Speed and layout improvements',
        'Content and image updates',
        'Bug fixes and compatibility checks',
        'Maintenance plan available'
      ],
      cta: 'Upgrade Website',
      popular: false,
      highlighted: false,
    },
    {
      badge: 'Advanced Build',
      badgeColor: 'bg-neon-green/10 text-neon-green border-neon-green/20',
      timeline: '4-8 Weeks',
      name: 'Custom Web App Pack',
      localPrice: 'BDT 160,000 - 450,000+',
      intlPrice: '$2,500 - $8,000+',
      description: 'A custom software package for dashboards, portals, booking systems, SaaS tools, admin panels, and database-driven workflows.',
      tags: ['UI/UX Design', 'Frontend Development', 'Web Application Development', 'Full Website Development', 'Website Maintenance & Support'],
      features: [
        'Custom app architecture',
        'Dashboard or portal interface',
        'Database and API planning',
        'Login, admin, or payment flow',
        '2 months technical support'
      ],
      cta: 'Plan Web App',
      popular: false,
      highlighted: true,
    }
  ];

  return (
    <div className="w-full min-h-screen text-white bg-dark-bg font-sans pt-28 pb-16">
      
      {/* 1. Hero Header */}
      <section className="relative py-16 overflow-hidden circuit-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
            Pricing Plans
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mt-6 mb-6">
            Service Packages That Make Sense
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed font-sans">
            Four professional packages built from our 9 core services, with separate local BD and international price ranges.
          </p>
        </div>
      </section>

      {/* 2. Local & International Pricing Cards */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5">
            <FiMapPin className="w-8 h-8 text-neon-green mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Local Pricing: Bangladesh</h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              BDT-based packages for Bangladeshi startups, local brands, service businesses, and organizations that need reliable digital presence with practical budgets.
            </p>
          </div>
          <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5">
            <FiGlobe className="w-8 h-8 text-neon-green mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">International Pricing</h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              USD-based packages for global clients who need premium UI/UX, frontend development, web apps, async collaboration, and structured delivery.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Client Packages */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-16">
            <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
              Client Packages
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mt-4 mb-4">
              Choose the Right Scope
            </h2>
            <p className="text-white/50 text-sm max-w-2xl leading-relaxed font-sans mb-6">
              These packages group your services around real client needs: launch, business growth, redesign/support, and custom web applications.
            </p>
            <div className="flex items-start gap-3 glassmorphism-card rounded-xl p-4 max-w-xl border-white/5">
              <FiHeart className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
              <p className="text-xs text-white/60 leading-relaxed font-sans">
                Prices are practical starting ranges. Final quotes depend on scope, content, integrations, and deadline.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`glassmorphism-card rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden ${
                  pkg.popular ? 'border-neon-green/30 glow-green' : 'border-white/5'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-neon-green text-dark-bg text-[9px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-xl">
                    Popular
                  </div>
                )}

                <div className="text-left">
                  {/* Badge & Timeline */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${pkg.badgeColor}`}>
                      {pkg.badge}
                    </span>
                    <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
                      {pkg.timeline}
                    </span>
                  </div>

                  {/* Package Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{pkg.name}</h3>

                  {/* Dual Pricing */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/[0.03] border border-white/5 rounded-lg p-3">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-white/40 font-mono block mb-1">Local BD</span>
                      <span className="text-sm md:text-base font-bold text-white">{pkg.localPrice}</span>
                    </div>
                    <div className="bg-white/[0.03] border border-white/5 rounded-lg p-3">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-white/40 font-mono block mb-1">International</span>
                      <span className="text-sm md:text-base font-bold text-white">{pkg.intlPrice}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-white/50 leading-relaxed font-sans mb-6">
                    {pkg.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono text-white/50 border border-white/10 rounded-md px-2.5 py-1 bg-white/[0.02]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <hr className="border-white/5 mb-6" />

                  {/* Features */}
                  <ul className="flex flex-col gap-3.5 text-xs font-sans text-white/70 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <FiCheck className="text-neon-green w-4 h-4 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`w-full py-3.5 text-center rounded-lg text-xs font-bold uppercase tracking-wider transition-all border flex items-center justify-center gap-2 ${
                    pkg.highlighted
                      ? 'bg-neon-green text-dark-bg border-neon-green hover:bg-emerald-500 hover:border-emerald-500 shadow-md'
                      : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                  }`}
                >
                  {pkg.cta}
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Dynamic Cost Calculator */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="glassmorphism rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-neon-green/3 rounded-full filter blur-3xl pointer-events-none" />
          
          {/* Header with Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
            <div className="flex items-center gap-3">
              <FiCpu className="text-neon-green w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Dynamic Cost Calculator</h2>
            </div>
            <div className="flex bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setCalcMarket('bd')}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${
                  calcMarket === 'bd'
                    ? 'bg-neon-green text-dark-bg'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                BD Local
              </button>
              <button
                onClick={() => setCalcMarket('global')}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${
                  calcMarket === 'global'
                    ? 'bg-neon-green text-dark-bg'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                Global
              </button>
            </div>
          </div>
          <p className="text-xs text-white/50 leading-relaxed mb-10 max-w-xl font-sans">
            Select a market, adjust page count, and add modules to estimate a custom project scope.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Controls */}
            <div className="flex flex-col gap-6">
              
              {/* Slider for Pages */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/70">Number of Pages</span>
                  <span className="text-sm font-bold text-neon-green bg-neon-green/10 border border-neon-green/20 px-2.5 py-0.5 rounded-full font-mono">{calculator.pages}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={calculator.pages}
                  onChange={(e) => setCalculator({ ...calculator, pages: parseInt(e.target.value) })}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon-green"
                />
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-2">Include Modules</p>
                
                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={calculator.uiux}
                    onChange={(e) => setCalculator({ ...calculator, uiux: e.target.checked })}
                    className="w-4 h-4 rounded bg-white/5 border border-white/10 text-neon-green focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <div className="text-left font-sans">
                    <p className="text-xs font-bold text-white group-hover:text-neon-green transition-colors">Figma UI/UX Mockup</p>
                    <p className="text-[10px] text-white/40">{calcMarket === 'bd' ? 'BDT 16,000 add-on' : '$250 add-on'}</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={calculator.database}
                    onChange={(e) => setCalculator({ ...calculator, database: e.target.checked })}
                    className="w-4 h-4 rounded bg-white/5 border border-white/10 text-neon-green focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <div className="text-left font-sans">
                    <p className="text-xs font-bold text-white group-hover:text-neon-green transition-colors">Database & API Backend</p>
                    <p className="text-[10px] text-white/40">{calcMarket === 'bd' ? 'BDT 50,000 add-on' : '$700 add-on'}</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={calculator.ecommerce}
                    onChange={(e) => setCalculator({ ...calculator, ecommerce: e.target.checked })}
                    className="w-4 h-4 rounded bg-white/5 border border-white/10 text-neon-green focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <div className="text-left font-sans">
                    <p className="text-xs font-bold text-white group-hover:text-neon-green transition-colors">E-Commerce Payments</p>
                    <p className="text-[10px] text-white/40">{calcMarket === 'bd' ? 'BDT 45,000 add-on' : '$650 add-on'}</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={calculator.seo}
                    onChange={(e) => setCalculator({ ...calculator, seo: e.target.checked })}
                    className="w-4 h-4 rounded bg-white/5 border border-white/10 text-neon-green focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  />
                  <div className="text-left font-sans">
                    <p className="text-xs font-bold text-white group-hover:text-neon-green transition-colors">Advanced SEO Campaign</p>
                    <p className="text-[10px] text-white/40">{calcMarket === 'bd' ? 'BDT 12,000 add-on' : '$180 add-on'}</p>
                  </div>
                </label>

              </div>
            </div>

            {/* Display Estimate Quote */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 flex flex-col justify-between items-center text-center">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 font-mono">
                  {calcMarket === 'bd' ? 'Bangladesh Estimate' : 'Global Estimate'}
                </span>
                <div className="text-4xl md:text-5xl font-extrabold text-neon-green my-6 font-sans glow-green-sm">
                  {calculateEstimate()}
                </div>
                <p className="text-xs text-white/40 leading-relaxed font-sans px-4">
                  Final pricing depends on content, integrations, revisions, and project timeline.
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-8 bg-primary-green hover:bg-neon-green text-dark-bg text-xs font-bold uppercase tracking-wider py-3 px-8 rounded-lg border border-primary-green hover:border-neon-green transition-all duration-300 shadow-md hover:shadow-green-500/20"
              >
                Book Consultation
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;

