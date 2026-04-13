import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Section02Proposta() {
  const [inView, setInView] = useState(false);
  const [showClean, setShowClean] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setShowClean(true), 800);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <section className="snap-section bg-[#1D3557] relative p-0 flex flex-col pt-[5vh] pb-[4vh]">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-ct-accent blur-[80px] opacity-[0.08] pointer-events-none -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#F5A800] blur-[80px] opacity-[0.05] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="bg-dots-white" />

      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-[#A8C0D6] writing-vertical-rl rotate-180 uppercase tracking-widest font-montserrat z-20 pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col px-[5%] justify-between">
        
        {/* Título Esquerda Top */}
        <div className="w-full flex-shrink-0">
          <div className="text-xs text-white/40 uppercase tracking-widest font-montserrat font-bold mb-4">02 / 09 • Divisão Crescitech e FrAiDay</div>
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} onViewportEnter={() => setInView(true)}>
            <h2 className="font-impact text-white text-5xl md:text-6xl mb-4 leading-none tracking-normal">A proposta central</h2>
            <div className="w-12 h-1 bg-[#00B5C5] mb-4" />
          </motion.div>
        </div>

        {/* Central Área: Diagramas (AnimatePresence) - Mínimo 60% */}
        <div className="flex-1 w-full flex items-center justify-center relative my-6 min-h-[55vh]">
           <AnimatePresence mode="wait">
             {!showClean ? (
                // Chaos Diagram from Section 1
                <motion.div 
                   key="chaos"
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.8 }}
                   transition={{ duration: 0.5 }}
                   className="w-[340px] h-[340px] absolute"
                >
                    <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                       <g stroke="#FF4444" strokeWidth="4" markerEnd="url(#arrowhead2)">
                         <path d="M 200 200 L 320 90" />
                         <path d="M 200 200 L 320 310" />
                         <path d="M 200 200 L 40 200" />
                       </g>
                       <circle cx="200" cy="200" r="55" fill="#FFFFFF" />
                       <text x="200" y="205" fill="#1D3557" fontSize="15" fontWeight="bold" fontFamily="Montserrat" textAnchor="middle">Crescitech</text>
                       <g fontFamily="Montserrat" fontSize="14" fontWeight="bold">
                         <rect x="270" y="60" width="120" height="40" rx="6" fill="#1D3557" stroke="#00B5C5" strokeWidth="2" />
                         <text x="330" y="86" fill="#FFFFFF" textAnchor="middle">Consultoria</text>
                         <rect x="270" y="290" width="120" height="40" rx="6" fill="#1D3557" stroke="#00B5C5" strokeWidth="2" />
                         <text x="330" y="316" fill="#FFFFFF" textAnchor="middle">Educação</text>
                         <rect x="0" y="180" width="120" height="40" rx="6" fill="#1D3557" stroke="#00B5C5" strokeWidth="2" />
                         <text x="60" y="206" fill="#FFFFFF" textAnchor="middle">Tech</text>
                       </g>
                       <defs>
                         <marker id="arrowhead2" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                           <polygon points="0 0, 6 2, 0 4" fill="#FF4444" />
                         </marker>
                       </defs>
                    </svg>
                </motion.div>
             ) : (
                // Clean Structural Diagram
                <motion.div 
                   key="clean"
                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   transition={{ type: "spring", stiffness: 100, damping: 20 }}
                   className="flex flex-col items-center absolute"
                >
                   {/* Crescitech Box 340x100 */}
                   <div 
                      className="w-[340px] h-[100px] bg-[#11223A] rounded-[8px] flex flex-col items-center justify-center border border-[#00B5C5] shrink-0" 
                      style={{ boxShadow: '0 0 24px rgba(29,53,87,0.8)' }}
                   >
                      <h3 className="font-impact text-white text-[24px] uppercase tracking-widest leading-none mb-1">Crescitech</h3>
                      <span className="font-lato text-[#A8C0D6] text-[14px]">Hold. Consultoria e Educação</span>
                   </div>
                   
                   {/* Arrow with Gap 40px mapped using margin (my-[20px] makes 40px gap overall if 20px top + 20px bottom) or gap */}
                   <div className="flex flex-col items-center justify-center h-[120px] relative shrink-0 w-[40px]">
                      <div className="w-0.5 h-[100px] bg-gradient-to-b from-[#00B5C5] to-[#F5A800]" />
                      <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-[#F5A800]" />
                      <span className="font-montserrat text-white/50 text-[11px] uppercase font-bold absolute top-1/2 left-8 -translate-y-1/2 whitespace-nowrap">Subsidiária Tech</span>
                   </div>

                   {/* FrAiDay Box 340x100 */}
                   <div 
                      className="w-[340px] h-[100px] bg-[#F5A800] rounded-[8px] flex flex-col items-center justify-center shrink-0"
                      style={{ boxShadow: '0 0 24px rgba(245,168,0,0.5)' }}
                   >
                      <h3 className="font-impact text-[#0D0D0D] text-[24px] uppercase tracking-widest leading-none mb-1">FrAiDay</h3>
                      <span className="font-lato text-[#0D0D0D]/80 text-[14px] font-bold">Automações, Software e IA</span>
                   </div>
                </motion.div>
             )}
           </AnimatePresence>
        </div>

        {/* Três blocos inferiores diretos ao ponto */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mt-auto shrink-0 mb-[2vh]"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={{
            hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {[
            { title: "Separação de canais", text: "A educação não polui a tecnologia." },
            { title: "Marca B2B orientada", text: "A automação via FrAiDay foca inteiramente em lucro e escala." },
            { title: "Criação de esteiras", text: "A consultoria primária vira um produto SaaS ativo a longo prazo." }
          ].map((b, i) => (
            <motion.div key={i} variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 }}} className="border-t border-[#00B5C5]/20 pt-4 flex flex-col">
               <h4 className="font-montserrat font-bold text-white text-[15px] xl:text-[17px] mb-2">{b.title}</h4>
               <p className="font-lato text-[#A8C0D6] text-[14px] xl:text-[15px] leading-relaxed line-clamp-3">{b.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
