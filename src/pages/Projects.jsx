import React, { useState } from 'react';
import { FiEye, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web App', 'E-Commerce', 'Landing Page', 'UI/UX'];

  const projects = [
    {
      title: 'Furniro Furniture Store',
      category: 'E-Commerce',
      image: '/assets/furniro.png',
      description: 'Sophisticated interior wood furniture store UI with rich search filters and card systems.',
      tech: ['React.js', 'Redux', 'Tailwind CSS']
    },
    {
      title: 'FloraFit Wellness Tracker',
      category: 'Web App',
      image: '/assets/florafit.png',
      description: 'Modern healthcare portal providing calories index calculations and diet layout guides.',
      tech: ['Next.js', 'ChartJS', 'Firebase']
    },
    {
      title: 'Admin analytical panel',
      category: 'Web App',
      image: '/assets/admindashboard.png',
      description: 'Analytical dashboards built with glowing light grids, responsive data tables, and metrics.',
      tech: ['Vite', 'Tailwind v4', 'ApexCharts']
    },
    {
      title: 'E-Commerce Visual Hub',
      category: 'E-Commerce',
      image: '/assets/e commerce.png',
      description: 'Comprehensive digital storefront with modern payment gateways and user checkouts.',
      tech: ['React.js', 'Stripe', 'Node.js']
    },
    {
      title: 'Apex Conversion Landing',
      category: 'Landing Page',
      image: '/assets/landingpage.png',
      description: 'Single page digital marketing layout optimized for SEO and conversion metrics.',
      tech: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'Siam Developer Portfolio',
      category: 'UI/UX',
      image: '/assets/siamport.png',
      description: 'Framer Motion presentation highlighting creative digital works and code blocks.',
      tech: ['React.js', 'Framer Motion', 'Figma']
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
                
                {/* Actions Hover Overlays */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <a
                    href="#"
                    className="p-2 bg-dark-bg/85 backdrop-blur-md rounded-lg text-white hover:text-neon-green border border-white/10 hover:border-neon-green/30 transition-colors"
                    title="Quick look"
                  >
                    <FiEye className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-dark-bg/85 backdrop-blur-md rounded-lg text-white hover:text-neon-green border border-white/10 hover:border-neon-green/30 transition-colors"
                    title="Live preview"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
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

                <div className="border-t border-white/5 pt-4 flex flex-wrap gap-1.5">
                  {proj.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-mono text-white/60 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
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
