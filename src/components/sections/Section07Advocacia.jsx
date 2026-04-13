import { motion } from 'framer-motion';
import { Search, Folder, MessageSquare } from 'lucide-react';

export default function Section07Advocacia() {
  return (
    <section className="snap-section bg-[#111c2a] relative p-0 flex flex-col pt-[5vh] pb-[3vh]">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#F5A800] blur-[150px] opacity-[0.08] pointer-events-none" />
      <div className="bg-dots-white" />

      {/* Top: 15vh Title */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[15vh] flex flex-col justify-end px-[5%] shrink-0 pb-4">
        <div className="text-xs text-white/40 uppercase tracking-widest font-montserrat font-bold mb-2">07 / 09</div>
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="font-impact text-white text-5xl leading-tight tracking-normal">Escritórios de Advocacia</h2>
          <div className="w-12 h-1 bg-[#F5A800] mt-2" />
        </motion.div>
      </div>

      {/* Mid: 35vh Blocks and Data Card */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto h-[35vh] flex gap-6 px-[5%] items-center shrink-0">
          
          <motion.div className="flex-1 bg-[#0f151f] border border-white/5 p-8 shadow-xl h-[90%] flex flex-col justify-center rounded-xl" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
             <span className="font-montserrat text-[13px] uppercase font-bold tracking-[0.2em] text-white/40 mb-4">O Problema</span>
             <h3 className="font-impact text-white text-3xl mb-3 tracking-normal">Resistência e Repetitividade</h3>
             <p className="font-lato text-white/80 text-[14px] leading-relaxed">
               Volume insano de documentos, rotinas repetitivas e resistência cultural crônica à adoção de tecnologias e inteligência artificial nas bancas.
             </p>
          </motion.div>
          
          <motion.div className="flex-1 bg-[#00B5C5]/10 border border-[#00B5C5]/20 p-8 shadow-xl h-[90%] flex flex-col justify-center relative rounded-xl" initial={{ y: 30, opacity: 0, delay: 0.2 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
             <span className="font-montserrat text-[13px] uppercase font-bold tracking-[0.2em] text-[#00B5C5] mb-4">A Solução</span>
             <h3 className="font-impact text-white text-3xl mb-3 tracking-normal">Programa IA + Cultura</h3>
             <p className="font-lato text-white/80 text-[14px] leading-relaxed">
               Prompt library proprietária para advogados. Fluxos que cortam horas diárias automatizando triagens e jurisprudências de forma rápida e segura.
             </p>
          </motion.div>

          {/* Data Card (Scale 0 to 1 Animation delayed) */}
          <motion.div 
             className="w-[28%] bg-[#F5A800] text-[#0D0D0D] p-6 shadow-2xl h-[90%] flex flex-col justify-center text-center rounded-xl origin-center" 
             initial={{ scale: 0, opacity: 0 }} 
             whileInView={{ scale: 1, opacity: 1 }} 
             transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }} 
             viewport={{ once: true }}
          >
             <span className="font-impact text-7xl xl:text-8xl tracking-tight mb-2">12h</span>
             <span className="font-montserrat font-bold text-[15px] xl:text-[18px] leading-tight text-[#0D0D0D]">Médias semanais</span>
             <p className="text-[13px] mt-2 text-[#0D0D0D]/80 font-lato">Salvas por advogado com uso contínuo da IA nos processos básicos.</p>
          </motion.div>

      </div>

      {/* Bot: 50vh Mockup Prompt Library + YT Placeholder */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex-1 flex gap-8 px-[5%] mt-4 pb-[2vh] items-stretch min-h-[40vh]">
         
         <motion.div 
           className="w-[60%] flex flex-col h-full bg-[#0f1923] p-4 rounded-[8px]" 
           initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
         >
            {/* Header: Mockup Search */}
            <div className="bg-[#1a2535] px-3 py-2 flex items-center justify-between rounded shadow-md shrink-0 border border-white/5 mb-3">
               <div className="flex gap-2 items-center flex-1">
                 <Search size={14} className="text-white/40" />
                 <span className="font-lato text-[13px] text-white/40">Buscar prompt jurídico...</span>
               </div>
            </div>
            
            {/* Tabs */}
            <div className="flex gap-2 mb-4 shrink-0">
               <div className="px-3 py-1.5 bg-[#00B5C5]/20 text-[#00B5C5] rounded font-montserrat font-[600] text-[12px] border border-[#00B5C5]/30">Contratos</div>
               <div className="px-3 py-1.5 bg-white/5 text-white/60 rounded font-montserrat font-[600] text-[12px] hover:bg-white/10 cursor-pointer">Petições</div>
               <div className="px-3 py-1.5 bg-white/5 text-white/60 rounded font-montserrat font-[600] text-[12px] hover:bg-white/10 cursor-pointer">Pareceres</div>
            </div>
            
            {/* Prompts Layout */}
            <div className="flex flex-col gap-3 flex-1 overflow-y-auto custom-scrollbar">
               
               {/* Prompt 1 */}
               <div className="bg-[#1a2535] border text-left border-white/5 shadow-sm rounded-lg p-4">
                  <h4 className="font-montserrat font-[600] text-white text-[14px]">Revisão de cláusula contratual</h4>
                  <p className="font-lato text-[13px] text-white/60 mt-1 mb-3 leading-relaxed">
                    Instrução fictícia de acionamento do revisor textual e apontamento legal em contratos longos. Identifique as multas padrão na minuta...
                  </p>
                  <div className="inline-flex items-center bg-[#F5A800]/10 text-[#F5A800] font-montserrat font-[600] text-[12px] px-2 py-0.5 rounded">
                     Saída: análise em tópicos
                  </div>
               </div>

               {/* Prompt 2 */}
               <div className="bg-[#1a2535] border text-left border-white/5 shadow-sm rounded-lg p-4">
                  <h4 className="font-montserrat font-[600] text-white text-[14px]">Petição inicial — dano moral</h4>
                  <p className="font-lato text-[13px] text-white/60 mt-1 mb-3 leading-relaxed">
                    Crie o escopo de uma petição inicial de dano moral utilizando precedentes jurispridenciais relevantes de acordo com a premissa XPTO...
                  </p>
                  <div className="inline-flex items-center bg-[#00B5C5]/10 text-[#00B5C5] font-montserrat font-[600] text-[12px] px-2 py-0.5 rounded">
                     Saída: estrutura completa
                  </div>
               </div>

            </div>
         </motion.div>

         {/* YT Player Embed Replace using Exact Reference Placeholder */}
         <motion.div className="w-[40%] bg-transparent rounded-xl flex flex-col h-full" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
             <div style={{
                width: '100%',
                height: '240px',
                background: '#1a1a2e',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.1)'
             }}>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Lato', fontSize: '14px' }}>
                  Vídeo de referência — link a inserir
                </span>
             </div>
         </motion.div>

      </div>
    </section>
  );
}
