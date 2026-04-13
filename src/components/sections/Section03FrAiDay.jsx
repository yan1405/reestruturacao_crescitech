import { motion } from 'framer-motion';

export default function Section03FrAiDay() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="snap-section bg-[#0D0D0D] relative overflow-hidden flex flex-col pt-[5vh] pb-[4vh]">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#F5A800] blur-[120px] opacity-15 pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white blur-[80px] opacity-[0.05] pointer-events-none -translate-x-1/4 translate-y-1/4" />
      <div className="bg-dots-white" />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-[#A8C0D6] writing-vertical-rl rotate-180 uppercase tracking-widest font-montserrat z-20 pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col px-[5%]">
        
        {/* Top: Header e Título (Pacifico) */}
        <div className="flex flex-col w-full shrink-0">
          <div className="text-xs text-[#F5A800]/50 uppercase tracking-widest font-montserrat font-bold mb-3">03 / 09</div>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="font-script text-[#F5A800] text-[80px] md:text-[120px] xl:text-[140px] leading-none mb-4 -ml-2">frAIday</h2>
            <div className="w-12 h-1 bg-[#F5A800] mb-3" />
            <p className="font-montserrat font-light text-[#A8C0D6] text-xl xl:text-2xl">Identidade e posicionamento B2B.</p>
          </motion.div>
        </div>

        {/* 3 Colunas: Texto, Texto, Fake Site + Youtube Placeholder */}
        <motion.div 
          className="w-full mt-auto flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-h-[50vh] min-h-[40vh]"
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
        >
          <div className="flex flex-col gap-6">
             <motion.div variants={item} className="bg-[#111111]/90 border border-[#F5A800]/20 p-6 flex flex-col h-full shadow-2xl">
                <div className="font-montserrat text-[13px] text-[#F5A800] font-bold tracking-widest uppercase mb-3 border-b border-[#F5A800]/20 pb-2 w-max">Proposta</div>
                <p className="font-lato text-white font-normal text-[14px] leading-relaxed">SaaS focado 100% em IA para PMEs, sem as amarras da marca institucional consultiva. Foco total em execução.</p>
             </motion.div>
          </div>

          <div className="flex flex-col gap-6">
             <motion.div variants={item} className="bg-[#111111]/90 border border-[#F5A800]/20 p-6 flex flex-col h-full shadow-2xl">
                <div className="font-montserrat text-[13px] text-[#F5A800] font-bold tracking-widest uppercase mb-3 border-b border-[#F5A800]/20 pb-2 w-max">Produtos</div>
                <p className="font-lato text-white font-normal text-[14px] leading-relaxed">Implantação de I.A e automações n8n conectadas ao WhatsApp e CRMs de mercado. Implementação de ecossistemas.</p>
             </motion.div>
          </div>

          {/* Fake Site Panel with Youtube Placeholder */}
          <motion.div variants={item} className="bg-[#1D1D1D] rounded-xl overflow-hidden shadow-2xl border border-white/5 flex flex-col h-full relative group">
             {/* Header Mockup */}
             <div className="bg-[#111] px-4 py-2 flex items-center gap-2 shrink-0">
                <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-500"/><div className="w-2.5 h-2.5 rounded-full bg-green-500"/></div>
                <div className="mx-auto bg-white/5 rounded-full px-4 py-0.5 max-w-[150px] overflow-hidden flex items-center">
                  <span className="text-[11px] text-white/40 font-montserrat truncate">fraiday.tech/mvp</span>
                </div>
             </div>
             
             {/* Content / Youtube Placeholder Strict format */}
             <div className="bg-[#FAFAFA] flex-1 flex flex-col items-center justify-center p-3 w-full">
                 <h3 className="font-impact text-[#0D0D0D] text-[18px] uppercase tracking-wide mb-1 text-center w-full">Landing Page Oficial</h3>
                 <p className="font-lato text-[13px] text-gray-500 mb-2 text-center">Video de apresentação da marca PME</p>
                 
                 <div className="w-full flex-1 max-h-[260px] bg-white rounded flex items-center justify-center overflow-hidden">
                    <div style={{
                      width: '100%',
                      height: '240px',
                      background: '#1a1a2e',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Lato', fontSize: '14px' }}>
                        Vídeo de referência — link a inserir
                      </span>
                    </div>
                 </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
