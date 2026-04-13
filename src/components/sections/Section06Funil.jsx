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
    <section className="snap-section bg-white relative p-0 flex flex-col">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, #00B5C5 0%, transparent 70%)' }} />
      <div className="bg-dots" />

      {/* Top: 15vh Título */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[15vh] flex flex-col justify-end px-[5%] pb-2 shrink-0">
        <div className="text-xs text-[#1D3557]/40 font-montserrat uppercase tracking-widest font-bold mb-2">06 / 09</div>
        <motion.h2 
           className="font-impact text-[#1D3557] text-4xl md:text-5xl leading-tight"
           initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
        >
          Funil de aquisição gratuito
        </motion.h2>
      </div>

      {/* Mid 1: 30vh Diagrama Funil */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[30vh] flex items-center justify-center px-[5%] py-4 shrink-0">
         <motion.div 
            className="w-full lg:w-[70%] flex items-center justify-between relative bg-white border border-gray-100 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] p-6 h-full overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
         >
            {/* Arrows SVG */}
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
              { num: 2, title: 'Vibe Coding', desc: 'Consumo do conteúdo libera o curso de automação', metric: 'Aumento de consciência' },
              { num: 3, title: 'Produto Pago', desc: 'Oferta da solução AI First / Consultoria completa', metric: 'Conversão em venda' }
            ].map((st, i) => (
               <div key={i} className="flex-1 text-center z-10 bg-white/90 px-4 py-3 h-full flex flex-col justify-center gap-2 backdrop-blur-sm rounded">
                 <div className="w-12 h-12 rounded-full bg-[#1D3557] text-white flex items-center justify-center font-impact text-xl mx-auto shadow-md ring-4 ring-[#00B5C5]/20">
                   {st.num}
                 </div>
                 <h4 className="font-montserrat font-extrabold text-[15px] md:text-[16px] text-[#1D3557] leading-tight">{st.title}</h4>
                 <p className="text-[12px] xl:text-[13px] text-gray-600 font-lato leading-relaxed max-w-[200px] mx-auto">{st.desc}</p>
                 <div className="mt-auto pt-1">
                    <span className="font-montserrat px-3 py-1 bg-[#00B5C5]/10 text-[#00B5C5] rounded font-bold text-[9px] uppercase tracking-wider">{st.metric}</span>
                 </div>
               </div>
            ))}
         </motion.div>
      </div>

      {/* Mid 2: Youtube Players Real Embeds */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto min-h-[15vh] flex gap-6 px-[5%] py-4 justify-center shrink-0">
         <div className="w-1/2 lg:w-[35%] bg-transparent rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center relative p-1 overflow-hidden">
            <iframe
              width="100%"
              height="240"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Exemplo de Funil CPL 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '8px' }}
            />
         </div>
         <div className="w-1/2 lg:w-[35%] bg-transparent rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center relative p-1 overflow-hidden">
            <iframe
              width="100%"
              height="240"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Exemplo de Funil CPL 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '8px' }}
            />
         </div>
      </div>

      {/* Bot 3: Reels Carousel (Instagram Corrected Formats) */}
      <div className="relative z-10 w-full flex-1 flex flex-col pt-4 max-w-[1400px] mx-auto overflow-visible pb-2 min-h-[40vh]">
         <div className="w-full px-[5%] flex items-center justify-between mb-3 shrink-0">
           <span className="font-montserrat text-[#1D3557] text-[11px] font-bold uppercase tracking-[0.2em] pl-3 border-l-[3px] border-[#FF6B35]">Exemplos Curtos em Reels</span>
           <div className="flex gap-2">
             <button onClick={scrollLeft} className="p-1.5 bg-[#f2f2f2] hover:bg-[#00B5C5] hover:text-white transition-colors rounded-full text-[#1D3557]"><ChevronLeft size={16}/></button>
             <button onClick={scrollRight} className="p-1.5 bg-[#f2f2f2] hover:bg-[#00B5C5] hover:text-white transition-colors rounded-full text-[#1D3557]"><ChevronRight size={16}/></button>
           </div>
         </div>
         
         <div ref={scrollRef} className="w-full h-[550px] overflow-x-auto overflow-y-visible flex gap-4 px-[5%] custom-scrollbar snap-x snap-mandatory pt-1" style={{ scrollbarWidth: 'none' }}>
            {reelsLinks.map((code, idx) => (
              <div key={idx} className="shrink-0 w-[330px] rounded-lg border border-gray-200 bg-transparent relative snap-center flex justify-center h-[540px]">
                 <iframe 
                   src={`https://www.instagram.com/reel/${code}/embed/`}
                   width="100%" 
                   height="540" 
                   frameBorder="0" 
                   allowTransparency
                   scrolling="no"
                   className="bg-transparent shadow-sm rounded-lg"
                   style={{ minHeight: '540px', borderRadius: '8px' }}
                 />
              </div>
            ))}
            <div className="w-[10%] h-[540px] shrink-0"></div>
         </div>
      </div>

    </section>
  );
}
