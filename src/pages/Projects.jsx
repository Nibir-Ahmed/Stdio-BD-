import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Business', 'E-Commerce', 'Landing Page', 'Portfolio', 'Educational'];

  const projects = [
    {
      title: 'Furnito Furniture',
      category: 'E-Commerce',
      image: '/assets/furniro.png',
      description: 'A client-facing React application deployed on Vercel with component-based UI, responsive views, and polished frontend flow.',
      tech: ['React.js', 'Vercel', 'CSS'],
      link: 'https://fitarsiam377.github.io/furniro-e-commerce-website-/'
    },
    {
      title: 'BUBT academia',
      category: 'Educational',
      image: '/assets/academia.png',
      description: 'A Figma-inspired UI implementation converted into responsive HTML, Tailwind CSS, and JavaScript sections.',
      tech: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Figma'],
      link: 'https://fitarsiam377.github.io/BUBT-Academia-Project-Prototype-/'
    },
    {
      title: 'CyberGuard',
      category: 'Business',
      image: '/assets/cyber.png',
      description: 'A fast Next.js website with modern page composition, reusable sections, and production-ready responsive layout.',
      tech: ['Next.js', 'React.js', 'CSS'],
      link: 'https://resplendent-sawine-828781.netlify.app/'
    },
    {
      title: 'ÈLVORA',
      category: 'E-Commerce',
      image: '/assets/elvora.png',
      description: 'A client-facing React application deployed on Vercel with component-based UI, responsive views, and polished frontend flow.',
      tech: ['React.js', 'Vercel', 'CSS'],
      link: 'https://elvora-bd.vercel.app/'
    },
    {
      title: 'Mans Premium apperience',
      category: 'E-Commerce',
      image: '/assets/men-premium.png',
      description: 'A clean footwear brand website with responsive product sections, stylish visual presentation, and simple conversion-focused layout.',
      tech: ['HTML5', 'CSS3', 'Bootstrap'],
      link: 'https://florafit.netlify.app/'
    },
    {
      title: 'Homeland',
      category: 'Business',
      image: '/assets/Homaland.png',
      description: 'A real estate business website designed to present property listings, trusted service details, and lead-focused contact actions.',
      tech: ['HTML5', 'CSS3', 'Tailwind', 'js'],
      link: 'https://homeland-sigma.vercel.app/'
    },
    {
      title: 'Portfolio Website',
      category: 'Portfolio',
      image: '/assets/portfoliosiam.png',
      description: 'A personal developer portfolio showcasing skills, project work, contact details, and a polished responsive presentation.',
      tech: ['HTML5', 'CSS3', 'Bootstrap'],
      link: 'https://fitarsiamportfolio.netlify.app/'
    },
    {
      title: 'NuriGlow Store BD',
      category: 'E-Commerce',
      image: '/assets/Screenshot 2026-07-06 at 12.11.18 AM.png',
      description: 'A React-powered online store for beauty and skincare products with product browsing, storefront UI, and shopping-focused flow.',
      tech: ['React.js', 'Firebase', 'CSS'],
      link: 'https://nuriglow-store-bd.web.app/'
    },
    {
      title: 'InnovateEd',
      category: 'Educational',
      image: '/assets/innovate.png',
      description: 'A modern education platform interface with React, Redux state flow, responsive Tailwind styling, and structured learning content.',
      tech: ['React.js', 'Redux', 'Tailwind CSS'],
      link: 'https://innavated.web.app/'
    },
    {
      title: 'Bigspring Business Platform',
      category: 'Business',
      image: '/assets/bigspring.png',
      description: 'A Next.js business platform built for corporate presentation, service storytelling, and polished marketing page performance.',
      tech: ['Next.js', 'Tailwind CSS'],
      link: 'https://lucent-biscuit-173f0a.netlify.app/'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="w-full min-h-screen text-white bg-dark-bg font-sans pt-28 pb-16">
      
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden circuit-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
            Our Works
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mt-6 mb-6">
            Case Studies
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed font-sans">
            Explore our actual production builds and pixel-perfect design files delivered with maximum efficiency.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                filter === cat
                  ? 'bg-neon-green text-dark-bg border-neon-green glow-green-sm'
                  : 'bg-white/5 text-white/60 border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects List Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="glassmorphism rounded-2xl overflow-hidden border-white/5 flex flex-col group relative hover:border-neon-green/20 transition-colors"
            >
              {/* Image Frame */}
              <div className="w-full aspect-[4/3] bg-white/5 relative overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top transition-transform duration-750 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400x300/ffffff/1a1a1a?text=CASE+STUDY";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-80" />
              </div>

              {/* Text Area */}
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neon-green">
                    {proj.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-3 group-hover:text-neon-green transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed font-sans mb-6">
                    {proj.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono text-white/60 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {proj.link && proj.link !== '#' && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-neon-green/10 text-neon-green border border-neon-green/20 hover:bg-neon-green hover:text-dark-bg text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md transition-all ml-3 shrink-0"
                    >
                      <span>Live</span>
                      <FiExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Projects;
