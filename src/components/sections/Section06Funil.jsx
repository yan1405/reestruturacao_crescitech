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
    "DV1RUasEQ_C",
    "DVzNShHj_8e",
    "DVTpOCWDsoc"
  ];

  return (
    <section className="snap-section bg-[#162130] relative p-0 flex flex-col">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #F5A800 0%, transparent 70%)' }} />
      <div className="bg-dots-white" />

      {/* Top: 15vh Título */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[15vh] flex flex-col justify-end px-[5%] pb-2 shrink-0">
        <div className="text-xs text-[#A8C0D6] font-montserrat uppercase tracking-widest font-bold mb-2">06 / 09</div>
        <motion.h2 
           className="font-impact text-white text-4xl md:text-5xl leading-tight"
           initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
        >
          Funil de aquisição gratuito
        </motion.h2>
      </div>

      {/* Mid 1: 30vh Diagrama Funil */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[30vh] flex items-center justify-center px-[5%] py-4 shrink-0">
         <motion.div 
            className="w-full lg:w-[70%] flex items-center justify-between relative bg-[#0f151f] border border-white/5 rounded-xl shadow-2xl p-6 h-full overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
         >
            {/* Arrows SVG */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none px-[15%]">
              <svg viewBox="0 0 100 20" className="w-full h-12 text-[#F5A800]/20 stroke-current" fill="none" preserveAspectRatio="none">
                 <path d="M 0 10 L 100 10" strokeWidth="1" strokeDasharray="2 2" />
                 <path d="M 33 5 L 38 10 L 33 15" strokeWidth="1.5" />
                 <path d="M 68 5 L 73 10 L 68 15" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Stages */}
            {[
              { num: 1, title: 'Conteúdo Gratuito', desc: '3 dias de drops de IA via Whatsapp (Desafio curto)', metric: 'Lead capturado' },
              { num: 2, title: 'Vibe Coding', desc: 'Consumo do conteúdo libera o curso de automação', metric: 'Aumento de consciência' },
              { num: 3, title: 'Produto Pago', desc: 'Oferta da solução AI First / Consultoria completa', metric: 'Conversão em venda' }
            ].map((st, i) => (
               <div key={i} className="flex-1 text-center z-10 bg-[#162130]/90 px-4 py-3 h-full flex flex-col justify-center gap-2 backdrop-blur-md rounded border border-white/5">
                 <div className="w-12 h-12 rounded-full bg-[#1D3557] text-[#00B5C5] flex items-center justify-center font-impact text-2xl mx-auto shadow-md ring-4 ring-white/5">
                   {st.num}
                 </div>
                 <h4 className="font-montserrat font-extrabold text-[15px] md:text-[17px] text-white leading-tight">{st.title}</h4>
                 <p className="text-[13px] xl:text-[14px] text-gray-400 font-lato leading-relaxed mx-auto">{st.desc}</p>
                 <div className="mt-auto pt-1">
                    <span className="font-montserrat px-3 py-1 bg-[#F5A800]/10 text-[#F5A800] rounded font-bold text-[10px] uppercase tracking-wider">{st.metric}</span>
                 </div>
               </div>
            ))}
         </motion.div>
      </div>

      {/* Mid 2: Youtube Placeholders Div */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto min-h-[15vh] flex gap-6 px-[5%] py-4 justify-center shrink-0">
         <div className="w-1/2 lg:w-[35%] bg-transparent flex flex-col relative p-0 overflow-hidden">
             <div style={{ width: '100%', height: '240px', background: '#1a1a2e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: '"Dado", "Lato", sans-serif', fontSize: '14px' }}>Vídeo de referência — link a inserir</span>
             </div>
         </div>
         <div className="w-1/2 lg:w-[35%] bg-transparent flex flex-col relative p-0 overflow-hidden">
             <div style={{ width: '100%', height: '240px', background: '#1a1a2e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: '"Dado", "Lato", sans-serif', fontSize: '14px' }}>Vídeo de referência — link a inserir</span>
             </div>
         </div>
      </div>

      {/* Bot 3: Reels Carousel (Instagram Corrected Formats 600px) */}
      <div className="relative z-10 w-full flex-1 flex flex-col pt-4 max-w-[1400px] mx-auto overflow-visible pb-2 min-h-[40vh]">
         <div className="w-full px-[5%] flex items-center justify-between mb-3 shrink-0">
           <span className="font-montserrat text-white/80 text-[13px] font-bold uppercase tracking-[0.2em] pl-3 border-l-[3px] border-[#F5A800]">Exemplos Curtos em Reels</span>
           <div className="flex gap-2">
             <button onClick={scrollLeft} className="p-1.5 bg-white/10 hover:bg-[#F5A800] hover:text-[#0D0D0D] transition-colors rounded-full text-white"><ChevronLeft size={16}/></button>
             <button onClick={scrollRight} className="p-1.5 bg-white/10 hover:bg-[#F5A800] hover:text-[#0D0D0D] transition-colors rounded-full text-white"><ChevronRight size={16}/></button>
           </div>
         </div>
         
         <div ref={scrollRef} className="w-full h-auto overflow-x-auto overflow-y-visible flex gap-4 px-[5%] custom-scrollbar snap-x snap-mandatory pt-1" style={{ scrollbarWidth: 'none' }}>
            {reelsLinks.map((code, idx) => (
              <div key={idx} className="shrink-0 w-[330px] min-h-[620px] rounded-lg border border-white/5 bg-[#0f151f] shadow-lg relative snap-center flex justify-center py-2 h-auto">
                 <iframe 
                   src={`https://www.instagram.com/reel/${code}/embed/`}
                   width="100%" 
                   height="600" 
                   frameBorder="0" 
                   allowTransparency
                   scrolling="no"
                   style={{ minHeight: '600px', display: 'block' }}
                 />
              </div>
            ))}
            <div className="w-[10%] min-h-[620px] shrink-0"></div>
         </div>
      </div>

    </section>
  );
}
