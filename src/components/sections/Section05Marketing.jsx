import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Mail, Heart, MessageCircle, Send } from 'lucide-react';
import { useRef } from 'react';

export default function Section05Marketing() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
  };

  const instagramLinks = [
    "https://www.instagram.com/p/DV6_V4NDJx4/",
    "https://www.instagram.com/p/DVhfazNDNF_/",
    "https://www.instagram.com/p/DVhfajFjFTY/",
    "https://www.instagram.com/p/DVNp29cjIyI/"
  ];

  return (
    <section className="snap-section bg-[#1D3557] relative flex flex-col py-0 px-0">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-ct-accent blur-[80px] opacity-15 pointer-events-none" />
      <div className="bg-dots-white" />

      {/* Top (20vh) */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[20vh] flex flex-col justify-end px-[5%] pb-4 shrink-0">
        <div className="text-xs text-white/40 uppercase tracking-widest font-bold mb-2">05 / 09</div>
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="font-display font-extrabold text-white text-4xl md:text-5xl leading-tight">Estratégia de marketing</h2>
          <div className="w-12 h-1 bg-ct-accent mt-3" />
        </motion.div>
      </div>

      {/* Mid (40vh) - Mockups */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[35vh] flex gap-10 px-[5%] items-center justify-center shrink-0">
         
         {/* Mockup Newsletter Esq */}
         <motion.div 
           className="w-1/2 max-w-[420px] h-[90%] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
           initial={{ x: -30, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: true }}
         >
           <div className="bg-[#111] text-white p-3 flex items-center justify-between shrink-0">
              <span className="font-body text-[12px] font-bold uppercase tracking-wider flex items-center gap-2"><Mail size={14}/> Caixa de Entrada</span>
              <span className="text-[10px] text-gray-400">AGORA</span>
           </div>
           <div className="p-4 bg-gray-50 border-b border-gray-100 shrink-0">
              <h4 className="font-bold text-[14px] text-[#333]">IA para PMEs — Semana 42</h4>
              <p className="text-[11px] text-gray-500">newsletter@crescitech.com</p>
           </div>
           <div className="p-4 flex-1 flex flex-col gap-4 overflow-hidden bg-white">
             {/* Header Image Fake */}
             <div className="w-full h-24 bg-[#1D3557] rounded-md flex items-center justify-center relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-dots opacity-20"></div>
                <span className="text-[#00B5C5] font-display font-extrabold text-[20px] relative z-10 tracking-[0.2em]">CRESCITECH</span>
             </div>
             <div className="flex flex-col gap-2">
                 <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                 <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
                 <div className="w-full h-2 bg-gray-200 rounded-full mt-2"></div>
             </div>
           </div>
         </motion.div>

         {/* Mockup Instagram Reformulado Dir */}
         <motion.div 
           className="w-[320px] h-[90%] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-gray-200 shrink-0 border-t-4 border-t-[#00B5C5]"
           initial={{ x: 30, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
         >
            <div className="p-3 bg-white flex items-center gap-3 shrink-0">
               <div className="w-8 h-8 rounded-full bg-[#1D3557] flex justify-center items-center font-bold text-[#00B5C5] text-[12px] uppercase">CR</div>
               <span className="font-bold text-[13px] text-black w-full flex justify-between items-center">
                 crescitech <span className="text-[18px] mb-1">...</span>
               </span>
            </div>
            {/* Foto simulada com identid visual */}
            <div className="w-full flex-1 bg-[#1D3557] relative flex flex-col items-center justify-center px-6 text-center overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-ct-accent/40 blur-[30px]" />
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F5A800]/20 blur-[30px]" />
               
               <h3 className="font-display font-extrabold text-white text-[22px] leading-tight z-10 uppercase tracking-tighter">
                 Como escalar a advocacia faturando <span className="text-[#00B5C5]">mais</span>
               </h3>
               
               <div className="absolute top-3 right-3 text-[10px] uppercase font-bold bg-[#F5A800] text-black px-2 py-0.5 rounded shadow">PMEs</div>
               <div className="absolute bottom-3 text-[10px] text-white/50 tracking-wider font-body">ARRASTE PARA O LADO</div>
            </div>
            {/* Actions */}
            <div className="px-4 py-3 bg-white flex gap-3 shrink-0 text-black">
               <Heart size={20} className="hover:text-red-500 cursor-pointer transition-colors" /> 
               <MessageCircle size={20} /> <Send size={20} />
            </div>
         </motion.div>

      </div>

      {/* Bot (45vh) - Carrossel de Iframes Instgrm */}
      <div className="relative z-10 w-full pt-[2vh] flex-1 flex flex-col min-h-[40vh]">
         {/* Carousel Header */}
         <div className="w-full max-w-[1400px] mx-auto px-[5%] flex items-center justify-between mb-3">
           <span className="text-white/60 text-[11px] font-bold uppercase tracking-[0.2em] pl-3 border-l-[3px] border-[#00B5C5]">Feed Instagram Orgânico</span>
           <div className="flex gap-2">
             <button onClick={scrollLeft} className="p-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white cursor-pointer select-none ring-1 ring-white/20"><ChevronLeft size={16}/></button>
             <button onClick={scrollRight} className="p-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white cursor-pointer select-none ring-1 ring-white/20"><ChevronRight size={16}/></button>
           </div>
         </div>
         
         {/* Carousel scrollable area */}
         <div 
           ref={scrollRef}
           className="w-full h-full overflow-x-auto overflow-y-hidden flex gap-6 px-[5%] custom-scrollbar pb-6 pl-[5%] snap-x snap-mandatory items-start"
           style={{ scrollbarWidth: 'none' }}
         >
            {instagramLinks.map((link, idx) => (
              <div key={idx} className="shrink-0 w-[330px] rounded border border-white/5 bg-black/40 overflow-hidden relative snap-center flex justify-center min-h-[480px]">
                 {/* 
                   Renderiza iframe terminando em embed direto para não depender do script falho nativo.
                   Fica blindado, alto e robusto. 
                 */}
                 <iframe 
                   src={`${link}embed/`} 
                   width="326" 
                   height="480"
                   frameBorder="0" 
                   scrolling="no"
                   className="mt-0 pt-0 bg-white shadow-xl min-h-[480px]"
                 />
              </div>
            ))}
            {/* Espaçador final para não colar na direita */}
            <div className="w-[10%] shrink-0"></div>
         </div>
      </div>
    </section>
  );
}
