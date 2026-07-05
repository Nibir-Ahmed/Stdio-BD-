import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiHeart, FiLayers, FiZap, FiCrosshair, FiCheckCircle } from 'react-icons/fi';

const About = () => {
  return (
    <div className="w-full min-h-screen text-white bg-dark-bg font-sans pt-28 pb-16">
      
      {/* 1. Header Hero */}
      <section className="relative py-16 overflow-hidden circuit-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mt-6 mb-6">
            Engineering the <br />
            <span className="text-neon-green">Next-Generation</span> Web
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto font-sans">
            We are Stdio BD. A premium creative studio building pixel-perfect digital structures that blend art with logical performance.
          </p>
        </div>
      </section>

      {/* 2. Brand Values Bento */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5">
            <FiCode className="w-8 h-8 text-neon-green mb-6" />
            <h3 className="text-lg font-bold text-white mb-3">Clean Code Logic</h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              We compile light, semantic, and modular React frameworks without templates to maximize loading speed.
            </p>
          </div>
          <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5">
            <FiLayers className="w-8 h-8 text-neon-green mb-6" />
            <h3 className="text-lg font-bold text-white mb-3">Asymmetric Design</h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              From glassmorphism overlays to custom bento layouts, our visuals wow visitors at first glance.
            </p>
          </div>
          <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5">
            <FiHeart className="w-8 h-8 text-neon-green mb-6" />
            <h3 className="text-lg font-bold text-white mb-3">Client Happiness</h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              We offer dedicated maintenance systems, update logs, and 24/7 technical monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How We Build — Process Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
              How We Build
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mt-4 mb-4">
              A Practical System for Better Websites
            </h2>
            <p className="text-white/50 text-sm max-w-2xl mx-auto leading-relaxed font-sans">
              Stdio BD helps businesses turn ideas into polished digital products with a clear process, focused design, and reliable development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Built for Business Growth — Left Column (spans 2 rows) */}
            <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5 md:row-span-2 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-neon-green/10 flex items-center justify-center mb-8">
                  <FiZap className="w-7 h-7 text-neon-green" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Built for Business Growth</h3>
                <p className="text-sm text-white/50 leading-relaxed font-sans mb-6">
                  We do more than make pages look modern. Every project is shaped around the business goal: getting inquiries, presenting services clearly, improving trust, and making future updates easier.
                </p>
              </div>
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                From landing pages to full web applications, we combine UI/UX thinking with frontend engineering so the final product feels fast, clear, and ready for real customers.
              </p>
            </div>

            {/* Step 01 — Discover */}
            <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <FiCrosshair className="w-6 h-6 text-neon-green" />
                </div>
                <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Step_01</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Discover</h3>
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                We clarify business goals, audience needs, content priorities, and the conversion path before design begins.
              </p>
            </div>

            {/* Step 02 — Design */}
            <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <FiLayers className="w-6 h-6 text-neon-green" />
                </div>
                <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Step_02</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Design</h3>
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                We create clean UI systems, responsive layouts, and polished user journeys that feel premium on every screen.
              </p>
            </div>

            {/* Step 03 — Develop */}
            <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <FiCode className="w-6 h-6 text-neon-green" />
                </div>
                <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Step_03</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Develop</h3>
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                We build with modern frameworks, clean code architecture, and performance-first principles for fast, reliable results.
              </p>
            </div>

            {/* Step 04 — Support */}
            <div className="glassmorphism-card p-8 rounded-2xl text-left border-white/5">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <FiHeart className="w-6 h-6 text-neon-green" />
                </div>
                <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Step_04</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 text-neon-green">Support</h3>
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                We provide ongoing maintenance, content updates, bug fixes, and feature improvements after launch.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Features Checklist */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="glassmorphism-card rounded-2xl p-10 md:p-12 border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <FiCheckCircle className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                Responsive pages built for mobile, tablet, laptop, and desktop users
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FiCheckCircle className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                Clean frontend architecture that stays easy to update as the business grows
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FiCheckCircle className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                Performance-aware builds focused on speed, clarity, and conversion
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FiCheckCircle className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                Reliable post-launch support for new content, fixes, and feature improvements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-16 text-center max-w-4xl mx-auto px-6">
        <div className="glassmorphism rounded-2xl p-12 border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want to build a stronger digital presence?</h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed font-sans">
            Contact us today to discuss your next responsive web application, landing page build, or platform redesign.
          </p>
          <Link
            to="/contact"
            className="bg-neon-green hover:bg-emerald-500 text-dark-bg font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;

