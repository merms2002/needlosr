import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export const LandingPage = ({ onEnter }: { onEnter: () => void }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#0C0C0D] overflow-hidden font-sans selection:bg-[#FF3B00]/30">
      {/* Background Image & Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
        style={{ transform: 'scale(1.05)' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0C0C0D] via-[#0C0C0D]/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0C0C0D] via-transparent to-transparent h-48 bottom-0" />
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* Main Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center">
        
        {/* Navigation */}
        <nav className="w-full max-w-2xl px-6 py-8 flex items-center justify-center gap-6 sm:gap-10">
          <div className="text-[#FF3B00] mr-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
              <path d="M12 2L14.7 9.3L22 12L14.7 14.7L12 22L9.3 14.7L2 12L9.3 9.3L12 2Z" />
              <circle cx="12" cy="12" r="3" fill="#0C0C0D" />
            </svg>
          </div>
          {['HOME', 'FEATURES', 'FAQ', 'ABOUT', 'CONTACT'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-[9px] sm:text-[10px] font-semibold text-[#A3A3A3] hover:text-white tracking-[0.15em] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Hero Content */}
        <main className="flex-1 flex flex-col items-center justify-start w-full px-4 relative z-20 overflow-y-auto overflow-x-hidden pt-8 sm:pt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center space-y-6 sm:space-y-8 flex-shrink-0"
          >
            <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[5.5rem] font-bold text-white uppercase tracking-tighter leading-[0.95] max-w-4xl drop-shadow-2xl font-sans" style={{ fontWeight: 900 }}>
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

          {/* Central Glowing Beam & Flanking Stats */}
          <div className="relative w-full flex-1 flex justify-center items-end max-w-5xl mx-auto pointer-events-none mt-12 min-h-[350px]">
            
            {/* Left Stat */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute right-[calc(50%+80px)] sm:right-[calc(50%+120px)] bottom-[20%] md:bottom-[25%] text-right sm:text-center z-20"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2 drop-shadow-xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                50+
              </h2>
              <p className="text-[9px] text-[#A3A3A3] tracking-[0.15em] font-bold uppercase drop-shadow-md">
                Data Centers
              </p>
            </motion.div>

            {/* Glowing Vertical Column */}
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="relative w-[120px] sm:w-[140px] md:w-[160px] h-full flex flex-col items-center justify-end overflow-visible pointer-events-auto z-10"
            >
              {/* Pillar Gradient Background */}
              <div 
                className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#FF3B00] via-[#FF3B00]/60 to-transparent"
                style={{ 
                  boxShadow: '0 0 100px 30px rgba(255, 59, 0, 0.4), inset 0 0 50px rgba(255, 59, 0, 0.5)',
                  filter: 'blur(3px)',
                }}
              />
              
              {/* Bright Central Line */}
              <div className="absolute bottom-0 w-px h-[60%] bg-gradient-to-t from-[#FFF] via-[#FFE5D9] to-transparent shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]" />

              <button 
                onClick={onEnter}
                className="relative z-30 mb-8 sm:mb-12 px-4 py-2 border-b border-[#FF3B00]/50 text-[10px] text-white/90 hover:text-white tracking-[0.2em] font-bold uppercase transition-all hover:border-[#FF3B00] hover:bg-white/5 active:scale-95 group text-center"
                style={{ textShadow: '0 2px 10px rgba(255,59,0,0.8)' }}
              >
                Discover More
                <div className="absolute inset-0 bg-[#FF3B00] opacity-0 group-hover:opacity-20 transition-opacity blur-md" />
              </button>
            </motion.div>

            {/* Right Stat */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-[calc(50%+80px)] sm:left-[calc(50%+120px)] bottom-[35%] md:bottom-[45%] text-left sm:text-center z-20"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2 drop-shadow-xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                10X
              </h2>
              <p className="text-[9px] text-[#A3A3A3] tracking-[0.15em] font-bold uppercase drop-shadow-md">
                Faster Deployments
              </p>
            </motion.div>

          </div>

        </main>
      </div>

    </div>
  );
};
