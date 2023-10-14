import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="inicio" className="mt-16 flex flex-col items-center justify-center min-h-[80vh] bg-white p-4 lg:grid lg:grid-cols-2 lg:gap-6">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        ref={ref}
        className="flex justify-center w-full"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={inView ? { rotate: 90 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/bg.png"
            width={700}
            height={1000}
            alt="Spider Image"
            className="border rounded-xl shadow-white"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center w-full mt-8 space-y-6 text-white"
      >
        <h1 className="text-3xl font-bold tracking-wider text-black lg:text-4xl xl:text-5xl">
          Poderosas soluciones digitales con Prometheus
        </h1>
        <h2 className="text-xl text-black lg:text-2xl">
          Somos un equipo de talento digital.
        </h2>
        <Link href="">
          <Button color="primary" size="large" isLoading className="mt-4">
            <span className="text-white">Cotizar</span>
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
