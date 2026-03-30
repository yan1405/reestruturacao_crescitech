import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Section05Marketing() {
  useEffect(() => {
    // Process Instagram embeds on mount
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
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const cards = [
    { num: '1', title: 'Reformulação do Instagram da Crescitech' },
    { num: '2', title: 'Tipos de anúncio por marca e momento do funil' },
    { num: '3', title: 'Newsletter semanal como ativo de longo prazo' },
    { num: '4', title: 'Página de cases e resultados' },
    { num: '5', title: 'Programa de parceiros e indicadores' }
  ];

  const instagramLinks = [
    "https://www.instagram.com/p/DV6_V4NDJx4/",
    "https://www.instagram.com/p/DVhfazNDNF_/",
    "https://www.instagram.com/p/DVhfajFjFTY/",
    "https://www.instagram.com/reel/DVTpOCWDsoc/",
    "https://www.instagram.com/p/DVNp29cjIyI/"
  ];

  return (
    <section className="snap-section bg-[#1D3557] relative">
      {/* Telas escuras (#1D3557): Blob turq sup-dir, branco inf-esq */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-ct-accent blur-[80px] opacity-15 pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-white blur-[80px] opacity-10 pointer-events-none -translate-x-1/4 translate-y-1/4" />
      
      {/* Ponto sobre blobs */}
      <div className="bg-dots-white" />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-white writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col py-[10vh]">
        
        {/* Superior Título Esquerda Top */}
        <div className="flex flex-col mb-8 w-full md:w-4/5">
          <div className="text-xs text-white/40 uppercase tracking-widest font-bold mb-6">05 / 09</div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-display font-extrabold text-white text-5xl md:text-7xl mb-4 leading-tight tracking-tight">Estratégia de marketing e presença digital</h2>
            <div className="w-12 h-1 bg-ct-accent mb-4" />
            <p className="font-body font-light text-ct-secondary text-2xl">Crescitech educa. FrAiDay resolve.</p>
          </motion.div>
        </div>

        {/* Metade Inferior Direita: Assimétria e Embeds */}
        <div className="w-full flex-1 flex flex-col justify-end space-y-10">
          
          {/* Grid de Cards Menor condensada inf-esq */}
          <motion.div 
            className="flex flex-wrap gap-4 w-full"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {cards.map((card, i) => (
              <motion.div 
                key={i} 
                variants={item}
                className="bg-white/[0.05] border border-white/10 px-5 py-3 rounded-none shadow-sm flex items-center gap-4 flex-[1_1_250px] max-w-sm"
              >
                <div className="text-ct-accent font-display font-bold text-2xl opacity-60">
                  0{card.num}
                </div>
                <h3 className="font-body text-white font-normal text-sm">{card.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Carrossel Instagram */}
          <motion.div 
            className="w-full relative py-4 bg-white/5 backdrop-blur-md rounded-xl p-4 border-l-4 border-ct-accent overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
          >
             <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Campanhas Recentes</h4>
             <div className="flex gap-6 overflow-x-auto pb-4 custom-scrollbar snap-x snap-mandatory">
                {instagramLinks.map((link, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[300px] h-[350px] overflow-hidden bg-black/50 snap-start flex items-center justify-center relative">
                     {/* Scale down the embed to fit gracefully */}
                     <div className="absolute top-0 left-0 w-full h-[800px] scale-[0.6] origin-top-left -ml-4">
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
      </div>
    </section>
  );
}
