import { LayoutDashboard, LogOut, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { menuItems } from '../../lib/constants';

interface SidebarProps {
  activeId: string;
  onViewChange: (id: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar = ({ activeId, onViewChange, isOpenMobile, onCloseMobile }: SidebarProps) => (
  <>
    {/* Mobile Overlay */}
    {isOpenMobile && (
      <div 
        className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
        onClick={onCloseMobile}
      />
    )}
    
    <aside className={cn(
      "fixed inset-y-0 left-0 z-50 w-64 bg-[#0D0D0D] border-r border-[#262626] flex flex-col p-6 transition-transform duration-300 lg:relative lg:translate-x-0 shrink-0",
      isOpenMobile ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">Dashnect</span>
        </div>
        
        <button 
          onClick={onCloseMobile}
          className="lg:hidden p-2 text-[#8C8C8C] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 space-y-2">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            onViewChange(item.id);
            if (onCloseMobile) onCloseMobile();
          }}
          className={cn(
            "sidebar-link w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
            activeId === item.id 
              ? "bg-[#262626] text-white font-semibold" 
              : "text-[#8C8C8C] hover:text-white hover:bg-[#1A1A1A]"
          )}
        >
          <item.icon className="w-5 h-5" />
          <span className="font-medium">{item.label}</span>
        </button>
      ))}
    </nav>

    <div className="pt-6 border-t border-[#262626] mt-auto">
      <button className="sidebar-link w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-red-500/80 hover:text-red-500 hover:bg-red-500/5">
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  </aside>
  </>
);
