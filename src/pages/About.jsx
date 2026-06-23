import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiHeart, FiLayers, FiMapPin } from 'react-icons/fi';

const About = () => {
  const team = [
    {
      name: 'Al Fitar Ahmed Siam',
      role: 'Lead Full-Stack Developer & Founder',
      image: '/assets/siam.png',
      bio: 'Architecting high-performance React architectures, Node backends, and responsive CSS engines.'
    },
    {
      name: 'Rimon Ahmed',
      role: 'Lead UI/UX Designer & Frontend Developer',
      image: '/assets/rimon.png',
      bio: 'Crafting responsive wireframes, graphic structures, and transition scripts in Figma and React.'
    },
    {
      name: 'Tanvir Ahmed',
      role: 'Frontend Engineer',
      image: '/assets/tanvir.png',
      bio: 'Specializing in Tailwind utility integrations, animations, and state validation.'
    },
    {
      name: 'Tasin Ahmed',
      role: 'Support & Maintenance Specialist',
      image: '/assets/tasin.png',
      bio: 'Managing 24/7 client systems, bug patches, server configurations, and module migrations.'
    }
  ];

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

      {/* 3. Team Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
              Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mt-4 mb-4">
              Meet our Engineers
            </h2>
            <p className="text-white/50 text-sm">
              The creative minds directing code, architecture, and layouts at Stdio BD.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="glassmorphism-card rounded-2xl overflow-hidden border-white/5 flex flex-col group hover:border-neon-green/20">
                <div className="w-full aspect-[5/6] bg-white/5 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/300x360/ffffff/1a1a1a?text=STUDIO+BD";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-neon-green transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-xs text-neon-green font-medium tracking-wide uppercase mt-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-white/50 leading-relaxed mt-4 font-sans">
                      {member.bio}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/30 font-mono tracking-widest mt-6 border-t border-white/5 pt-4">
                    <FiMapPin className="w-3.5 h-3.5" />
                    <span>DHAKA, BD</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Contact CTA */}
      <section className="py-16 text-center max-w-4xl mx-auto px-6">
        <div className="glassmorphism rounded-2xl p-12 border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want to partner with our team?</h2>
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
