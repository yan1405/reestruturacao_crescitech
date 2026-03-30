import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Section06Funil() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }
  };

  return (
    <section className="snap-section bg-white relative">
      {/* Fundo Claro: Glow turq sup-esq */}
      <div 
        className="absolute top-0 left-0 w-[400px] h-[400px] opacity-15 pointer-events-none -translate-x-1/4 -translate-y-1/4" 
        style={{ background: 'radial-gradient(circle, #00B5C5 0%, transparent 70%)' }}
      />
      <div className="bg-dots" />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-[#1D3557] writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col py-[10vh]">
        
        {/* Título Esquerda Top */}
        <div className="w-full mb-10">
          <div className="text-xs text-[#1D3557]/40 uppercase tracking-widest font-bold mb-6">06 / 09</div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-display font-extrabold text-[#1D3557] text-6xl md:text-7xl mb-6 leading-tight tracking-tight">Funil de aquisição gratuito</h2>
            <div className="w-12 h-1 bg-ct-accent mb-6" />
            <p className="font-body font-light text-[#A8C0D6] text-3xl">Leads qualificados sem custo de mídia.</p>
          </motion.div>
        </div>

        {/* Faixa Intermediaria Asimetrica Direita com Setas SVG */}
        <motion.div 
          className="flex flex-col lg:flex-row relative items-stretch gap-6 lg:gap-14 ml-auto w-full lg:w-[90%] mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Seta SVG 1 */}
          <motion.div className="hidden lg:block absolute top-[50%] left-[29%] w-[8%] h-8 -translate-y-1/2 z-0" variants={item} custom={1}>
            <svg viewBox="0 0 100 20" className="w-full h-full text-ct-accent/50 stroke-current" fill="none">
              <motion.path d="M0,10 L90,10 M80,2 L90,10 L80,18" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" variants={draw}/>
            </svg>
          </motion.div>
          {/* Seta SVG 2 */}
          <motion.div className="hidden lg:block absolute top-[50%] left-[63%] w-[8%] h-8 -translate-y-1/2 z-0" variants={item} custom={2}>
             <svg viewBox="0 0 100 20" className="w-full h-full text-ct-accent/50 stroke-current" fill="none">
              <motion.path d="M0,10 L90,10 M80,2 L90,10 L80,18" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" variants={draw}/>
            </svg>
          </motion.div>

          {[
            { step: '1', text: '3 dias de conteúdo gratuito sobre IA entregue diariamente.' },
            { step: '2', text: 'Curso gratuito de Vibe Coding. Quem consome os 3 dias recebe acesso ao curso.' },
            { step: '3', text: 'Quem conclui o curso de Vibe Coding entra no ecossistema da Crescitech e recebe acesso aos cursos de educação em IA.' }
          ].map((card, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="flex-1 bg-white border border-gray-100 shadow-xl p-8 rounded-none relative z-10"
            >
              <div className="font-display font-extrabold text-7xl text-ct-accent/20 mb-4 tracking-tighter absolute top-2 right-4">0{card.step}</div>
              <p className="font-body font-normal text-[#1E293B] text-xl leading-relaxed mt-10 relative z-10">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 3 Embeds Lado a Lado na inf */}
        <motion.div 
          className="w-full bg-[#FAFAFA] border-t border-gray-100 p-8 flex-1 overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
           <h4 className="text-[#A8C0D6] text-xs font-bold uppercase tracking-widest mb-6 border-l-[3px] border-ct-accent pl-3">Materiais da FASE de Funil</h4>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "https://www.instagram.com/reel/DV1RUasEQ_C/",
                "https://www.instagram.com/reel/DVzNShHj_8e/",
                "https://www.instagram.com/p/DVtuV2Nicyq/"
              ].map((link, idx) => (
                <div key={idx} className="h-[250px] bg-black/5 overflow-hidden flex items-center justify-center relative shadow-inner">
                    <div className="absolute top-0 left-0 w-full h-[800px] scale-[0.45] origin-top-left -ml-2 -mt-2">
                      <blockquote 
                        className="instagram-media" 
                        data-instgrm-permalink={link} 
                        data-instgrm-version="14"
                        style={{ background: '#FFF', border: 0, margin: 1, maxWidth: '540px', minWidth: '326px', padding: 0, width: '99%' }}
                      />
                    </div>
                </div>
              ))}
           </div>
        </motion.div>

      </div>
    </section>
  );
}
