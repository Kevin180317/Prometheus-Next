import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function TeamSection() {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <section
      className="flex flex-col items-center justify-center w-full mt-48 bg-white border-t border-black"
      ref={ref}
      id="somos"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="mt-8 text-5xl font-bold text-black md:text-6xl lg:text-7xl"
      >
        Somos tu mejor aliado.
      </motion.h1>

      <div className="flex flex-col items-start justify-around w-full max-w-screen-xl space-y-8 md:space-y-0 md:flex-row">
        {/* Columna de texto con íconos */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col mt-16 space-y-4"
        >
          {[
            { text: 'Funcionamos con mucho café y tu dinero.', icon: '☕' }, 
            { text: 'Funcionamos con mucho café y tu dinero.', icon: '🔧' }, 
            { text: 'Funcionamos con mucho café y tu dinero.', icon: '🔨' }, 
          ].map((item, index) => (
            <div key={index} className="flex items-center mt-8 space-x-2 md:mt-28">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-lg text-black md:text-xl">{item.text}</p>
            </div>
          ))}
        </motion.div>
        
        {/* Columna de imagen */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Image src="/team.jpg" alt="Descripción de la imagen" height={500} width={500} className="h-auto mt-8 md:mt-28" />
        </motion.div>
      </div>
    </section>
  );
}

export default TeamSection;
