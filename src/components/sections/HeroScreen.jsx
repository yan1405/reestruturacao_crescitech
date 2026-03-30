import { motion } from 'framer-motion';

export default function HeroScreen() {
  return (
    <section className="snap-section bg-ct-primary text-white relative">
      {/* Blobs Escuros: Dois grandes sobrepostos c/ blur(100px) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00B5C5] blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1D3557] blur-[100px] opacity-20 pointer-events-none" />
      
      {/* Grid sobre os blobs */}
      <div className="bg-dots-white" />

      {/* Assinatura periférica */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none text-white">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      {/* Container assimétrico geral */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-full flex flex-col pt-[15vh]">
        
        {/* Etiqueta Numerica Titulo Top Esquerda */}
        <div className="absolute top-[-5vh] left-0 text-xs text-ct-secondary uppercase tracking-widest font-bold">
          00 / 09
        </div>

        {/* Título massivo à esquerda top */}
        <motion.div
          className="w-full md:w-[70%]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="font-display font-extrabold text-[80px] md:text-[140px] leading-none mb-4 tracking-tighter text-white">
            Crescitech
          </h1>
          <div className="w-12 h-1 bg-ct-accent mb-8" />
        </motion.div>

        {/* Subtítulo DM Sans Light, inf-dir, descolado */}
        <motion.div 
          className="absolute bottom-[20vh] right-[10%] max-w-[400px] text-right"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-body font-light text-2xl md:text-3xl text-ct-secondary">
            Uma nova estrutura para um novo momento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
