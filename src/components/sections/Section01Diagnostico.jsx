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
      <div 
        className="absolute top-0 right-0 w-[400px] h-[400px] opacity-15 pointer-events-none" 
        style={{ background: 'radial-gradient(circle, #00B5C5 0%, transparent 70%)' }}
      />
      
      <div className="bg-dots" />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-[#1D3557] writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none z-20">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col pt-[12vh]">
        
        {/* Split View Superior */}
        <div className="flex flex-col md:flex-row justify-between w-full flex-1">
          {/* Esquerda: Título e Dado */}
          <div className="w-full md:w-[45%] flex flex-col">
            <div className="text-xs text-[#1D3557]/40 uppercase tracking-widest font-bold mb-6">
              01 / 09
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
            >
              <motion.h2 variants={item} className="font-display font-extrabold text-[#1D3557] text-5xl md:text-6xl mb-4 leading-tight tracking-tight">
                O diagnóstico atual<br/> da Crescitech
              </motion.h2>
              
              <motion.div variants={item} className="w-12 h-1 bg-ct-accent mb-4" />
              
              <motion.p variants={item} className="font-body font-light text-[#A8C0D6] text-2xl">
                Onde estamos e por que<br/> precisamos mudar agora.
              </motion.p>
            </motion.div>
            
            {/* Card Dado de Mercado Embutido à Esquerda */}
            <motion.div 
               className="mt-8 bg-[#1D3557] border-l-[6px] border-ct-accent p-6 max-w-[380px] shadow-2xl relative"
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.6 }}
            >
              <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-2 font-bold">Oportunidade de Mercado</div>
              <div className="text-5xl font-display font-extrabold text-white mb-2 tracking-tighter">73%</div>
              <div className="text-[14px] font-body text-white/80 leading-relaxed font-normal">
                Das empresas pretendem adotar IA em 2025/2026, abrindo uma janela de posicionamento única no mercado B2B.
              </div>
            </motion.div>
          </div>

          {/* Direita: Diagrama Caos */}
          <div className="w-full md:w-[50%] flex justify-center items-center relative h-[300px] lg:h-auto">
             <svg viewBox="0 0 350 350" className="w-[90%] h-[90%] overflow-visible">
                {/* Centro - Marca Única */}
                <motion.circle cx="175" cy="175" r="45" fill="#1D3557" stroke="#00B5C5" strokeWidth="4" 
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}
                />
                <motion.text x="175" y="180" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Syne"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
                >Marca Única</motion.text>

                {/* Seta 1 - Consultoria */}
                <motion.path d="M 160 130 C 160 60 100 30 50 60" fill="none" stroke="#FF6B35" strokeWidth="3"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 1 }}
                />
                <motion.polygon points="50,60 65,55 58,70" fill="#FF6B35" 
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }}
                />
                <motion.text x="30" y="40" fill="#333" fontSize="13" fontFamily="DM Sans" fontWeight="bold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }}>Consultoria</motion.text>

                {/* Seta 2 - Educação */}
                <motion.path d="M 220 150 C 290 150 320 90 280 40" fill="none" stroke="#00B5C5" strokeWidth="3" flex="1"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 1 }}
                />
                <motion.polygon points="280,40 295,45 285,55" fill="#00B5C5" 
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }}
                />
                <motion.text x="290" y="30" fill="#333" fontSize="13" fontFamily="DM Sans" fontWeight="bold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }}>Educação</motion.text>

                {/* Seta 3 - Tech */}
                <motion.path d="M 190 220 C 190 290 260 320 310 280" fill="none" stroke="#F5A800" strokeWidth="3"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 1 }}
                />
                <motion.polygon points="310,280 300,290 295,275" fill="#F5A800" 
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }}
                />
                <motion.text x="320" y="305" fill="#333" fontSize="13" fontFamily="DM Sans" fontWeight="bold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }}>Tech / SaaS</motion.text>
             </svg>
          </div>
        </div>

        {/* 3 Cards Abaixo Estáticos */}
        <motion.div 
          className="w-full mb-[6vh] mt-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Uma única marca tentando operar consultoria, educação e tech simultaneamente gerando diluição.",
              "Confusão de posicionamento que limita o crescimento e dificulta vendas de produtos complementares.",
              "A janela de mercado é AGORA: a maioria das PMEs busca adoção, mas faltam implementadores."
            ].map((text, i) => (
              <motion.div 
                key={i}
                variants={item}
                className="bg-white border hover:border-ct-accent border-gray-200 p-8 shadow-sm transition-all h-[180px] flex flex-col justify-start relative overflow-hidden"
              >
                <div className="text-ct-accent font-display font-extrabold text-2xl mb-3 opacity-30 tracking-widest">0{i+1}</div>
                <p className="text-[#333333] font-body text-[15px] leading-relaxed font-normal overflow-hidden">{text}</p>
                {/* Degradê inferior pra caso o texto corte elegantemente */}
                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
