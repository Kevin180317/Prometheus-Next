import React, { useRef, useState } from "react";
import {
  BeakerIcon,
  LockClosedIcon,
  GlobeAltIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";

function AboutSection() {
  const ref = useRef();
  const isInView = useInView(ref);
  const [selectedCard, setSelectedCard] = useState(null); 

  const cards = [
    {
      Icon: BeakerIcon,
      title: "Desarrollo de Apps",
      description: "Información detallada sobre desarrollo de apps...",
    },
    {
      Icon: LockClosedIcon,
      title: "Desarrollo de prototipos",
      description: "Información detallada sobre desarrollo de prototipos...",
    },
    {
      Icon: GlobeAltIcon,
      title: "Desarrollo Web",
      description: "Información detallada sobre desarrollo web...",
    },
    {
      Icon: MagnifyingGlassCircleIcon,
      title: "Grabado Láser",
      description: "Información detallada sobre grabado láser...",
    },
  ];

  return (
    <section id="servicios"
    className="flex flex-col items-center justify-center w-full bg-white border-t border-black mt-80"
    ref={ref}
    >
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="px-12 mt-12 mb-24 text-5xl font-bold text-black md:text-6xl lg:text-7xl"
      >
        Mira nuestros servicios
      </motion.h1>

      <div className="grid w-full max-w-screen-lg grid-cols-1 gap-8 px-4 border rounded-full md:grid-cols-2 lg:grid-cols-4">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center p-6 transition duration-300 transform border bg-black shadow-large cursor-pointer rounded-xl justify-between bg-opacity-90 hover:-translate-y-1 hover:shadow-lg ${
              selectedCard === index ? "h-[300px]" : "h-[200px]"
            }`}
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() =>
              setSelectedCard(selectedCard === index ? null : index)
            }
          >
            <item.Icon className="w-10 h-10 mb-4 text-white md:w-12 md:h-12 lg:w-14 lg:h-14" />
            <span className="text-base text-white md:text-lg lg:text-xl">{item.title}</span>
            {selectedCard === index && (
              <div className="mt-4 text-xs text-gray-300 md:text-sm">
                {item.description}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
