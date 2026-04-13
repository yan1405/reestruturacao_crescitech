import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroScreen() {
  return (
    <section className="snap-section bg-[#1D3557] text-white relative">
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00B5C5] blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1D3557] blur-[100px] opacity-20 pointer-events-none" />
      <div className="bg-dots-white" />

      {/* Assinatura */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 writing-vertical-rl rotate-180 uppercase tracking-widest font-montserrat pointer-events-none text-white z-20">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-full flex flex-col pt-[15vh]">
        
        <div className="absolute top-[5vh] left-[5%] text-xs text-[#A8C0D6] uppercase tracking-widest font-montserrat font-bold">
          00 / 09
        </div>

        {/* Título */}
        <motion.div
           className="w-full md:w-[70%] px-[5%]"
           initial={{ y: 30, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="font-impact text-[80px] md:text-[140px] leading-none mb-4 tracking-normal text-white">
            Crescitech
          </h1>
          <div className="w-12 h-1 bg-[#00B5C5] mb-8" />
        </motion.div>

        {/* Diagrama emergindo - SVG Animado com Framer Motion (Centro/Direita) */}
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] hidden md:block">
          <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
             <motion.path 
               d="M 100 200 C 100 150 40 120 40 60" 
               fill="none" stroke="#00B5C5" strokeWidth="3" strokeDasharray="5 5"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
             />
             <motion.path 
               d="M 100 200 C 100 150 160 120 160 60" 
               fill="none" stroke="#F5A800" strokeWidth="3" strokeDasharray="5 5"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
             />
             <motion.circle cx="100" cy="200" r="6" fill="#A8C0D6" 
               initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} 
             />
             
             {/* Crescitech Box */}
             <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
               <rect x="0" y="30" width="80" height="30" rx="4" fill="#00B5C5" fillOpacity="0.2" stroke="#00B5C5" strokeWidth="1" />
               <text x="40" y="49" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="Montserrat">Crescitech</text>
             </motion.g>

             {/* FrAiDay Box */}
             <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
               <rect x="120" y="30" width="80" height="30" rx="4" fill="#F5A800" fillOpacity="0.2" stroke="#F5A800" strokeWidth="1" />
               <text x="160" y="49" textAnchor="middle" fill="#F5A800" fontSize="10" fontFamily="Pacifico, cursive">frAIday</text>
             </motion.g>
          </svg>
        </div>

        {/* Subtítulo controlado linha única */}
        <motion.div 
          className="absolute bottom-[20vh] right-[10%] w-[450px] text-right"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-montserrat font-light text-2xl md:text-3xl text-[#A8C0D6] whitespace-nowrap tracking-wide">
            Uma nova estrutura para um novo momento.
          </p>
        </motion.div>

        {/* Scroll Indicator Pulse */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] mb-2 text-[#A8C0D6]">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={18} className="text-[#A8C0D6]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
