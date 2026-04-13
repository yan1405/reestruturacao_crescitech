import { motion } from 'framer-motion';
import { MessageCircle, Send, FileEdit, Database, Calendar, Briefcase, Plus, MoreHorizontal } from 'lucide-react';

export default function Section08Onboarding() {
  const flowContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  
  const flowItem = {
    hidden: { x: -30, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const steps = [
    { icon: <MessageCircle size={24}/>, t: "Contato via WP", desc: "Lead chama" },
    { icon: <Send size={24}/>, t: "Bot Atende", desc: "Qualificação" },
    { icon: <FileEdit size={24}/>, t: "Typeform", desc: "Coleta dados" },
    { icon: <Database size={24}/>, t: "CRM Automático", desc: "Lead criado" },
    { icon: <Calendar size={24}/>, t: "Calendly Flow", desc: "Agendamento" },
    { icon: <Briefcase size={24}/>, t: "Kickoff", desc: "Sessão 1" }
  ];

  return (
    <section className="snap-section bg-[#111827] relative p-0 flex flex-col pt-[5vh] pb-[6vh]">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #00B5C5 0%, transparent 70%)' }} />
      <div className="bg-dots-white" />

      {/* Top: 15vh Title */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[15vh] flex flex-col justify-end px-[5%] pb-4 shrink-0">
        <div className="text-xs text-[#A8C0D6] uppercase tracking-widest font-montserrat font-bold mb-2">08 / 09</div>
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
          <h2 className="font-impact text-white text-4xl md:text-5xl leading-tight">Onboarding automatizado</h2>
          <div className="w-12 h-1 bg-ct-accent mt-2" />
        </motion.div>
      </div>

      {/* Mid: 35vh Flow Diagram */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[35vh] flex px-[5%] items-center justify-center shrink-0">
         <motion.div 
           className="w-full flex justify-between items-center relative py-6"
           variants={flowContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
         >
            <div className="absolute inset-x-[5%] top-[30%] h-1 bg-white/5 z-0 flex items-center">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#00B5C5] to-[#1D3557] w-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                  viewport={{ once: true }}
                />
            </div>
            
            {steps.map((st, i) => (
              <motion.div key={i} variants={flowItem} className="flex flex-col items-center relative z-10 px-2 w-[16%]">
                 <div className="w-16 h-16 rounded-full bg-[#1e293b] text-[#00B5C5] shadow-xl border border-white/10 flex items-center justify-center mb-4 transition-transform hover:scale-110">
                    {st.icon}
                 </div>
                 <h4 className="font-bold font-montserrat text-[14px] text-white text-center leading-tight mb-1 h-8">{st.t}</h4>
                 <p className="text-[12px] font-lato text-gray-400 text-center w-full">{st.desc}</p>
              </motion.div>
            ))}
         </motion.div>
      </div>

      {/* Bot: 45vh Kanban Mockup Detalhado */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex-1 px-[5%] pt-2 min-h-[40vh] shrink-0 overflow-hidden flex flex-col">
         <motion.div 
            className="w-full h-full bg-[#1e293b]/50 rounded-t-xl shadow-2xl border border-white/5 flex flex-col overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
         >
            <div className="bg-[#F5A800] px-6 py-3 flex items-center justify-between shrink-0">
               <span className="text-[#0D0D0D] font-bold font-montserrat text-[13px] uppercase tracking-widest flex items-center gap-2">
                 <Briefcase size={16}/> Ferramenta de FollowUp Interna
               </span>
               <div className="bg-[#0D0D0D] text-white px-3 py-1.5 rounded text-[11px] font-bold font-montserrat flex items-center gap-1 shadow-sm uppercase tracking-wider">
                  <Plus size={12}/> Lead Novo
               </div>
            </div>

            <div className="p-6 flex-1 flex gap-5 overflow-x-auto custom-scrollbar">
               {[
                 { title: "Prospecção", bg: "bg-[#0e2a47]", text: "text-[#00B5C5]", cards: [ { n: "Empresa XPTO", v: "R$ 15k", m: "Ligar amanhã" }, { n: "Consultoria AL", v: "R$ 8k", m: "Aguardando..." } ] },
                 { title: "Negociação", bg: "bg-[#45300a]", text: "text-[#F5A800]", cards: [ { n: "Logística SA", v: "R$ 42k", m: "Contrato na mão" } ] },
                 { title: "Ativo/Cliente", bg: "bg-[#0f3d24]", text: "text-[#10b981]", cards: [ { n: "Banca Novaes", v: "R$ 22k", m: "Módulo 2 rodando" } ] },
                 { title: "Concluído", bg: "bg-gray-800", text: "text-gray-300", cards: [] }
               ].map((col, c) => (
                  <div key={c} className="bg-[#0f172a] flex-1 rounded-xl shadow-inner border border-white/5 p-3 min-w-[240px] max-w-[300px] flex flex-col h-full overflow-hidden shrink-0">
                     <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2 px-1">
                       <span className={`text-[12px] font-bold font-montserrat px-2.5 py-1 rounded-md ${col.bg} ${col.text} uppercase tracking-wider`}>{col.title} {(col.cards.length > 0) && `(${col.cards.length})`}</span>
                       <MoreHorizontal size={16} className="text-gray-500"/>
                     </div>

                     <div className="flex flex-col gap-3 overflow-y-auto custom-scrollbar px-1">
                        {col.cards.map((card, cd) => (
                           <div key={cd} className="bg-[#1e293b] p-3.5 rounded-lg border border-white/5 flex flex-col hover:border-[#F5A800]/50 transition-colors cursor-pointer group">
                              <span className="font-bold font-montserrat text-[14px] text-white mb-1 group-hover:text-[#F5A800] transition-colors">{card.n}</span>
                              <span className="text-[#00B5C5] font-extrabold font-montserrat text-[13px] mb-3">{card.v}</span>
                              <div className="flex items-center gap-1.5 font-lato text-[11px] font-semibold text-gray-400 bg-white/5 px-2 py-1.5 rounded w-max border border-white/5">
                                <Calendar size={12} className="mb-0.5 text-gray-500"/> {card.m}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </motion.div>

      </div>
    </section>
  );
}
