import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const LandingPage = ({ onEnter }: { onEnter: () => void }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#0C0C0D] overflow-hidden font-sans selection:bg-[#FF3B00]/30 selection:text-white flex flex-col">
      {/* 1. Base Dark Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
        style={{ transform: 'scale(1.05)' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0C0C0D] via-[#0C0C0D]/90 to-transparent" />
      <div className="absolute inset-0 z-0 bg-[#0C0C0D]/60" />

      {/* 2. The Central Pillar of Light (Behind Clouds) */}
      <div className="absolute inset-x-0 bottom-0 top-[35vh] w-[140px] sm:w-[160px] md:w-[220px] mx-auto z-10 pointer-events-none flex flex-col justify-end items-center">
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '100%' }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          {/* Pillar Gradient Background */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-[#FF3B00] via-[#FF3B00]/40 to-transparent"
            style={{ 
              boxShadow: '0 0 150px 50px rgba(255, 59, 0, 0.5), inset 0 0 80px rgba(255, 59, 0, 0.7)',
              filter: 'blur(3px)',
            }}
          />
          {/* Bright Central Line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[75%] bg-gradient-to-t from-[#FFF] via-[#FFE5D9] to-transparent shadow-[0_0_30px_5px_rgba(255,255,255,0.9)]" />
        </motion.div>
      </div>

      {/* 3. Left Foreground (SVG Rocks & Clouds) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[60vw] h-[85vh] z-[15] pointer-events-none" 
        style={{ filter: 'drop-shadow(40px 0px 80px rgba(255,59,0,0.5)) drop-shadow(20px -20px 50px rgba(255,59,0,0.3))' }}
      >
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMinYMax slice" className="w-full h-full text-[#0C0C0D] fill-current">
          <defs>
            <filter id="left-cloud" x="-30%" y="-30%" width="160%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="5" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" xChannelSelector="R" yChannelSelector="G" />
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>
          {/* Sharp Rocks Base */}
          <path d="M0,1000 L0,100 L40,150 L90,80 L140,140 L230,50 L290,160 L420,250 L480,200 L600,420 L760,550 L920,850 L1000,1000 Z" />
          {/* Billowy Clouds Overlay */}
          <g filter="url(#left-cloud)">
            <circle cx="250" cy="450" r="200" />
            <circle cx="500" cy="650" r="240" />
            <circle cx="750" cy="850" r="260" />
            <circle cx="1000" cy="1000" r="220" />
          </g>
        </svg>
      </motion.div>

      {/* 4. Right Foreground (SVG Rocks & Clouds) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-[55vw] h-[75vh] z-[15] pointer-events-none" 
        style={{ filter: 'drop-shadow(-40px 0px 80px rgba(255,59,0,0.5)) drop-shadow(-20px -20px 50px rgba(255,59,0,0.3))' }}
      >
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMaxYMax slice" className="w-full h-full text-[#0C0C0D] fill-current">
          <defs>
            <filter id="right-cloud" x="-30%" y="-30%" width="160%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="5" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="55" xChannelSelector="R" yChannelSelector="G" />
              <feGaussianBlur stdDeviation="15" />
            </filter>
          </defs>
          {/* Sharp Rocks Base */}
          <path d="M1000,1000 L1000,200 L940,180 L880,280 L790,200 L650,420 L580,350 L460,520 L280,680 L120,850 L0,1000 Z" />
          {/* Billowy Clouds Overlay */}
          <g filter="url(#right-cloud)">
            <circle cx="750" cy="550" r="210" />
            <circle cx="500" cy="720" r="250" />
            <circle cx="200" cy="900" r="280" />
            <circle cx="-20" cy="1000" r="220" />
          </g>
        </svg>
      </motion.div>

      {/* 5. Depth Base Blending Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0C0C0D] to-transparent z-[16] pointer-events-none" />

      {/* 6. Foreground UI Overlay (Nav, Text, Stats) */}
      <div className="absolute inset-0 z-20 w-full h-full flex flex-col pointer-events-none overflow-y-auto overflow-x-hidden">
        
        {/* Navigation */}
        <nav className="w-full mx-auto max-w-2xl px-6 py-12 flex items-center justify-center gap-6 sm:gap-10 pointer-events-auto">
          <div className="text-[#FF3B00] mr-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-90 drop-shadow-[0_0_8px_currentColor]">
              <path d="M12 2L14.7 9.3L22 12L14.7 14.7L12 22L9.3 14.7L2 12L9.3 9.3L12 2Z" />
              <circle cx="12" cy="12" r="3" fill="#0C0C0D" />
            </svg>
          </div>
          {['HOME', 'FEATURES', 'FAQ', 'ABOUT', 'CONTACT'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-[9px] sm:text-[10px] font-semibold text-white/70 hover:text-white tracking-[0.15em] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hero Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-6 sm:space-y-8 flex-shrink-0 px-4 mt-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[6rem] font-bold text-white uppercase tracking-tighter leading-[0.92] max-w-5xl drop-shadow-2xl" style={{ fontWeight: 900 }}>
            AI Framework<br/>
            To Take You<br/>
            Anywhere
          </h1>

          <div className="flex flex-col items-center space-y-1">
            <p className="text-[9px] sm:text-[10px] text-[#A3A3A3] uppercase tracking-[0.2em] font-medium opacity-80">
              Support your growth every step of the way
            </p>
            <p className="text-[9px] sm:text-[10px] text-[#A3A3A3] uppercase tracking-[0.2em] font-medium opacity-80">
              – No matter where you're headed
            </p>
          </div>
        </motion.div>

        {/* Flanking Stats & Discover More */}
        <div className="relative w-full flex-1 flex justify-center items-end max-w-5xl mx-auto min-h-[350px]">
          
          {/* Left Stat */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute right-[calc(50%+100px)] sm:right-[calc(50%+140px)] bottom-[20%] md:bottom-[25%] text-right sm:text-center pointer-events-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              50+
            </h2>
            <p className="text-[9px] text-[#A3A3A3] tracking-[0.15em] font-bold uppercase drop-shadow-md">
              Data Centers
            </p>
          </motion.div>

          {/* Center Button */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[10vh] z-30 pointer-events-auto">
            <button 
              onClick={onEnter}
              className="relative px-5 py-2 border-b border-[#FF3B00]/70 text-[10px] text-white/90 hover:text-white tracking-[0.2em] font-bold uppercase transition-all hover:border-[#FF3B00] hover:bg-white/5 active:scale-95 group text-center whitespace-nowrap"
              style={{ textShadow: '0 2px 10px rgba(255,59,0,0.8)' }}
            >
              Discover More
              <div className="absolute inset-0 bg-[#FF3B00] opacity-0 group-hover:opacity-20 transition-opacity blur-md" />
            </button>
          </div>

          {/* Right Stat */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-[calc(50%+100px)] sm:left-[calc(50%+140px)] bottom-[35%] md:bottom-[45%] text-left sm:text-center pointer-events-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              10X
            </h2>
            <p className="text-[9px] text-[#A3A3A3] tracking-[0.15em] font-bold uppercase drop-shadow-md">
              Faster Deployments
            </p>
          </motion.div>
        </div>

      </div>

      {/* 7. Global Noise Filter (Blends over everything including vector clouds) */}
      <div 
        className="absolute inset-0 z-30 opacity-[0.06] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
    </div>
  );
};
