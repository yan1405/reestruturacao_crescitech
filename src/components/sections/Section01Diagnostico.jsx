import { motion } from 'framer-motion';

export default function Section01Diagnostico() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="snap-section bg-[#1D3557] relative p-0 flex flex-col pt-[5vh] pb-[4vh]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00B5C5] blur-[100px] opacity-[0.03] pointer-events-none" />
      <div className="bg-dots-white" />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-[#A8C0D6] writing-vertical-rl rotate-180 uppercase tracking-widest font-montserrat z-20 pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col h-full px-[5%]">

        {/* Top Split: Flex row for specific width control */}
        <div className="flex flex-col lg:flex-row gap-10 w-full shrink-0 mb-auto mt-2 h-[45vh]">
           
           {/* Left Col: 55% */}
           <div className="flex flex-col justify-center h-full w-full lg:w-[55%]">
             <div className="text-xs text-[#A8C0D6]/40 uppercase tracking-widest font-montserrat font-bold mb-4">01 / 09</div>
             <motion.h2 
               className="font-impact text-white text-4xl xl:text-5xl mb-6 leading-none tracking-normal"
               initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
             >
               O diagnóstico atual da Crescitech
             </motion.h2>
             
             {/* Data Card (73%) */}
             <motion.div 
               className="bg-[#11223A] rounded-xl p-6 text-white w-[85%] max-w-md shadow-xl border border-white/5"
               initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
             >
                <div className="font-montserrat font-bold text-5xl xl:text-6xl text-[#F5A800] mb-2 tracking-tighter">73%</div>
                <p className="font-montserrat font-[600] text-[14px] leading-tight text-[#F2F2F2]">
                  Das empresas perdem receita devido ao caos organizacional interno e gargalos comunicativos.
                </p>
             </motion.div>
           </div>
           
           {/* Right Col: 45% (Diagrama do Caos Maior) */}
           <div className="flex items-center justify-center relative h-full w-full lg:w-[45%]">
             <motion.div 
               className="relative w-full h-full min-h-[300px]"
               initial={{ scale: 0.8, opacity: 0 }} 
               whileInView={{ scale: 1, opacity: 1 }} 
               transition={{ duration: 0.8, ease: "easeOut" }} 
               viewport={{ once: true }}
             >
                <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                   {/* Arrows */}
                   <g stroke="#FF4444" strokeWidth="4" markerEnd="url(#arrowhead)">
                     {/* Dir-Sup (Consultoria) */}
                     <path d="M 200 200 L 320 90" />
                     {/* Dir-Inf (Educação) */}
                     <path d="M 200 200 L 320 310" />
                     {/* Esq (Tech) */}
                     <path d="M 200 200 L 40 200" />
                   </g>

                   {/* Center Circle */}
                   <circle cx="200" cy="200" r="55" fill="#0D1B2A" stroke="#00B5C5" strokeWidth="2" />
                   <text x="200" y="205" fill="#FFFFFF" fontSize="15" fontWeight="bold" fontFamily="Montserrat" textAnchor="middle">Crescitech</text>

                   {/* Rectangles */}
                   <g fontFamily="Montserrat" fontSize="14" fontWeight="bold">
                     <rect x="270" y="60" width="120" height="40" rx="6" fill="#FFFFFF" stroke="#00B5C5" strokeWidth="2" />
                     <text x="330" y="86" fill="#1D3557" textAnchor="middle">Consultoria</text>

                     <rect x="270" y="290" width="120" height="40" rx="6" fill="#FFFFFF" stroke="#00B5C5" strokeWidth="2" />
                     <text x="330" y="316" fill="#1D3557" textAnchor="middle">Educação</text>

                     <rect x="0" y="180" width="120" height="40" rx="6" fill="#FFFFFF" stroke="#00B5C5" strokeWidth="2" />
                     <text x="60" y="206" fill="#1D3557" textAnchor="middle">Tech</text>
                   </g>

                   <defs>
                     <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                       <polygon points="0 0, 6 2, 0 4" fill="#FF4444" />
                     </marker>
                   </defs>
                </svg>
             </motion.div>
           </div>

        </div>

        {/* Bot Três cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mt-auto flex-1 items-end min-h-[30vh]"
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
        >
          {[
            { title: "Descentralização extrema", desc: "A cada novo cliente, parceiro ou etapa, abre-se um WhatsApp novo e uma nova thread sem fim." },
            { title: "Dependência de PESSOAS", desc: "O conhecimento da operação morre na cabeça do especialista e não é transmitido ou documentado." },
            { title: "Efeito gargalo B2B", desc: "O serviço perde escalabilidade. Crescer o portfólio significa duplicar proporcionalmente o custo operacional." }
          ].map((card, i) => (
            <motion.div key={i} variants={item} className="bg-[#11223A] p-6 shadow-xl border border-white/5 flex flex-col h-[28vh] justify-between group overflow-hidden">
              <span className="font-montserrat font-bold text-[#F5A800] text-3xl opacity-20 mb-1 leading-none tracking-tighter">0{i+1}</span>
              <h3 className="font-montserrat font-bold text-white text-[17px] xl:text-[19px] mb-3 leading-tight">{card.title}</h3>
              <p className="font-lato font-normal text-[#A8C0D6] text-[14px] leading-relaxed line-clamp-3">{card.desc}</p>
              <div className="w-10 h-1 bg-[#F5A800] mt-auto opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
