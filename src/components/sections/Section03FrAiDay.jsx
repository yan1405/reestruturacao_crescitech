import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Section03FrAiDay() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="snap-section bg-[#0D0D0D] relative overflow-hidden transition-colors duration-1000">

      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#F5A800] blur-[120px] opacity-15 pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white blur-[80px] opacity-[0.08] pointer-events-none -translate-x-1/4 translate-y-1/4" />
      <div className="bg-dots-white" />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-[#A8C0D6] writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col py-[10vh]">
        
        {/* Título e Grid de 3 Colunas Centralizados no Viewport */}
        <div className="w-full flex-1 flex items-center mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full h-full lg:h-auto items-stretch">
            
            {/* Coluna 1: Logo e Claim */}
            <div className="flex flex-col justify-center border-l-4 border-[#F5A800] pl-6 h-full min-h-[220px]">
              <div className="text-xs text-[#F5A800]/50 uppercase tracking-widest font-bold mb-4">03 / 09</div>
              <motion.h2 
                className="font-script text-[#F5A800] text-7xl md:text-[90px] leading-none mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                frAIday
              </motion.h2>
              <motion.p 
                className="font-body font-light text-[#A8C0D6] text-xl leading-relaxed"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
              >
                Sem enrolação. IA empacotada em produtos e automações prontas.
              </motion.p>
            </div>

            {/* Coluna 2: Produtos */}
            <motion.div 
               className="flex flex-col justify-center bg-white/[0.03] p-8 border border-white/10"
               variants={container}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
            >
               <h3 className="font-display font-extrabold text-white text-2xl mb-6">O que fazemos</h3>
               <ul className="space-y-4">
                 {[
                   "SaaS proprietário de IA",
                   "Automações B2B (n8n, WhatsApp)",
                   "Desenvolvimento de sistemas & Sites"
                 ].map((prod, i) => (
                   <motion.li key={i} variants={item} className="flex items-center gap-3 text-[#F2F2F2] font-body text-[15px]">
                     <ArrowRight size={16} className="text-[#F5A800]" />
                     <span>{prod}</span>
                   </motion.li>
                 ))}
               </ul>
            </motion.div>

            {/* Coluna 3: Mockup Site React Puro */}
            <motion.div 
              className="relative rounded-t-xl overflow-hidden bg-[#1A1A1A] border border-[#333] shadow-2xl flex flex-col hidden md:flex min-h-[250px]"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Browser Header Fake */}
              <div className="h-8 bg-[#2A2A2A] flex items-center px-4 gap-2 w-full">
                 <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                 <div className="ml-4 px-2 py-0.5 bg-[#111] rounded text-[9px] text-[#888] font-mono flex-1 text-center truncate">fraiday.com.br</div>
                 <div className="w-8"></div>
              </div>
              
              {/* Fake Hero Page */}
              <div className="flex-1 flex flex-col justify-center items-center p-6 bg-gradient-to-b from-[#111] to-[#0A0A0A] relative">
                {/* Yellow overlay blob inside mockup */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A800] blur-[40px] opacity-10 pointer-events-none" />
                <h3 className="font-script text-[#F5A800] text-4xl mb-3">frAIday</h3>
                <p className="font-display font-bold text-white text-[12px] uppercase tracking-widest text-center mb-6">Automações reais. Para negócios reais.</p>
                
                <button className="bg-[#F5A800] text-[#0D0D0D] px-6 py-2 rounded-full font-body font-bold text-[11px] uppercase tracking-wider hover:bg-white transition-colors">
                  Ver Soluções
                </button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Youtube Player Full width bottom */}
        <motion.div 
          className="w-full h-[240px] mt-auto relative rounded-lg overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-4 xl:max-w-4xl xl:mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Se houver vídeo depois, mudar src. Por eqto placeholder */}
          <div className="w-full h-full bg-[#050505] flex flex-col items-center justify-center relative shadow-inner">
             <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3">
               <div className="w-0 h-0 border-t-8 border-l-[12px] border-b-8 border-transparent border-l-white ml-1"></div>
             </div>
             <p className="font-body font-bold text-white/50 text-[13px] uppercase tracking-widest">Referência de Branding — Play Video</p>
             <p className="font-body text-white/30 text-[11px] mt-1">[Link do youtube a inserir]</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
