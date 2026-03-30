import { motion } from 'framer-motion';

export default function Section09Roadmap() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="snap-section bg-[#1D3557] relative">
      {/* Telas escuras. Blob turq sup-dir, amarelo inf-esq (op 10%) */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-ct-accent blur-[80px] opacity-15 pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#F5A800] blur-[80px] opacity-10 pointer-events-none -translate-x-1/4 translate-y-1/4" />
      
      <div className="bg-dots-white" />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-white writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col pt-[12vh]">
        
        {/* Superior Título Esquerda Top */}
        <div className="flex flex-col mb-auto w-full">
          <div className="text-xs text-white/40 uppercase tracking-widest font-bold mb-6">09 / 09</div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-display font-extrabold text-white text-6xl md:text-7xl mb-6 leading-tight tracking-tight">Próximos passos e roadmap</h2>
            <div className="w-12 h-1 bg-ct-accent mb-6" />
            <p className="font-body font-light text-ct-secondary text-3xl">O que acontece na semana seguinte.</p>
          </motion.div>
        </div>

        {/* 3 Colunas na faixa inferior direita (Assimetrico) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-[85%] ml-auto bg-[#1D3557]/40 p-10 border-t border-white/5 backdrop-blur-sm shadow-xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
           {[
             { title: "0 a 30 dias", items: "Validação da estrutura Crescitech/FrAiDay / Definição da identidade visual da FrAiDay / Início da reformulação do Instagram" },
             { title: "30 a 90 dias", items: "Lançamento do funil de aquisição gratuito / Programa para escritórios de advocacia / Onboarding automatizado no ar" },
             { title: "90 dias em diante", items: "SaaS próprio da FrAiDay / Programa de parceiros e indicadores / Escala de marketing pago" }
           ].map((col, idx) => (
              <motion.div key={idx} variants={item} className="flex flex-col">
                 <h3 className="font-display font-extrabold text-[#00B5C5] text-2xl mb-6 pb-2 border-b border-[#00B5C5]/20">{col.title}</h3>
                 <ul className="flex flex-col gap-4">
                   {col.items.split('/').map((line, lid) => (
                     <li key={lid} className="font-body font-normal text-[#F2F2F2] text-lg leading-tight flex gap-3">
                       <span className="text-[#00B5C5] font-black opacity-30">›</span>
                       <span className="flex-1">{line.trim()}</span>
                     </li>
                   ))}
                 </ul>
              </motion.div>
           ))}
        </motion.div>

        {/* Footer centralizado no rodapé da página */}
        <motion.div 
          className="w-full relative py-[5vh] mt-auto font-body text-center text-xs text-white/40 tracking-[0.3em] font-normal uppercase z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
        >
          Crescitech × FrAiDay 2026
        </motion.div>

      </div>
    </section>
  );
}
