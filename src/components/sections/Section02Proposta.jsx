import { motion } from 'framer-motion';

export default function Section02Proposta() {
  return (
    <section className="snap-section bg-[#1D3557] relative">
      {/* Telas escuras (#1D3557): Blobs 300 a 500px diagonal oposta, blur(80px), opacidade 10-20% */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-ct-accent blur-[80px] opacity-15 pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-white blur-[80px] opacity-10 pointer-events-none -translate-x-1/4 translate-y-1/4" />
      
      {/* Ponto sobre blobs */}
      <div className="bg-dots-white" />

      {/* Assinatura periférica vertical */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xs opacity-20 text-white writing-vertical-rl rotate-180 uppercase tracking-widest font-body pointer-events-none">
        CRESCITECH × FRAIDAY 2026
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto w-full h-full flex flex-col justify-between py-[12vh]">
        
        {/* Título Esquerda Top */}
        <div className="flex flex-col text-left mb-auto">
          <div className="text-xs text-white/40 uppercase tracking-widest font-bold mb-8">02 / 09</div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="font-display font-extrabold text-white text-6xl md:text-7xl mb-6 leading-tight">A proposta central</h2>
            <div className="w-12 h-1 bg-white mb-6" />
            <p className="font-body font-light text-ct-secondary text-3xl">Divisão Crescitech e FrAiDay.</p>
          </motion.div>
        </div>

        {/* Metade inferior, conteúdos em blocos condensados assimétricos e opostos */}
        <div className="w-full mt-16 flex flex-col md:flex-row justify-between items-end gap-10 relative">
          <motion.div 
            className="md:w-5/12 border border-white/10 bg-white/5 p-12 backdrop-blur-sm shadow-xl mt-auto self-start"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="font-display font-extrabold text-white text-4xl mb-6">Crescitech</h3>
            <p className="font-body text-[#F2F2F2] font-normal leading-relaxed text-lg">
              100% focada em consultoria e educação em IA para PMEs, executivos e advogados.
            </p>
          </motion.div>

          {/* Spacer */}
          <div className="hidden md:block w-1/12"></div>

          <motion.div 
            className="md:w-5/12 border border-[#0D0D0D]/20 bg-[#0D0D0D]/60 p-12 backdrop-blur-md shadow-xl mt-auto self-end"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="font-display font-extrabold text-[#F5A800] text-4xl mb-6">FrAiDay</h3>
            <p className="font-body text-[#F2F2F2] font-normal leading-relaxed text-lg">
              Subsidiária operando SaaS, automações n8n/WhatsApp, desenvolvimento de sites e sistemas e serviços de AI First para empresas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
