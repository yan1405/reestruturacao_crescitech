import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';

export default function Section09Roadmap() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };
  const item = {
    hidden: { x: -40, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const c_yan = <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#FF6B35]/20 text-[#FF6B35] text-[10px] uppercase font-bold shrink-0 shadow-sm"><User size={10} /> Yan</span>;
  const c_joao = <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#00B5C5]/20 text-[#00B5C5] text-[10px] uppercase font-bold shrink-0 shadow-sm"><User size={10} /> João</span>;
  const c_ambos = <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 text-white/80 text-[10px] uppercase font-bold shrink-0 shadow-sm"><Users size={10} /> Ambos</span>;

  return (
    <section className="snap-section bg-[#1D3557] relative p-0 flex flex-col pt-[5vh] pb-[6vh]">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-ct-accent blur-[80px] opacity-[0.12] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#F5A800] blur-[80px] opacity-[0.08] pointer-events-none -translate-x-1/4 translate-y-1/4" />
      
      <div className="bg-dots-white" />

      {/* Top: 20vh Title */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[20vh] flex flex-col justify-end px-[5%] shrink-0 pb-4">
          <div className="text-xs text-white/40 uppercase tracking-widest font-bold mb-2">09 / 09</div>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-display font-extrabold text-white text-5xl md:text-6xl mb-3 leading-tight tracking-tight">Próximos passos</h2>
            <div className="w-12 h-1 bg-ct-accent" />
          </motion.div>
      </div>

      {/* 3 Columns Timeline: 80vh minus footer approx */}
      <div className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto min-h-[60vh] flex flex-col">
          <motion.div 
            className="w-full flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 px-[5%] py-4"
            variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
             {[
               { title: "0 a 30 dias", items: [
                 { t: "Validação estrutural", b: "Aprovação do layout Crescitech/FrAiDay", o: c_ambos },
                 { t: "Identidade Visual FrAiDay", b: "Paleta, brand kit e design system", o: c_yan },
                 { t: "Reestruturação do IG", b: "Arquivo e novas postagens organizadas", o: c_joao }
               ]},
               { title: "30 a 90 dias", items: [
                 { t: "Lançamento do Funil", b: "Campanha captura de leads gratuita no ar", o: c_ambos },
                 { t: "Programa Advocacia Ativo", b: "Prospecção fria e inbound no jurídico", o: c_joao },
                 { t: "Set de Automações", b: "Onboarding automatizado vivo via n8n", o: c_yan }
               ]},
               { title: "90+ dias", items: [
                 { t: "SaaS Proprietário beta", b: "Lançamento de produto para base PME", o: c_yan },
                 { t: "Programa Parceiros", b: "Comissionamento para consultores B2B", o: c_joao },
                 { t: "Escala Paid Media G3", b: "Aceleração total de tráfego de vendas", o: c_ambos }
               ]}
             ].map((col, idx) => (
                <div key={idx} className="flex flex-col bg-[#1D3557]/40 border border-[#00B5C5]/20 p-8 rounded-xl shadow-2xl h-full backdrop-blur-md relative overflow-hidden shrink-0">
                   {/* Linha topo */}
                   <div className="w-full absolute top-0 left-0 border-t-[5px] border-[#00B5C5]" />
                   <h3 className="font-display font-extrabold text-[#00B5C5] text-3xl mb-8 uppercase tracking-widest">{col.title}</h3>
                   
                   <div className="flex flex-col gap-8 flex-1">
                     {col.items.map((it, lid) => (
                       <motion.div key={lid} variants={item} className="flex flex-col w-full relative">
                         <div className="flex items-start justify-between w-full mb-1">
                           <span className="font-display font-extrabold text-white text-[16px] xl:text-[18px] leading-tight flex-1 pr-2">{it.t}</span>
                           {it.o}
                         </div>
                         <span className="text-[#A8C0D6] text-[14px] xl:text-[15px] font-body leading-relaxed">{it.b}</span>
                         {lid !== col.items.length -1 && <div className="w-[10%] border-b border-white/10 mt-6" />}
                       </motion.div>
                     ))}
                   </div>
                </div>
             ))}
          </motion.div>
          
          {/* Footer Centralizado na base */}
          <div className="w-full mt-auto shrink-0 mb-[2vh]">
            <motion.div className="font-body text-center text-[10px] text-white/30 tracking-[0.3em] font-bold uppercase w-full"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }} viewport={{ once: true }}>
              Crescitech × FrAiDay 2026
            </motion.div>
          </div>
      </div>
    </section>
  );
}
