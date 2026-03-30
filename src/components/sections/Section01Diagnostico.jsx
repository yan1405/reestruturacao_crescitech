import { motion } from 'framer-motion';

export default function Section01Diagnostico() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="snap-section bg-white relative">
      {/* Telas claras: radial glow turquesa saturado sup-dir */}
      <div 
        className="absolute top-0 right-0 w-[400px] h-[400px] opacity-15 pointer-events-none" 
        style={{ background: 'radial-gradient(circle, #00B5C5 0%, transparent 70%)' }}
      />
      
      {/* Grid sobre o glow */}
      <div className="bg-dots" />

      {/* Assinatura periférica (direita, vertical) */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-[#1D3557] writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col justify-between py-[12vh]">
        
        {/* Linha Top */}
        <div className="flex flex-col mb-auto w-full lg:w-3/4">
          <div className="text-xs text-[#1D3557]/40 uppercase tracking-widest font-bold mb-8">
            01 / 09
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            <motion.h2 variants={item} className="font-display font-extrabold text-[#1D3557] text-6xl md:text-7xl mb-6 leading-[1.1] tracking-tight">
              O diagnóstico atual da Crescitech
            </motion.h2>
            
            <motion.div variants={item} className="w-12 h-1 bg-ct-accent mb-6" />
            
            <motion.p variants={item} className="font-body font-light text-[#A8C0D6] text-3xl">
              Onde estamos e por que precisamos mudar agora.
            </motion.p>
          </motion.div>
        </div>

        {/* Conteúdo DM Sans Reg, condensado e alocado inferiormente (50% inferior) */}
        <motion.div 
          className="w-full mt-16 max-w-7xl self-end"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Uma única marca tentando operar consultoria, educação e tech simultaneamente",
              "Confusão de posicionamento que limita crescimento e dificulta vendas",
              "Mercado de IA para PMEs em expansão acelerada: a janela de posicionamento está aberta agora"
            ].map((text, i) => (
              <motion.div 
                key={i}
                variants={item}
                className="bg-ct-neutral/60 backdrop-blur-sm p-10 shadow-sm border border-gray-100"
              >
                <div className="text-ct-accent font-display font-bold text-xl mb-4 opacity-50">0{i+1}</div>
                <p className="text-[#333333] font-body text-lg leading-relaxed font-normal">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
