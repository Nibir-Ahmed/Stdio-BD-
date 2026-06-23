import React, { useState } from 'react';
import { FiCheck, FiCpu, FiPlus } from 'react-icons/fi';

const Pricing = () => {
  // Calculator requirements state
  const [calculator, setCalculator] = useState({
    pages: 1,
    uiux: false,
    database: false,
    ecommerce: false,
    seo: false,
  });

  const basePrice = 200;
  const pricePerPage = 80;
  const uiuxCost = 250;
  const dbCost = 450;
  const ecomCost = 600;
  const seoCost = 150;

  const calculateEstimate = () => {
    let total = basePrice + (calculator.pages - 1) * pricePerPage;
    if (calculator.uiux) total += uiuxCost;
    if (calculator.database) total += dbCost;
    if (calculator.ecommerce) total += ecomCost;
    if (calculator.seo) total += seoCost;
    return total;
  };

  const tiers = [
    {
      name: 'Starter Pack',
      price: '$299',
      description: 'Perfect for landing page marketing or brief online portfolios.',
      features: [
        'Single Page Layout',
        'Fully Responsive Grid',
        'Contact Intake Form',
        'Basic SEO Tags',
        '1 Month Maintenance'
      ],
      cta: 'Order Starter',
      popular: false,
      glowColor: 'border-white/5'
    },
    {
      name: 'Business Pack',
      price: '$799',
      description: 'Ideal for standard corporate websites or modern agency showcases.',
      features: [
        'Up to 5 Pages',
        'Figma UI/UX Mockup',
        'Framer Motion Animations',
        'CMS Blog Integration',
        '3 Months Maintenance'
      ],
      cta: 'Order Business',
      popular: true,
      glowColor: 'border-neon-green/30 glow-green'
    },
    {
      name: 'Web App Pack',
      price: '$1,499',
      description: 'Built for advanced software needs, custom databases, and login dashboards.',
      features: [
        'Unlimited Pages',
        'Custom Database Schema',
        'User Login / Portals',
        'Stripe Payment Gateway',
        '6 Months Maintenance'
      ],
      cta: 'Order App',
      popular: false,
      glowColor: 'border-neon-green/30 glow-green'
    }
  ];

  return (
    <div className="w-full min-h-screen text-white bg-dark-bg font-sans pt-28 pb-16">
      
      {/* Header */}
      <section className="relative py-16 overflow-hidden circuit-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
            Pricing Plans
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mt-6 mb-6">
            Transparent Estimates
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed font-sans">
            Choose a fixed starter tier or calculate custom pricing values for your platform below.
          </p>
        </div>
      </section>

      {/* Tier Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`glassmorphism-card rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden ${
                tier.popular ? 'border-neon-green/30' : 'border-white/5'
              } ${tier.glowColor}`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-neon-green text-dark-bg text-[9px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-xl">
                  Popular
                </div>
              )}
              
              <div className="text-left">
                <h3 className="text-lg font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-xs text-white/40 uppercase font-bold tracking-wider">/ project</span>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-sans mb-8">
                  {tier.description}
                </p>

                <hr className="border-white/5 mb-8" />

                <ul className="flex flex-col gap-4 text-xs font-sans text-white/70 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <FiCheck className="text-neon-green w-4 h-4 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/contact"
                className={`w-full py-3 text-center rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                  tier.popular
                    ? 'bg-neon-green text-dark-bg border-neon-green hover:bg-emerald-500 hover:border-emerald-500 shadow-md'
                    : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Estimator Calculator */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="glassmorphism rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-neon-green/3 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-6">
            <FiCpu className="text-neon-green w-6 h-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Dynamic Cost Calculator</h2>
          </div>
          <p className="text-xs text-white/50 leading-relaxed mb-10 max-w-xl font-sans">
            Adjust the sliding controls and select modules below to calculate an immediate development quote.
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
                    <p className="text-[10px] text-white/40">Custom Figma mock files & components</p>
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
                    <p className="text-[10px] text-white/40">Relational schema models and administrative routing</p>
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
                    <p className="text-[10px] text-white/40">Stripe checkout integrations, billing, and invoices</p>
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
                    <p className="text-[10px] text-white/40">Meta tag descriptions, page speeds, layout optimization</p>
                  </div>
                </label>

              </div>
            </div>

            {/* Display Estimate Quote */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 flex flex-col justify-between items-center text-center">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 font-mono">Estimated Cost</span>
                <div className="text-5xl font-extrabold text-neon-green my-6 font-sans glow-green-sm">
                  ${calculateEstimate()}
                </div>
                <p className="text-xs text-white/40 leading-relaxed font-sans px-4">
                  This represents a realistic development estimate. Final quotes depend on requirements.
                </p>
              </div>

              <a
                href="/contact"
                className="mt-8 bg-primary-green hover:bg-neon-green text-dark-bg text-xs font-bold uppercase tracking-wider py-3 px-8 rounded-lg border border-primary-green hover:border-neon-green transition-all duration-300 shadow-md hover:shadow-green-500/20"
              >
                Book Consultation
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;
