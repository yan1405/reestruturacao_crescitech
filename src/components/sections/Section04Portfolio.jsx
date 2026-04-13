import { motion } from 'framer-motion';
import { Target, CheckCircle2, FileVideo, TrendingUp, Settings, Bot, Webhook, Briefcase } from 'lucide-react';

export default function Section04Portfolio() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemLists = {
    hidden: { y: 15, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  const crescitechItems = [
    { icon: <Briefcase size={16} />, text: "Consultoria estratégica corporativa" },
    { icon: <TrendingUp size={16} />, text: "Educação de IA para C-Level" },
    { icon: <Target size={16} />, text: "IA para bancas advocatícias" },
    { icon: <Settings size={16} />, text: "Diagnóstico de maturidade" }
  ];

  const fraidayItems = [
    { icon: <Bot size={16} />, text: "SaaS de IA proprietário" },
    { icon: <Webhook size={16} />, text: "Automações via n8n e WhatsApp" },
    { icon: <FileVideo size={16} />, text: "AI First implementation" },
    { icon: <CheckCircle2 size={16} />, text: "Aceleração tech B2B" }
  ];

  return (
    <section className="snap-section bg-white relative p-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[50vh] flex">
         <div className="w-1/2 h-full bg-[#1D3557] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-ct-accent blur-[80px] opacity-[0.08] pointer-events-none translate-x-1/4 -translate-y-1/4" />
           <div className="bg-dots-white" />
         </div>
         <div className="w-1/2 h-full bg-[#F5A800] relative overflow-hidden">
           <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0D0D0D] blur-[80px] opacity-[0.05] pointer-events-none -translate-x-1/4 -translate-y-1/4" />
         </div>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-[#1D3557] writing-vertical-rl rotate-180 uppercase tracking-widest font-montserrat z-20 pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>

      <div className="relative z-10 w-full h-full flex flex-col pt-[5vh] pb-[4vh]">
        <div className="text-center w-full min-h-[5vh] mb-4">
            <span className="font-montserrat text-[10px] font-bold uppercase tracking-widest bg-[#1D3557] px-4 py-1.5 rounded-full border border-[#00B5C5]/30 text-white/90">04 / 09 • Portfólio de Produtos</span>
        </div>

        {/* TOP: Table Panels with horizontal slide animation */}
        <div className="w-full max-w-[1400px] mx-auto flex h-[40vh] gap-1 px-[5%] overflow-hidden">
            
            {/* Crescitech Panel (Slide from Right x:-60) */}
            <motion.div 
               className="w-1/2 h-full flex flex-col pt-6 pr-12 xl:pr-16 text-white border-r border-[#00B5C5]/20 justify-center"
               initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            >
               <h3 className="font-impact text-4xl xl:text-5xl mb-6 text-white tracking-normal">Crescitech</h3>
               <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4 font-lato">
                 {crescitechItems.map((obj, i) => (
                    <motion.li key={i} variants={itemLists} className="flex items-center gap-4">
                      <div className="bg-[#00B5C5]/20 p-2 rounded text-[#00B5C5]">{obj.icon}</div>
                      <span className="text-[14px] xl:text-[16px] font-medium leading-tight text-white">{obj.text}</span>
                    </motion.li>
                 ))}
               </motion.ul>
            </motion.div>

            {/* FrAiDay Panel (Slide from Left x: 60) */}
            <motion.div 
               className="w-1/2 h-full flex flex-col pt-6 pl-12 xl:pl-16 text-[#0D0D0D] justify-center"
               initial={{ x: 60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            >
               <h3 className="font-impact text-[#0D0D0D] text-4xl xl:text-5xl mb-6 tracking-normal">FrAiDay</h3>
               <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4 font-lato">
                 {fraidayItems.map((obj, i) => (
                    <motion.li key={i} variants={itemLists} className="flex items-center gap-4">
                      <div className="bg-[#0D0D0D]/10 p-2 rounded text-[#0D0D0D]">{obj.icon}</div>
                      <span className="text-[14px] xl:text-[16px] font-bold leading-tight text-[#0D0D0D]">{obj.text}</span>
                    </motion.li>
                 ))}
               </motion.ul>
            </motion.div>
        </div>

        {/* BOTTOM: Mockups */}
        <div className="w-full max-w-[1400px] mx-auto flex flex-1 gap-12 px-[5%] mt-auto items-end pb-4 pt-10 relative z-20">
            {/* Mockup Maturidade */}
            <motion.div 
               className="w-1/2 bg-white rounded-xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] border border-gray-200 flex flex-col h-[90%] overflow-hidden"
               initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
            >
               <div className="bg-[#1D3557] px-4 py-3 flex items-center justify-between shrink-0">
                 <span className="font-montserrat text-white font-bold text-[11px] uppercase tracking-wider">Diagnóstico Maturidade</span>
                 <Settings size={14} className="text-[#00B5C5]" />
               </div>
               <div className="p-6 flex-1 flex flex-col overflow-hidden">
                  <div className="w-full h-8 bg-gray-200 rounded-full mb-6 overflow-hidden flex shrink-0">
                     <div className="h-full bg-[#00B5C5] w-[45%] flex items-center justify-center text-[10px] text-white font-montserrat font-bold tracking-widest">45%</div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 flex-1 overflow-auto custom-scrollbar pr-2">
                     {["Cultura B2B", "Infra de Dados", "Automação", "Processos"].map((lbl, idx) => (
                        <div key={idx} className="flex items-center justify-between font-montserrat text-[12px] text-gray-700 shrink-0">
                          <span className="font-bold min-w-[110px]">{lbl}</span>
                          <div className="flex-1 ml-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                             <div className="h-full bg-[#1D3557]" style={{ width: `${Math.max(30, Math.random() * 60 + 20)}%` }}></div>
                          </div>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>

            {/* Kanban */}
            <motion.div 
               className="w-1/2 bg-white/95 rounded-xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] border border-gray-200 flex flex-col h-[90%] overflow-hidden backdrop-blur-xl"
               initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }}
            >
               <div className="bg-[#F5A800] px-4 py-3 flex items-center justify-between shrink-0">
                 <span className="font-montserrat text-[#0D0D0D] font-bold text-[11px] uppercase tracking-wider">Pipeline FollowUp</span>
                 <Briefcase size={14} className="text-[#0D0D0D]" />
               </div>
               <div className="p-4 flex-1 flex gap-3 overflow-x-auto custom-scrollbar items-start">
                   {["Prospecção", "Negociação", "Fechado"].map((col, cidx) => (
                      <div key={cidx} className="bg-gray-100 flex-1 rounded-lg border border-gray-200 p-3 flex flex-col min-w-[120px] max-h-full overflow-y-auto custom-scrollbar">
                         <span className="font-montserrat text-[10px] font-bold text-gray-800 uppercase mb-3 text-center tracking-widest">{col}</span>
                         {/* Card genérico 1 */}
                         <div className="bg-white p-3 rounded mb-2 shadow-sm border border-gray-100">
                            <div className="w-1/2 h-2 bg-[#F5A800]/80 rounded mb-3"></div>
                            <div className="w-full h-1.5 bg-gray-200 rounded mb-1.5"></div>
                            <div className="w-3/4 h-1.5 bg-gray-200 rounded"></div>
                         </div>
                         {cidx !== 2 && (
                            <div className="bg-white p-3 rounded shadow-sm border border-gray-100 mb-2">
                               <div className="w-2/3 h-2 bg-[#1D3557]/80 rounded mb-3"></div>
                               <div className="w-full h-1.5 bg-gray-200 rounded"></div>
                            </div>
                         )}
                      </div>
                   ))}
               </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
