import { motion } from 'framer-motion';

export default function Section04Portfolio() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { y: 15, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const crescitechItems = [
    "Consultoria estratégica em IA para PMEs",
    "Programa de educação para executivos",
    "Programa especializado para escritórios de advocacia",
    "Diagnóstico público de maturidade em IA"
  ];

  const fraidayItems = [
    "Desenvolvimento de sites e sistemas",
    "Automações via n8n e WhatsApp",
    "SaaS (produto a definir)",
    "Ferramenta de Follow Up",
    "Kit de implantação jurídico",
    "Serviços de AI First para empresas"
  ];

  return (
    <section className="snap-section bg-white relative">
      {/* Telas claras: glow radial 20% a 30% da quina, opacidade 15% */}
      {/* Glow turquesa no canto inferior esquerdo */}
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-15 pointer-events-none -translate-x-1/4 translate-y-1/4" 
        style={{ background: 'radial-gradient(circle, #00B5C5 0%, transparent 70%)' }}
      />
      
      {/* Grid de pontos turquesa */}
      <div className="bg-dots" />

      {/* Assinatura periférica vertical */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-[#1D3557] writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col pt-[10vh] pb-[5vh]">
        
        {/* Título à esquerda top ocupando borda a borda */}
        <div className="w-full mb-auto relative">
          <div className="text-xs text-[#1D3557]/40 uppercase tracking-widest font-bold mb-6">04 / 09</div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-display font-extrabold text-[#1D3557] text-6xl md:text-[80px] leading-none mb-6 tracking-tighter w-full">
              Portfólio completo de<br/> produtos e ofertas
            </h2>
            
            <div className="w-12 h-1 bg-ct-accent mb-6" />
            
            <p className="font-body font-light text-[#A8C0D6] text-3xl">
              Cada produto com dono claro, público definido e modelo de entrega.
            </p>
          </motion.div>
        </div>

        {/* Duas colunas na faixa inferior (aprox 70% ocupação em telas grandes) */}
        <motion.div 
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 bg-white/50 backdrop-blur-sm z-10 p-8 shadow-2xl border border-gray-100/50"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Coluna Crescitech */}
          <div className="flex flex-col">
             <div className="pb-4 mb-4 border-b-2 border-[#1D3557]">
               <h3 className="font-display font-extrabold text-[#1D3557] text-4xl">Crescitech</h3>
             </div>
             <motion.ul variants={container} className="flex flex-col gap-4">
                {crescitechItems.map((text, i) => (
                  <motion.li key={i} variants={item} className="flex items-start gap-4">
                    <span className="text-ct-accent text-3xl leading-[20px] pt-1">•</span>
                    <span className="font-body font-normal text-xl text-[#333333] leading-tight">{text}</span>
                  </motion.li>
                ))}
             </motion.ul>
          </div>

          {/* Coluna FrAiDay */}
          <div className="flex flex-col">
             <div className="pb-4 mb-4 border-b-2 border-[#F5A800]">
               <h3 className="font-display font-extrabold text-[#F5A800] text-4xl">FrAiDay</h3>
             </div>
             <motion.ul variants={container} className="flex flex-col gap-4">
                {fraidayItems.map((text, i) => (
                  <motion.li key={i} variants={item} className="flex items-start gap-4">
                    <span className="text-[#F5A800] text-xl font-bold pt-1 leading-[20px]">→</span>
                    <span className="font-body font-normal text-xl text-[#333333] leading-tight">{text}</span>
                  </motion.li>
                ))}
             </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
