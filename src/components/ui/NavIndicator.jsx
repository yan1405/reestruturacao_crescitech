import { motion } from 'framer-motion';

export default function NavIndicator({ current, onChange }) {
  const points = Array.from({ length: 10 });
  
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {points.map((_, index) => {
        const isActive = current === index;
        const activeColor = index === 3 ? 'bg-fr-yellow' : 'bg-ct-accent';
        
        return (
          <motion.div
            key={index}
            onClick={() => onChange(index)}
            className={`rounded-full cursor-pointer transition-colors duration-300 ${
              isActive ? activeColor : 'bg-white bg-opacity-40'
            }`}
            animate={{
              width: isActive ? 12 : 8,
              height: isActive ? 12 : 8,
              opacity: isActive ? 1 : 0.4
            }}
            whileHover={{ scale: 1.2 }}
          />
        );
      })}
    </div>
  );
}
