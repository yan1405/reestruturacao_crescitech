import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef } from 'react';

export default function Section06Funil() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
     if (scrollRef.current) scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
  };
  const scrollRight = () => {
     if (scrollRef.current) scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
  };

  const reelsLinks = [
    "https://www.instagram.com/reel/DV1RUasEQ_C/",
    "https://www.instagram.com/reel/DVzNShHj_8e/",
    "https://www.instagram.com/reel/DVTpOCWDsoc/"
  ];

  return (
    <section className="snap-section bg-white relative p-0 flex flex-col">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, #00B5C5 0%, transparent 70%)' }} />
      <div className="bg-dots" />

      {/* Top: 15vh Título */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[15vh] flex flex-col justify-end px-[5%] pb-2 shrink-0">
        <div className="text-xs text-[#1D3557]/40 uppercase tracking-widest font-bold mb-2">06 / 09</div>
        <motion.h2 
           className="font-display font-extrabold text-[#1D3557] text-4xl md:text-5xl leading-tight"
           initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
        >
          Funil de aquisição gratuito
        </motion.h2>
      </div>

      {/* Mid 1: 35vh Diagrama Funil */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[35vh] flex items-center justify-center px-[5%] py-4 shrink-0">
         <motion.div 
            className="w-full lg:w-[70%] flex items-center justify-between relative bg-white border border-gray-100 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] p-6 h-full overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
         >
            {/* Arrows SVG background connect line */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none px-[15%]">
              <svg viewBox="0 0 100 20" className="w-full h-12 text-[#00B5C5]/30 stroke-current" fill="none" preserveAspectRatio="none">
                 <path d="M 0 10 L 100 10" strokeWidth="1" strokeDasharray="2 2" />
                 <path d="M 33 5 L 38 10 L 33 15" strokeWidth="1.5" />
                 <path d="M 68 5 L 73 10 L 68 15" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Stages */}
            {[
              { num: 1, title: 'Conteúdo Gratuito', desc: '3 dias de drops de IA via Whatsapp (Desafio curto)', metric: 'Lead capturado' },
              { num: 2, title: 'Vibe Coding', desc: 'Consumo do conteúdo libera o curso de automação básico', metric: 'Aumento de consciência' },
              { num: 3, title: 'Produto Pago', desc: 'Oferta da solução AI First / Consultoria completa', metric: 'Conversão em venda' }
            ].map((st, i) => (
               <div key={i} className="flex-1 text-center z-10 bg-white/90 px-4 py-4 h-full flex flex-col justify-center gap-3 backdrop-blur-sm rounded">
                 <div className="w-12 h-12 rounded-full bg-[#1D3557] text-white flex items-center justify-center font-display font-extrabold text-xl mx-auto shadow-md ring-4 ring-[#00B5C5]/20">
                   {st.num}
                 </div>
                 <h4 className="font-display font-extrabold text-[15px] md:text-[17px] text-[#1D3557] leading-tight">{st.title}</h4>
                 <p className="text-[14px] text-gray-600 font-body leading-relaxed max-w-[200px] mx-auto">{st.desc}</p>
                 <div className="mt-auto pt-2">
                    <span className="px-3 py-1 bg-[#00B5C5]/10 text-[#00B5C5] rounded font-bold text-[10px] uppercase tracking-wider">{st.metric}</span>
                 </div>
               </div>
            ))}
         </motion.div>
      </div>

      {/* Mid 2: 25vh YouTube Players Side by Side */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[25vh] flex gap-6 px-[5%] py-2 justify-center shrink-0">
         <div className="w-1/2 lg:w-[35%] bg-[#0A0A0A] rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center relative group p-2">
             <div className="w-full h-full bg-[#151515] rounded-lg border border-[#333] flex flex-col items-center justify-center">
                 <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-red-600/20">
                   <div className="w-0 h-0 border-t-6 border-l-8 border-b-6 border-transparent border-l-white ml-1"></div>
                 </div>
                 <p className="font-body text-[12px] font-bold text-white/50 uppercase tracking-widest text-center px-4">Exemplo de Funil<br/>Link a Inserir</p>
             </div>
         </div>
         <div className="w-1/2 lg:w-[35%] bg-[#0A0A0A] rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center relative group p-2">
             <div className="w-full h-full bg-[#151515] rounded-lg border border-[#333] flex flex-col items-center justify-center">
                 <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-red-600/20">
                   <div className="w-0 h-0 border-t-6 border-l-8 border-b-6 border-transparent border-l-white ml-1"></div>
                 </div>
                 <p className="font-body text-[12px] font-bold text-white/50 uppercase tracking-widest text-center px-4">Exemplo de Copy<br/>Link a Inserir</p>
             </div>
         </div>
      </div>

      {/* Bot 3: 25vh Reels Carousel */}
      <div className="relative z-10 w-full flex-1 flex flex-col pt-4 pb-4 max-w-[1400px] mx-auto overflow-hidden">
         <div className="w-full px-[5%] flex items-center justify-between mb-3 shrink-0">
           <span className="text-[#1D3557] text-[11px] font-bold uppercase tracking-[0.2em] pl-3 border-l-[3px] border-[#FF6B35]">Exemplos Curtos em Reels</span>
           <div className="flex gap-2">
             <button onClick={scrollLeft} className="p-1.5 bg-[#f2f2f2] hover:bg-[#00B5C5] hover:text-white transition-colors rounded-full text-[#1D3557]"><ChevronLeft size={16}/></button>
             <button onClick={scrollRight} className="p-1.5 bg-[#f2f2f2] hover:bg-[#00B5C5] hover:text-white transition-colors rounded-full text-[#1D3557]"><ChevronRight size={16}/></button>
           </div>
         </div>
         
         <div ref={scrollRef} className="w-full flex-1 overflow-x-auto overflow-y-hidden flex gap-4 px-[5%] custom-scrollbar snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
            {reelsLinks.map((link, idx) => (
              <div key={idx} className="shrink-0 w-[240px] h-full bg-white relative snap-center flex justify-center border border-gray-200 rounded shadow-sm overflow-hidden p-0.5">
                 <iframe 
                   src={`${link}embed/`} 
                   width="234" 
                   height="480" 
                   frameBorder="0" 
                   className="w-full block border-0 mx-auto rounded"
                   scrolling="no"
                 />
              </div>
            ))}
            <div className="w-[10%] shrink-0"></div>
         </div>
      </div>

    </section>
  );
}
