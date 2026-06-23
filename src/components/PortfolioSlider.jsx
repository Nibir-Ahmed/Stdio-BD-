import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FiExternalLink, FiEye } from 'react-icons/fi';

const PortfolioSlider = () => {
  const projects = [
    {
      title: 'Furniro Furniture Store',
      category: 'E-Commerce Platform',
      image: '/assets/furniro.png',
      tech: ['React', 'Tailwind', 'Redux'],
    },
    {
      title: 'FloraFit Health App',
      category: 'Web Application',
      image: '/assets/florafit.png',
      tech: ['Next.js', 'ChartJS', 'Firebase'],
    },
    {
      title: 'Admin Control Center',
      category: 'SaaS Dashboard',
      image: '/assets/admindashboard.png',
      tech: ['React', 'Tailwind v4', 'Node.js'],
    },
    {
      title: 'Mega E-Commerce Hub',
      category: 'Online Commerce',
      image: '/assets/e commerce.png',
      tech: ['Vite', 'Tailwind', 'Stripe'],
    },
    {
      title: 'Apex Conversion Landing',
      category: 'Landing Page',
      image: '/assets/landingpage.png',
      tech: ['Figma to HTML', 'CSS3', 'JS'],
    },
    {
      title: 'Siam Developer Portfolio',
      category: 'Creative Website',
      image: '/assets/siamport.png',
      tech: ['React', 'Framer Motion'],
    },
  ];

  return (
    <section className="py-24 bg-[#0a0c14] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-neon-green/2 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-neon-green/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold tracking-widest text-neon-green uppercase border border-neon-green/20 bg-neon-green/5 px-3 py-1 rounded-full">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mt-4 mb-4">
              Featured Work
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Explore our latest frontend builds, full-stack systems, and pixel-perfect design files delivered with top-tier efficiency.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-2">
            {/* Custom nav styling handled by Swiper standard controls */}
          </div>
        </div>

        {/* Swiper Coverflow Showcase */}
        <div className="w-full py-8">
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            className="w-full max-w-[1000px] pb-14"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.2,
              }
            }}
          >
            {projects.map((proj, idx) => (
              <SwiperSlide key={idx} className="w-[320px] sm:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden glassmorphism border border-white/10 group relative select-none">
                
                {/* Image Wrap */}
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent opacity-90 group-hover:via-dark-bg/60 transition-all duration-300" />
                </div>

                {/* Hover Reveal Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a
                    href="#"
                    className="p-2 bg-dark-bg/85 backdrop-blur-md rounded-lg text-white hover:text-neon-green border border-white/10 hover:border-neon-green/30 shadow-md transition-all duration-300"
                    title="View details"
                  >
                    <FiEye className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-dark-bg/85 backdrop-blur-md rounded-lg text-white hover:text-neon-green border border-white/10 hover:border-neon-green/30 shadow-md transition-all duration-300"
                    title="Live preview"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Card Content (Bottom overlay) */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col items-start text-left z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neon-green mb-2">
                    {proj.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-neon-green transition-colors duration-300">
                    {proj.title}
                  </h3>
                  
                  {/* Tech stack badge row */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono font-medium text-white/60 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSlider;
