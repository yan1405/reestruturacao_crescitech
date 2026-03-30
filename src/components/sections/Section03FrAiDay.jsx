import { motion } from 'framer-motion';

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

      {/* Blobs Escuros Modernos (#0D0D0D spec): Blob amarel sup-dir (blur 120, op15), Blob branco inf-esq (op8) */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#F5A800] blur-[120px] opacity-15 pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white blur-[80px] opacity-[0.08] pointer-events-none -translate-x-1/4 translate-y-1/4" />

      {/* Grid de pontos com cor branca */}
      <div className="bg-dots-white" />

      {/* Assinatura periférica vertical */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-[#A8C0D6] writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col justify-between py-[12vh]">
        
        {/* Título Pacifico Alinhado Esquerda */}
        <div className="flex flex-col mb-auto w-full lg:w-3/4">
          <div className="text-xs text-[#F5A800]/50 uppercase tracking-widest font-bold mb-8">03 / 09</div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-script text-[#F5A800] text-[100px] md:text-[140px] leading-none mb-6 tracking-wide">frAIday</h2>
            
            <div className="w-12 h-1 bg-[#F5A800] mb-6" />
            
            <p className="font-body font-light text-[#A8C0D6] text-3xl">Identidade e posicionamento.</p>
          </motion.div>
        </div>

        {/* Três cards na faixa inferior assimétrica direita (colunas condensadas) */}
        <motion.div 
          className="w-full mt-16 max-w-6xl self-end grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { label: 'Proposta', text: 'Sem teoria, sem enrolação. IA aplicada em produtos, automações e sistemas que geram resultado direto para PMEs.' },
            { label: 'Produtos', text: 'SaaS de IA, automações n8n/WhatsApp e desenvolvimento de sites e sistemas.' },
            { label: 'Público', text: 'PMEs que querem ferramentas e resultados, não necessariamente educação.' }
          ].map((card, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="bg-[#111111]/90 border text-left border-[#F5A800]/20 p-10 hover:border-[#F5A800]/60 transition-colors shadow-2xl relative"
            >
              <div className="text-xs text-[#F5A800] font-bold tracking-widest uppercase mb-4 opacity-70 border-b border-[#F5A800]/20 pb-2 inline-block">
                {card.label}
              </div>
              <p className="text-white font-body font-normal text-lg leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
