import { useState } from 'react';
import { EyeOff, Eye, Github, LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';

export const SignInView = ({ onSkip }: { onSkip: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full h-screen bg-[#0D0D0D] text-white overflow-hidden p-2">
      {/* Left Panel */}
      <div className="hidden lg:flex flex-col w-[45%] bg-[#0f0c29] bg-gradient-to-br from-[#8A2BE2]/80 via-[#4B0082]/80 to-[#0D0D0D] rounded-3xl p-12 relative overflow-hidden ring-1 ring-white/10 shadow-2xl">
         {/* Glow effects */}
         <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[60%] bg-violet-400/30 blur-[120px] rounded-full pointer-events-none" />
         
         <div className="flex flex-col items-center justify-center h-full relative z-10 max-w-sm mx-auto w-full">
            <div className="flex items-center gap-2 mb-8 select-none">
              <LayoutDashboard className="w-6 h-6" />
              <span className="font-bold text-xl tracking-tight">Dashnect</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-3 text-center tracking-tight">Get Started with Us</h1>
            <p className="text-[#A3A3A3] text-center mb-12 text-sm leading-relaxed max-w-[280px]">
              Complete these easy steps to register your account.
            </p>

            <div className="w-full space-y-4">
              {/* Step 1 */}
              <div className="flex items-center gap-4 bg-white text-black p-4 rounded-xl font-semibold text-sm shadow-xl shadow-black/20">
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">1</div>
                Sign up your account
              </div>
              {/* Step 2 */}
              <div className="flex items-center gap-4 bg-[#1A1A1A]/40 text-[#8C8C8C] p-4 rounded-xl font-medium text-sm border border-white/5 backdrop-blur-sm">
                <div className="w-6 h-6 rounded-full bg-[#333] text-white flex items-center justify-center text-xs">2</div>
                Set up your workspace
              </div>
              {/* Step 3 */}
              <div className="flex items-center gap-4 bg-[#1A1A1A]/40 text-[#8C8C8C] p-4 rounded-xl font-medium text-sm border border-white/5 backdrop-blur-sm">
                <div className="w-6 h-6 rounded-full bg-[#333] text-white flex items-center justify-center text-xs">3</div>
                Set up your profile
              </div>
            </div>
         </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-8 relative">
         <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center justify-between w-full px-4 md:px-0 md:justify-end">
           {/* Mobile Logo */}
           <div className="flex lg:hidden items-center gap-2 select-none">
             <LayoutDashboard className="w-5 h-5 text-violet-500" />
             <span className="font-bold text-lg tracking-tight">Dashnect</span>
           </div>
           
           <button 
             onClick={onSkip} 
             className="text-sm font-semibold text-[#8C8C8C] hover:text-white transition-colors border border-[#262626] rounded-lg px-3 py-1.5 md:px-4 md:py-2 hover:bg-[#1A1A1A]"
           >
             Skip
           </button>
         </div>

         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="w-full max-w-[400px] space-y-6 sm:space-y-8 mt-12 md:mt-0"
         >
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">Sign Up Account</h2>
              <p className="text-sm text-[#8C8C8C]">Enter your personal data to create your account.</p>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                 type="button" 
                 onClick={onSkip}
                 className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-[#262626] hover:bg-[#1A1A1A] transition-colors text-sm font-semibold"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button 
                 type="button" 
                 onClick={onSkip}
                 className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-[#262626] hover:bg-[#1A1A1A] transition-colors text-sm font-semibold"
              >
                <Github className="w-4 h-4" />
                Github
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-[#262626]"></div>
              <span className="flex-shrink-0 px-4 text-[10px] text-[#8C8C8C] uppercase font-semibold tracking-wider">Or</span>
              <div className="flex-grow border-t border-[#262626]"></div>
            </div>

            {/* Form */}
            <form className="space-y-4 sm:space-y-5 text-sm" onSubmit={(e) => { e.preventDefault(); onSkip(); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="font-semibold text-xs text-[#E5E5E5]">First Name</label>
                   <input type="text" placeholder="eg. John" className="w-full bg-[#141414] border border-[#262626] rounded-xl px-4 py-3 placeholder:text-[#4D4D4D] focus:outline-none focus:border-violet-600 transition-colors font-medium text-white" />
                </div>
                <div className="space-y-2">
                   <label className="font-semibold text-xs text-[#E5E5E5]">Last Name</label>
                   <input type="text" placeholder="eg. Francisco" className="w-full bg-[#141414] border border-[#262626] rounded-xl px-4 py-3 placeholder:text-[#4D4D4D] focus:outline-none focus:border-violet-600 transition-colors font-medium text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-semibold text-xs text-[#E5E5E5]">Email</label>
                <input type="email" placeholder="eg. johnfrans@gmail.com" className="w-full bg-[#141414] border border-[#262626] rounded-xl px-4 py-3 placeholder:text-[#4D4D4D] focus:outline-none focus:border-violet-600 transition-colors font-medium text-white" />
              </div>

              <div className="space-y-2">
                <label className="font-semibold text-xs text-[#E5E5E5]">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter your password" 
                    className="w-full bg-[#141414] border border-[#262626] rounded-xl pl-4 pr-10 py-3 placeholder:text-[#4D4D4D] focus:outline-none focus:border-violet-600 transition-colors font-medium text-white" 
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C8C8C] hover:text-white transition-colors">
                    {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[10px] text-[#8C8C8C] pt-1 font-medium">Must be at least 8 characters.</p>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-white text-black font-bold rounded-xl py-3 hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 active:scale-[0.98]">
                  Sign Up
                </button>
              </div>

              <p className="text-center text-xs text-[#8C8C8C] pt-2">
                Already have an account? <button type="button" onClick={onSkip} className="font-bold text-white hover:underline transition-all">Log in</button>
              </p>
            </form>
         </motion.div>
      </div>
    </div>
  );
};
