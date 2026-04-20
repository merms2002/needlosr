import { motion } from 'motion/react';
import { 
  LayoutDashboard, Star, ChevronDown, User, Calendar, TrendingUp, MessageCircle, 
  MapPin, BarChart3, PieChart, CalendarX2, MoreHorizontal
} from 'lucide-react';
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer } from 'recharts';
import { cn } from '../../lib/utils';

export const OverviewView = () => {
  return (
    <div className="flex-1 p-6 lg:p-8 space-y-6 overflow-y-auto scrollbar-custom max-w-[1600px] w-full text-white pb-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-[#D4FF3E] rounded-xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(212,255,62,0.3)]">
             <LayoutDashboard className="w-5 h-5" />
           </div>
           <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none items-center justify-center gap-2 bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-[#2A2A2A] px-5 py-2.5 rounded-full text-xs font-semibold transition-colors flex">
            <Star className="w-3.5 h-3.5 text-[#D4FF3E] fill-[#D4FF3E]" /> All Product <Calendar className="w-3.5 h-3.5 ml-1 opacity-50" />
          </button>
          <button className="flex-1 md:flex-none items-center justify-center gap-2 bg-[#D4FF3E] hover:bg-[#c6f333] text-black px-5 py-2.5 rounded-full text-xs font-semibold transition-colors flex shadow-[0_0_15px_rgba(212,255,62,0.2)]">
            Current Report <ChevronDown className="w-3.5 h-3.5 opacity-70" />
          </button>
        </div>
      </div>

      {/* Top Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Lime */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} delay={0} className="bg-[#D4FF3E] text-[#111111] p-6 rounded-[2rem] flex flex-col justify-between min-h-[180px] relative overflow-hidden shadow-[0_0_30px_rgba(212,255,62,0.1)]">
          {/* Concentric circles background */}
          <div className="absolute -top-12 -left-12 w-48 h-48 border border-black/5 rounded-full pointer-events-none" />
          <div className="absolute -top-4 -left-4 w-32 h-32 border border-black/10 rounded-full pointer-events-none" />
          <div className="absolute top-4 left-4 w-16 h-16 border-2 border-black/10 rounded-full pointer-events-none bg-black/5" />

          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm relative z-10">
                 <User className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm">New Study Topics</span>
            </div>
          </div>
          <div className="flex items-end justify-between relative z-10 mt-8">
            <div>
              <h3 className="text-[2.5rem] font-extrabold leading-none tracking-tighter mb-1.5">$45,56.20</h3>
              <p className="text-[10px] font-bold text-black/60 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> + 60% This month
              </p>
            </div>
            {/* Small Bar graph */}
            <div className="flex items-end gap-1.5 pb-1">
               {[40, 20, 60, 100, 30, 45].map((h, i) => (
                 <div key={i} className={cn("w-2 rounded-full", i === 3 ? "bg-black" : "bg-black/20")} style={{ height: `${h}%`, minHeight: '8px' }} />
               ))}
            </div>
          </div>
        </motion.div>

        {/* Card 2: Dark */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} delay={0.1} className="bg-[#222222] border border-[#2A2A2A] p-6 rounded-[2rem] flex flex-col justify-between min-h-[180px]">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4FF3E]/10 rounded-full flex items-center justify-center">
                 <Calendar className="w-5 h-5 text-[#D4FF3E]" />
              </div>
              <span className="font-semibold text-sm text-[#A3A3A3]">Exams Scheduled</span>
            </div>
          </div>
          <div className="flex items-end justify-between mt-8">
            <div>
              <h3 className="text-[2rem] font-bold leading-none tracking-tight mb-2">$18,56.20</h3>
              <p className="text-[10px] font-bold text-[#8C8C8C] flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-[#D4FF3E]" /> <span className="text-[#A3A3A3]">+ 45% This month</span>
              </p>
            </div>
            <div className="flex items-end gap-1.5 pb-1">
               {[20, 45, 30, 80].map((h, i) => (
                 <div key={i} className={cn("w-3 rounded-full", i === 3 ? "bg-[#D4FF3E]" : "bg-white/10")} style={{ height: `${h}%`, minHeight: '8px' }} />
               ))}
            </div>
          </div>
        </motion.div>

        {/* Card 3: Dark */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} delay={0.2} className="bg-[#222222] border border-[#2A2A2A] p-6 rounded-[2rem] flex flex-col justify-between min-h-[180px]">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4FF3E]/10 rounded-full flex items-center justify-center">
                 <TrendingUp className="w-5 h-5 text-[#D4FF3E]" />
              </div>
              <span className="font-semibold text-sm text-[#A3A3A3]">Retention Rate</span>
            </div>
          </div>
          <div className="flex items-end justify-between mt-8">
            <div>
              <h3 className="text-[2rem] font-bold leading-none tracking-tight mb-2">$28,56.20</h3>
              <p className="text-[10px] font-bold text-[#8C8C8C] flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-[#D4FF3E]" /> <span className="text-[#A3A3A3]">- 35% This month</span>
              </p>
            </div>
            <div className="w-20 h-10 relative">
               <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                 <path d="M0,20 L20,30 L40,10 L60,25 L80,5 L100,20" fill="none" stroke="#D4FF3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                 <line x1="80" y1="0" x2="80" y2="40" stroke="white" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
                 <circle cx="80" cy="5" r="3" fill="#D4FF3E" />
               </svg>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Dark */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} delay={0.3} className="bg-[#222222] border border-[#2A2A2A] p-6 rounded-[2rem] flex flex-col justify-between min-h-[180px]">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4FF3E]/10 rounded-full flex items-center justify-center">
                 <MessageCircle className="w-5 h-5 text-[#D4FF3E]" />
              </div>
              <span className="font-semibold text-sm text-[#A3A3A3]">Focus Time</span>
            </div>
          </div>
          <div className="flex items-end justify-between mt-8">
            <div>
              <h3 className="text-[2rem] font-bold leading-none tracking-tight mb-2">$38,56.20</h3>
              <p className="text-[10px] font-bold text-[#8C8C8C] flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-[#D4FF3E]" /> <span className="text-[#A3A3A3]">- 25% This month</span>
              </p>
            </div>
            <div className="flex items-center gap-1 h-8 opacity-60">
               {[10, 30, 20, 60, 100, 50, 80, 40, 20, 10].map((h, i) => (
                 <div key={i} className={cn("w-1 rounded-full", i === 4 ? "bg-[#D4FF3E]" : "bg-[#4D4D4D]")} style={{ height: `${h}%`, minHeight: '4px' }} />
               ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 line-clamp-2">
        {/* Heatmap */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} delay={0.4} className="bg-[#222222] border border-[#2A2A2A] p-6 rounded-[2rem] lg:col-span-1">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#A3A3A3]" />
              <h3 className="font-semibold text-sm text-[#E5E5E5]">Avg Study Hours By Day</h3>
            </div>
            <button className="text-[#A3A3A3] hover:text-white"><MoreHorizontal className="w-4 h-4" /></button>
          </div>
          
          <div className="flex gap-2">
            {/* Y axis */}
            <div className="flex flex-col justify-between text-[8px] text-[#8C8C8C] font-semibold py-2">
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>{'>'}900</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>{'>'}700</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-indigo-300"></span>{'>'}500</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#333]"></span>{'<'}300</span>
            </div>
            
            {/* Grid */}
            <div className="flex-1 grid grid-cols-7 gap-1.5">
              {Array.from({length: 28}).map((_, i) => {
                // Generate a random-looking heatmap using purple hues
                const levels = ['bg-[#1A1A1A]', 'bg-indigo-900/40', 'bg-indigo-600/70', 'bg-indigo-400'];
                const rand = ((i * 13) % 4);
                return <div key={i} className={cn("aspect-square rounded-[4px] w-full", levels[rand])} />
              })}
            </div>
          </div>
          {/* X axis */}
          <div className="grid grid-cols-7 gap-1.5 mt-2 pl-9">
             {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
               <div key={d} className="text-[9px] text-[#8C8C8C] font-bold text-center">{d}</div>
             ))}
          </div>
        </motion.div>

        {/* Bar Chart */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} delay={0.5} className="bg-[#222222] border border-[#2A2A2A] p-6 rounded-[2rem] lg:col-span-1">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-4 h-4 text-[#A3A3A3]" />
              <h3 className="font-semibold text-sm text-[#E5E5E5]">Flashcards Reviewed By Day</h3>
            </div>
            <button className="text-[#A3A3A3] hover:text-white"><MoreHorizontal className="w-4 h-4" /></button>
          </div>
          
          <div className="h-40 flex items-end justify-between px-2 relative">
             {/* Y axis lines */}
             <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[25, 20, 15, 10, 5, 0].map((v) => (
                  <div key={v} className="flex items-center w-full">
                    <span className="text-[8px] text-[#4D4D4D] w-6 font-bold">{v}%</span>
                    <div className="flex-1 border-b border-[#333] border-dashed" />
                  </div>
                ))}
             </div>
             
             {/* Diagonal stripe def for CSS */}
             <style dangerouslySetInnerHTML={{__html: `
               .stripe-bg {
                 background: repeating-linear-gradient(45deg, rgba(212,255,62,0.1), rgba(212,255,62,0.1) 4px, transparent 4px, transparent 8px);
               }
             `}} />
             
             {/* Bars */}
             <div className="relative z-10 flex justify-between w-full pl-8 pr-2 h-[85%] items-end gap-3">
                {[
                  { d: 'Sat', h: '30%', t: 'stripe-bg border border-[#D4FF3E]/30' },
                  { d: 'Sun', h: '45%', t: 'stripe-bg border border-[#D4FF3E]/30' },
                  { d: 'Mon', h: '35%', t: 'stripe-bg border border-[#D4FF3E]/30' },
                  { d: 'Tue', h: '95%', t: 'bg-[#D4FF3E] shadow-[0_0_25px_rgba(212,255,62,0.4)] relative', isMain: true },
                  { d: 'Wed', h: '60%', t: 'stripe-bg border border-[#D4FF3E]/30' },
                  { d: 'Thu', h: '40%', t: 'stripe-bg border border-[#D4FF3E]/30' },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center w-full h-full justify-end">
                    {bar.isMain && (
                      <div className="absolute -top-8 bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold whitespace-nowrap mb-2 border border-white/10 z-20 tooltip-glow">
                        Oct, 2024
                        <div className="text-[#D4FF3E] text-xs">257,413</div>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4FF3E]/20 text-[#D4FF3E] px-1.5 rounded-[4px] text-[7px]">+60%</div>
                      </div>
                    )}
                    <div className={cn("w-full rounded-full transition-all duration-1000", bar.t)} style={{ height: bar.h }} />
                    <span className="text-[9px] text-[#8C8C8C] mt-2 font-bold">{bar.d}</span>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>

        {/* Sparklines */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} delay={0.6} className="bg-[#222222] border border-[#2A2A2A] p-6 rounded-[2rem] lg:col-span-1">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-sm text-[#E5E5E5]">Top Performing Subjects</h3>
            <button className="text-[#A3A3A3] hover:text-white"><MoreHorizontal className="w-4 h-4" /></button>
          </div>
          
          <div className="space-y-6">
            {[
              { title: 'Mathematics', val: '27%', c: '#D4FF3E' },
              { title: 'Physics', val: '22%', c: '#8B5CF6' },
              { title: 'Literature', val: '88%', c: '#F97316' },
            ].map((sub, i) => (
              <div key={i} className="flex items-center justify-between">
                 <div>
                   <h4 className="text-xs font-bold text-[#E5E5E5]">{sub.title}</h4>
                   <p className="text-[10px] text-[#8C8C8C] font-semibold mt-0.5">Mastered {sub.val}</p>
                 </div>
                 <div className="w-20 h-8">
                   <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                     <path d={`M0,${20 - i*5} C20,${30 - i*10} 40,${5 + i*5} 60,${15} S80,${10 + i*2} 100,5`} fill="none" stroke={sub.c} strokeWidth="1.5" strokeLinecap="round" />
                   </svg>
                 </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Donut Chart */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} delay={0.7} className="bg-[#222222] border border-[#2A2A2A] p-6 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center lg:col-span-1">
          <div className="w-full flex justify-between items-center hidden md:flex absolute top-6 px-6 left-0 pointer-events-none">
            <div className="flex items-center gap-3">
              <PieChart className="w-4 h-4 text-[#A3A3A3]" />
              <h3 className="font-semibold text-sm text-[#E5E5E5]">Top 5 Study Methods</h3>
            </div>
            <button className="text-[#A3A3A3] hover:text-white pointer-events-auto"><MoreHorizontal className="w-4 h-4" /></button>
          </div>
          
          <div className="w-full md:mt-8 flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 shrink-0">
               <ResponsiveContainer width="100%" height="100%">
                 <RechartsPie>
                   <Pie
                     data={[
                       { name: 'Practice', value: 400, color: '#D4FF3E' },
                       { name: 'Reading', value: 300, color: '#F97316' },
                       { name: 'Flashcards', value: 300, color: '#8B5CF6' },
                       { name: 'Videos', value: 200, color: '#10B981' },
                     ]}
                     innerRadius={60}
                     outerRadius={85}
                     paddingAngle={5}
                     dataKey="value"
                     stroke="none"
                   >
                     {
                       [
                         { color: '#D4FF3E' },
                         { color: '#F97316' },
                         { color: '#8B5CF6' },
                         { color: '#262626' }, // Dark bar representing unassigned or other
                       ].map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={entry.color} />
                       ))
                     }
                   </Pie>
                 </RechartsPie>
               </ResponsiveContainer>
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[#8C8C8C] text-sm font-semibold">Leads</span>
               </div>
            </div>
            
            <div className="flex-1 w-full flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-y-3">
                <div className="text-[10px] font-bold text-[#8C8C8C] col-span-2 mb-1">Total Leads</div>
                
                {[
                  { l: 'Direct', v: '74.9%', c: '#A3A3A3' },
                  { l: 'Facebook', v: '58.8%', c: '#F97316' },
                  { l: 'Organic Search', v: '73.7%', c: '#D4FF3E' },
                  { l: 'Instagram', v: '50.6%', c: '#8B5CF6' },
                  { l: 'Paid Search', v: '88.5%', c: '#8B5CF6' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between pr-4">
                    <span className="flex items-center gap-1.5 text-xs text-[#E5E5E5] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: item.c}}></span>
                      {item.l}
                    </span>
                    <span className="text-[10px] font-bold text-[#A3A3A3]">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Waterfall Chart */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} delay={0.8} className="bg-[#222222] border border-[#2A2A2A] p-6 rounded-[2rem] lg:col-span-1">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <CalendarX2 className="w-4 h-4 text-[#A3A3A3]" />
              <h3 className="font-semibold text-sm text-[#E5E5E5]">Reasons For Interruptions</h3>
            </div>
            <button className="text-[#A3A3A3] hover:text-white"><MoreHorizontal className="w-4 h-4" /></button>
          </div>
          
          <div className="h-48 flex items-end justify-between px-2 relative">
             {/* Y axis lines */}
             <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {['34.6%', '29.2%', '15.4%', '24.6%', '12.5%'].map((v) => (
                  <div key={v} className="flex items-center w-full">
                    <span className="text-[8px] text-[#4d4d4d] w-8 font-bold">{v}</span>
                    <div className="flex-1 border-b border-[#333] border-dashed" />
                  </div>
                ))}
             </div>
             
             <style dangerouslySetInnerHTML={{__html: `
               .stripe-purple {
                 background: repeating-linear-gradient(-45deg, rgba(139,92,246,0.3), rgba(139,92,246,0.3) 4px, transparent 4px, transparent 8px);
               }
             `}} />
             
             <div className="relative z-10 flex justify-between w-full pl-10 pr-2 h-full items-end">
                {[
                  { d: 'Sat', blocks: [{h: '55%', b: '0%', solid: true}] },
                  { d: 'Sun', blocks: [{h: '20%', b: '30%', solid: false}, {h: '15%', b: '55%', solid: false}] },
                  { d: 'Mon', blocks: [{h: '15%', b: '20%', solid: false}] },
                  { d: 'Tue', blocks: [{h: '45%', b: '0%', solid: true}, {h: '10%', b: '65%', solid: false}] },
                  { d: 'Wed', blocks: [{h: '15%', b: '45%', solid: false}] },
                  { d: 'Thu', blocks: [{h: '40%', b: '0%', solid: true}] },
                ].map((col, i) => (
                  <div key={i} className="flex flex-col items-center w-8 h-full justify-end relative">
                    <div className="w-full h-full relative mb-2">
                       {col.blocks.map((blk, j) => (
                         <div 
                           key={j} 
                           className={cn("absolute w-full rounded-lg w-full shrink-0", blk.solid ? "bg-[#8B5CF6]" : "stripe-purple")} 
                           style={{ height: blk.h, bottom: blk.b }} 
                         />
                       ))}
                    </div>
                    <span className="text-[9px] text-[#8C8C8C] font-bold mt-1">{col.d}</span>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .tooltip-glow {
          box-shadow: 0 0 20px rgba(212,255,62,0.15);
        }
      `}} />
    </div>
  );
};
