import { motion } from 'framer-motion';

export default function Section02Proposta() {
  return (
    <section className="snap-section bg-[#1D3557] relative">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-ct-accent blur-[80px] opacity-15 pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-white blur-[80px] opacity-10 pointer-events-none -translate-x-1/4 translate-y-1/4" />
      
      <div className="bg-dots-white" />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-white writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none z-20">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col pt-[10vh] pb-[6vh]">
        
        {/* Título */}
        <div className="flex flex-col text-left mb-6">
          <div className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">02 / 09</div>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="font-display font-extrabold text-white text-5xl md:text-6xl mb-4 leading-tight">A proposta central</h2>
            <div className="w-12 h-1 bg-white" />
          </motion.div>
        </div>

        {/* Diagrama Centralizado Organizado */}
        <div className="w-full flex-1 flex justify-center items-center py-4 min-h-[300px]">
          <svg viewBox="0 0 500 250" className="w-full max-w-[700px] h-full overflow-visible">
            {/* Animacao: De 1 ponto central vira 2 blocos organizados */}
            
            {/* Seta conectiva Top-Bottom */}
            <motion.path d="M 250 110 L 250 160" fill="none" stroke="#F2F2F2" strokeWidth="2" strokeDasharray="4 4"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.6 }}
            />
            <motion.polygon points="250,160 245,150 255,150" fill="#F2F2F2" 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.4 }}
            />

            {/* Crescitech Bloco (Top) */}
            <motion.rect x="150" y="50" width="200" height="60" rx="8" fill="#1D3557" stroke="#00B5C5" strokeWidth="2"
              initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}
            />
            <motion.text x="250" y="85" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="bold" fontFamily="Syne"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
            >Crescitech</motion.text>

            <motion.text x="135" y="82" fill="#A8C0D6" fontSize="13" fontFamily="DM Sans" textAnchor="end"
              initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
            >Educação & Consultoria</motion.text>

            {/* FrAiDay Bloco (Bottom) */}
            <motion.rect x="170" y="160" width="160" height="60" rx="8" fill="#F5A800" stroke="#0D0D0D" strokeWidth="2"
               initial={{ scale: 0.8, opacity: 0, y: -20 }} whileInView={{ scale: 1, opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.5 }}
            />
            <motion.text x="250" y="200" textAnchor="middle" fill="#0D0D0D" fontSize="28" fontFamily="Pacifico, cursive"
               initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }}
            >frAIday</motion.text>
            
            <motion.text x="345" y="195" fill="#A8C0D6" fontSize="13" fontFamily="DM Sans" textAnchor="start"
              initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2.0 }}
            >Subsidiária Tech & SaaS</motion.text>
          </svg>
        </div>

        {/* 2 Blocos Textuais Side by Side Inferior */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-auto px-4 md:px-0">
          <motion.div 
            className="bg-[#1D3557] border border-[#00B5C5]/30 p-10 shadow-2xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
             <h3 className="font-display font-extrabold text-white text-3xl mb-4">Crescitech</h3>
             {/* Limitando linhas e legibilidade (Branco puro em dark) */}
             <p className="font-body text-white text-[16px] leading-[1.6] line-clamp-3">
               100% focada em consultoria corporativa e educação de I.A. voltada a empresários, executivos de C-Level e grandes bancas advocatícias.
             </p>
          </motion.div>

          <motion.div 
            className="bg-[#F5A800] p-10 shadow-2xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
             <h3 className="font-display font-extrabold text-[#0D0D0D] text-3xl mb-4">FrAiDay</h3>
             {/* Limitando linhas e legibilidade (Preto em amarelo claro) */}
             <p className="font-body text-[#0D0D0D] font-medium text-[16px] leading-[1.6] line-clamp-3">
               A subsidiária ágil: opera SaaS, desenvolve automações (n8n/WhatsApp) e presta serviços de implantação de ferramentas para empresas.
             </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
