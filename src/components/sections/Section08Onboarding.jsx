import { motion } from 'framer-motion';

export default function Section08Onboarding() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="snap-section bg-white relative">
      {/* Tela clara: Glow turq inf-dir, invadindo 30% */}
      <div 
        className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-15 pointer-events-none translate-x-1/4 translate-y-1/4" 
        style={{ background: 'radial-gradient(circle, #00B5C5 0%, transparent 70%)' }}
      />
      
      <div className="bg-dots" />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-[#1D3557] writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col py-[12vh]">
        
        {/* Título Esq Top */}
        <div className="w-full mb-auto md:w-4/5">
          <div className="text-xs text-[#1D3557]/40 uppercase tracking-widest font-bold mb-6">08 / 09</div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-display font-extrabold text-[#1D3557] text-6xl md:text-7xl mb-6 leading-tight tracking-tight">Onboarding automatizado e Follow Up</h2>
            <div className="w-12 h-1 bg-ct-accent mb-6" />
            <p className="font-body font-light text-[#A8C0D6] text-3xl">Escala sem aumento proporcional de custo.</p>
          </motion.div>
        </div>

        {/* 3 cards na faixa inf com linha SVG animada ligando */}
        <div className="relative mt-20 w-full ml-auto md:w-[90%]">
          
          {/* Linha Fina Bruta (Traço do Template) */}
          <motion.svg className="absolute top-0 left-[10%] w-[80%] h-full z-0 overflow-visible" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
             {/* Linha conectiva inferior passando no meio dos cards */}
             <motion.line 
               x1="0" y1="50%" x2="100%" y2="50%" 
               stroke="#00B5C5" strokeWidth="2" strokeOpacity="0.3"
               variants={{
                 hidden: { pathLength: 0 },
                 show: { pathLength: 1, transition: { duration: 1.5, ease: "easeInOut" } }
               }} 
             />
          </motion.svg>

          <motion.div 
             className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
             variants={container}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.2 }}
          >
             {[
               { title: "Onboarding", text: "Do primeiro contato ao início da consultoria sem nenhuma intervenção manual." },
               { title: "Follow Up", text: "Ferramenta interna que rastreia clientes, oportunidades e próximos passos." },
               { title: "Stack técnica", text: "n8n + Z-API/WATI integrados a um CRM simples. Horas de operação manual eliminadas por semana." }
             ].map((card, idx) => (
                <motion.div 
                  key={idx} variants={item}
                  className="bg-white border-2 border-transparent hover:border-ct-accent/30 p-10 shadow-xl"
                >
                  <div className="text-4xl text-[#1D3557] font-display font-extrabold mb-6 opacity-20">0{idx+1}</div>
                  <h3 className="font-display font-extrabold text-[#1D3557] text-2xl mb-4">{card.title}</h3>
                  <p className="font-body font-normal text-[#333333] text-lg leading-relaxed">{card.text}</p>
                </motion.div>
             ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
