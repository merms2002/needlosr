import { useState } from 'react';
import { Search, Bell, Plus, ChevronDown, User, Settings, CreditCard, LogOut } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export const Header = ({ title, onMenuToggle }: { title: string, onMenuToggle?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-20 border-b border-[#262626] flex items-center justify-between px-6 lg:px-8 sticky top-0 bg-[#0D0D0D] z-50">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuToggle}
          className="lg:hidden p-2 -ml-2 text-[#8C8C8C] hover:text-white transition-colors rounded-xl hover:bg-[#1A1A1A]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
      </div>
      
      <div className="flex items-center gap-4 lg:gap-6">
        <div className="relative group hidden lg:block">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C8C8C] group-focus-within:text-white transition-colors" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-[#141414] border border-[#262626] rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:border-violet-600 transition-all font-medium"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 text-[#8C8C8C] hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="bg-[#FF6B00] hover:bg-[#E56000] text-white p-2 rounded-xl transition-all shadow-lg shadow-orange-500/20">
            <Plus className="w-5 h-5" />
          </button>
          
          <div className="relative">
            <div 
              className="flex items-center gap-3 pl-4 border-l border-[#262626] cursor-pointer group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-xl object-cover ring-2 ring-violet-600/20 group-hover:ring-violet-600 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#0D0D0D] rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold group-hover:text-white transition-colors">Mohamed Osama</span>
                <ChevronDown className={cn("w-4 h-4 text-[#8C8C8C] group-hover:text-white transition-all", isOpen && "rotate-180")} />
              </div>
            </div>

            {/* Profile Dropdown */}
            {isOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute right-0 mt-3 w-56 bg-[#141414] border border-[#262626] rounded-2xl shadow-2xl z-20 py-2 overflow-hidden"
                >
                  <div className="px-4 py-3 border-b border-[#262626]">
                    <p className="text-xs font-bold text-[#8C8C8C] uppercase tracking-widest mb-1">Signed in as</p>
                    <p className="text-sm font-bold text-white truncate">Mohamed Osama</p>
                  </div>
                  
                  <div className="py-2">
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#8C8C8C] hover:text-white hover:bg-[#1A1A1A] transition-all">
                      <User className="w-4 h-4" />
                      View Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#8C8C8C] hover:text-white hover:bg-[#1A1A1A] transition-all">
                      <Settings className="w-4 h-4" />
                      Account Settings
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#8C8C8C] hover:text-white hover:bg-[#1A1A1A] transition-all">
                      <CreditCard className="w-4 h-4" />
                      Billing & Plans
                    </button>
                  </div>

                  <div className="border-t border-[#262626] pt-2">
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 transition-all">
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
