import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function TeamSection() {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <section
      className="flex flex-col items-center justify-center w-full px-12 py-24 bg-[#fcfcfc] md:px-0"
      ref={ref}
      id="somos"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="px-12 mt-8 text-4xl font-bold text-black md:text-4xl lg:text-6xl"
      >
        Convertimos tus grandes ideas en soluciones impactantes.
      </motion.h1>

        {/* Columna de texto con íconos */}
        <div className="grid grid-cols-1 gap-8 my-24 md:grid-cols-2">
          <div className="space-y-16 md:w-[600px] ">
            <div className="flex items-center gap-4">
              <Image src="/icono1.png" alt="icono" width={50} height={50} />
              <span className="text-xl">Somos una empresa 100% Tijuanense que conoce el dinamismo binacional.</span>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/icono2.png" alt="icono" width={50} height={50} />
              <span className="text-xl">Nuestro grupo de expertos se adaptaran a tus requerimientos.</span>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/icono3.png" alt="icono" width={50} height={50} />
              <span className="text-xl">Te guiaremos para moldear tus mejores ideas en productos innovadores.</span>
            </div>
          </div>
          <div>
            <Image src="/team.webp" className="rounded-lg" alt="team" width={500} height={500} />
          </div>
        </div>
    </section>
  );
}

export default TeamSection;
