import { motion } from 'framer-motion';

export default function Section07Advocacia() {
  return (
    <section className="snap-section bg-[#1D3557] relative">
      {/* Fundos #1D3557. Blob laranja sup-dir, turquesa inf-esq */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#FF6B35] blur-[80px] opacity-15 pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-ct-accent blur-[80px] opacity-15 pointer-events-none -translate-x-1/4 translate-y-1/4" />
      
      <div className="bg-dots-white" />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-white writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col justify-between py-[12vh]">
        
        {/* Título Esquerda Top */}
        <div className="flex flex-col text-left mb-auto w-full md:w-3/4">
          <div className="text-xs text-white/40 uppercase tracking-widest font-bold mb-6">07 / 09</div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-display font-extrabold text-white text-6xl md:text-7xl mb-6 leading-tight tracking-tight">Programa para escritórios de advocacia</h2>
            <div className="w-12 h-1 bg-ct-accent mb-6" />
            <p className="font-body font-light text-ct-secondary text-3xl">O segmento mais resistente é o de maior oportunidade.</p>
          </motion.div>
        </div>

        {/* Blocos Assimétricos (Prob 40% Dir, Soluc 55% Esq ou vice versa -> 40%E e 55%D) */}
        <div className="flex flex-col md:flex-row items-end gap-10 mt-16 w-full relative">
          
          {/* O Problema - 40% Esquerda Flutuante */}
          <motion.div 
            className="md:w-[40%] border-l-[6px] border-[#FF6B35] bg-white/[0.02] p-10 self-start mt-[-40px]"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="font-display font-extrabold text-[#FF6B35] text-3xl mb-6">
              O problema
            </h3>
            <p className="font-body text-[#F2F2F2] font-normal text-xl leading-relaxed">
              Volume de documentos, repetitividade de tarefas e resistência cultural à adoção de IA.
            </p>
          </motion.div>

          {/* A Solução - 55% Direita Bottom */}
          <motion.div 
            className="md:w-[55%] ml-auto bg-ct-accent/10 border border-ct-accent/30 p-12 shadow-2xl backdrop-blur-md"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="font-display font-extrabold text-ct-accent text-3xl mb-6">
              A solução
            </h3>
            <p className="font-body text-[#F2F2F2] font-normal text-xl leading-relaxed">
              Crescitech na educação, FrAiDay na implementação. Prompt library jurídica, fluxos prontos e guia de adoção completo.
            </p>
          </motion.div>
          
        </div>

        {/* Extremo canto inferior direito textual */}
        <motion.div 
          className="absolute bottom-[-2vh] right-[5%] font-body text-ct-accent text-xs font-bold uppercase tracking-widest text-right"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          Cliente de referência: Leo Bento
        </motion.div>
      </div>
    </section>
  );
}
