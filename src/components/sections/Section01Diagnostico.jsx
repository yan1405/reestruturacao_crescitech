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
    <section className="snap-section bg-gray-50 relative p-0 flex flex-col pt-[5vh] pb-[4vh]">
      <div className="bg-dots" />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-[#1D3557] writing-vertical-rl rotate-180 uppercase tracking-widest font-montserrat z-20 pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col h-full px-[5%]">

        {/* Top Split: Grid 2 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full shrink-0 mb-auto mt-2 h-[45vh]">
           
           {/* Left Col: Título + Card */}
           <div className="flex flex-col justify-center h-full">
             <div className="text-xs text-[#1D3557]/40 uppercase tracking-widest font-montserrat font-bold mb-4">01 / 09</div>
             <motion.h2 
               className="font-impact text-[#1D3557] text-4xl xl:text-5xl mb-6 leading-none tracking-normal"
               initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
             >
               O atual cenário da<br/>prestação de serviços B2B
             </motion.h2>
             
             {/* Data Card (73%) */}
             <motion.div 
               className="bg-[#1D3557] rounded-xl p-6 text-white w-[85%] max-w-md shadow-xl"
               initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
             >
                <div className="font-montserrat font-bold text-5xl xl:text-6xl text-[#F5A800] mb-2 tracking-tighter">73%</div>
                <p className="font-montserrat font-[600] text-[15px] leading-tight text-[#F2F2F2]">
                  Das empresas perdem receita devido ao caos organizacional interno e gargalos comunicativos.
                </p>
             </motion.div>
           </div>
           
           {/* Right Col: Diagrama do Caos SVG Animado */}
           <div className="flex items-center justify-center relative h-full">
             <motion.div 
               className="relative w-[340px] h-[340px]"
               initial={{ scale: 0.8, opacity: 0 }} 
               whileInView={{ scale: 1, opacity: 1 }} 
               transition={{ duration: 0.8, ease: "easeOut" }} 
               viewport={{ once: true }}
             >
                <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
                   {/* Arrows */}
                   <g stroke="#FF4444" strokeWidth="3" markerEnd="url(#arrowhead)">
                     {/* Dir-Sup (Consultoria) */}
                     <path d="M 150 150 L 250 80" />
                     {/* Dir-Inf (Educação) */}
                     <path d="M 150 150 L 250 220" />
                     {/* Esq (Tech) */}
                     <path d="M 150 150 L 50 150" />
                   </g>

                   {/* Center Circle */}
                   <circle cx="150" cy="150" r="45" fill="#1D3557" />
                   <text x="150" y="154" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="Montserrat" textAnchor="middle">Crescitech</text>

                   {/* Rectangles */}
                   <g fontFamily="Montserrat" fontSize="11" fontWeight="bold">
                     <rect x="230" y="60" width="85" height="30" rx="4" fill="#FFFFFF" stroke="#1D3557" strokeWidth="2" />
                     <text x="272.5" y="79" fill="#1D3557" textAnchor="middle">Consultoria</text>

                     <rect x="230" y="200" width="85" height="30" rx="4" fill="#FFFFFF" stroke="#1D3557" strokeWidth="2" />
                     <text x="272.5" y="219" fill="#1D3557" textAnchor="middle">Educação</text>

                     <rect x="10" y="135" width="85" height="30" rx="4" fill="#FFFFFF" stroke="#1D3557" strokeWidth="2" />
                     <text x="52.5" y="154" fill="#1D3557" textAnchor="middle">Tech</text>
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
            <motion.div key={i} variants={item} className="bg-white p-6 shadow-xl border border-gray-100 flex flex-col h-[28vh] justify-between group overflow-hidden">
              <span className="font-montserrat font-bold text-[#F5A800] text-3xl opacity-20 mb-1 leading-none tracking-tighter">0{i+1}</span>
              <h3 className="font-montserrat font-bold text-[#1D3557] text-[18px] xl:text-[20px] mb-3 leading-tight">{card.title}</h3>
              <p className="font-lato font-normal text-gray-500 text-[14px] leading-relaxed line-clamp-3">{card.desc}</p>
              <div className="w-10 h-1 bg-[#F5A800] mt-auto opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
