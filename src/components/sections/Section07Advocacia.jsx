import { motion } from 'framer-motion';
import { Search, Folder, MessageSquare } from 'lucide-react';

export default function Section07Advocacia() {
  return (
    <section className="snap-section bg-[#1D3557] relative p-0 flex flex-col pt-[5vh] pb-[3vh]">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#FF6B35] blur-[80px] opacity-15 pointer-events-none" />
      <div className="bg-dots-white" />

      {/* Top: 15vh Title */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[15vh] flex flex-col justify-end px-[5%] shrink-0 pb-4">
        <div className="text-xs text-white/40 uppercase tracking-widest font-montserrat font-bold mb-2">07 / 09</div>
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="font-impact text-white text-5xl leading-tight tracking-normal">Escritórios de Advocacia</h2>
          <div className="w-12 h-1 bg-[#FF6B35] mt-2" />
        </motion.div>
      </div>

      {/* Mid: 35vh Blocks and Data Card */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[35vh] flex gap-6 px-[5%] items-center shrink-0">
          
          <motion.div className="flex-1 bg-white/5 border border-white/10 p-8 shadow-xl h-[90%] flex flex-col justify-center" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
             <span className="font-montserrat text-[11px] uppercase font-bold tracking-[0.2em] text-[#FF6B35] mb-4">O Problema</span>
             <h3 className="font-impact text-white text-3xl mb-3 tracking-normal">Resistência e Repetitividade</h3>
             <p className="font-lato text-white/90 text-[15px] leading-relaxed">
               Volume insano de documentos, rotinas repetitivas e resistência cultural crônica à adoção de tecnologias e inteligência artificial nas bancas.
             </p>
          </motion.div>
          
          <motion.div className="flex-1 bg-[#00B5C5]/10 border border-[#00B5C5]/30 p-8 shadow-xl h-[90%] flex flex-col justify-center relative" initial={{ y: 30, opacity: 0, delay: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
             <span className="font-montserrat text-[11px] uppercase font-bold tracking-[0.2em] text-[#00B5C5] mb-4">A Solução</span>
             <h3 className="font-impact text-white text-3xl mb-3 tracking-normal">Programa IA + Cultura</h3>
             <p className="font-lato text-white/90 text-[15px] leading-relaxed">
               Prompt library proprietária para advogados. Fluxos que cortam horas diárias automatizando triagens e jurisprudências de forma rápida e segura.
             </p>
             <div className="absolute top-4 right-4 bg-white text-[#1D3557] px-2 py-1 rounded text-[10px] font-bold uppercase shadow-sm font-montserrat">
                Citação ou ref: Dr. Leo Bento
             </div>
          </motion.div>

          {/* Data Card (Scale 0 to 1 Animation delayed) */}
          <motion.div 
             className="w-[28%] bg-[#FF6B35] text-white p-6 shadow-2xl h-[90%] flex flex-col justify-center text-center rounded-xl origin-center" 
             initial={{ scale: 0, opacity: 0 }} 
             whileInView={{ scale: 1, opacity: 1 }} 
             transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }} 
             viewport={{ once: true }}
          >
             <span className="font-impact text-7xl xl:text-8xl tracking-tight mb-2">12h</span>
             <span className="font-montserrat font-bold text-[15px] xl:text-[18px] leading-tight">Médias semanais</span>
             <p className="text-[13px] mt-2 text-white/90 font-lato">Salvas por advogado com uso eficaz e contínuo da IA nos processos básicos.</p>
          </motion.div>

      </div>

      {/* Bot: 50vh Mockup Prompt Library + YT Player */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex-1 flex gap-8 px-[5%] mt-4 pb-[2vh] items-stretch min-h-[40vh]">
         
         <motion.div className="w-[60%] bg-[#F9FAFB] rounded-xl overflow-hidden shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] border border-gray-200 flex flex-col h-full" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-[#1D3557] px-4 py-3 flex items-center justify-between shadow-md shrink-0">
               <span className="text-white font-bold font-montserrat text-[12px] uppercase tracking-wider">Prompt Library IA Jurídica</span>
               <div className="flex gap-2">
                 <div className="w-40 xl:w-56 bg-white/10 rounded border border-white/20 flex items-center px-2 py-1.5">
                   <Search size={12} className="text-white/60" />
                   <span className="font-lato text-[10px] xl:text-[12px] text-white/60 ml-2">Buscar prompt exato...</span>
                 </div>
               </div>
            </div>
            
            <div className="flex flex-1 overflow-hidden">
               <div className="w-1/3 border-r border-gray-200 bg-white p-3 flex flex-col gap-2 shrink-0">
                  <div className="flex items-center gap-2 p-2 bg-[#1D3557]/5 rounded cursor-pointer text-[#1D3557] border border-[#1D3557]/10">
                     <Folder size={14}/> <span className="font-montserrat text-[12px] font-bold">Análise Contratos</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer text-gray-500">
                     <Folder size={14}/> <span className="font-montserrat text-[12px] font-medium">Revisão Petições</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer text-gray-500">
                     <Folder size={14}/> <span className="font-montserrat text-[12px] font-medium">Draft e Pareceres</span>
                  </div>
               </div>
               
               <div className="w-2/3 bg-[#F9FAFB] p-5 overflow-y-auto custom-scrollbar flex flex-col gap-4">
                  <div className="bg-white border text-left border-gray-200 shadow-sm rounded-lg p-4">
                     <h4 className="font-montserrat font-bold text-[#1D3557] text-[14px] flex items-center gap-2"><MessageSquare size={16}/> Risco Contratual</h4>
                     <p className="font-lato text-[12px] text-gray-500 mt-2 bg-gray-50 p-2 border border-gray-100 rounded leading-relaxed italic">
                       "Atue como um revisor jurídico sênior focado na legislação brasileira. Analise este contrato abaixo e destaque riscos."
                     </p>
                  </div>
                  <div className="bg-white border text-left border-gray-200 shadow-sm rounded-lg p-4">
                     <h4 className="font-montserrat font-bold text-[#1D3557] text-[14px] flex items-center gap-2"><MessageSquare size={16}/> Resumo de Jurisprudência</h4>
                     <p className="font-lato text-[12px] text-gray-500 mt-2 bg-gray-50 p-2 border border-gray-100 rounded leading-relaxed italic">
                       "Sintetize essas decisões do STJ filtrando as de maior relevância probatória, citando ementas chaves."
                     </p>
                  </div>
               </div>
            </div>
         </motion.div>

         {/* YT Player Embed Real */}
         <motion.div className="w-[40%] bg-transparent rounded-xl shadow-2xl overflow-hidden p-0 flex flex-col h-full" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
             <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Caso Real IA na Advocacia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '8px', minHeight: '100%' }}
             />
         </motion.div>

      </div>
    </section>
  );
}
