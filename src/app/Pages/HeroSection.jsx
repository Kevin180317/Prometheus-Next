import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const HeroSection = () => {
  // const ref = useRef(null);
  // const inView = useInView(ref);

  return (
    <section
      id="inicio"
      className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center min-h-[80vh] bg-white p-4"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center w-full"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 90 }}
          transition={{ duration: 2 }}
          className="w-full h-auto mx-auto lg:order-2 lg:w-full"
        >
           <Image
            src="/bg.png"
            width={100}
            height={700}
            alt="Spider Image"
            className="w-full border rounded-xl shadow-white"
          /> 
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center w-full mt-8 text-center lg:mt-0 lg:text-left"
      >
        <h1 className="text-3xl font-bold tracking-wider text-black lg:text-4xl xl:text-5xl">
          Poderosas soluciones digitales con Prometheus
        </h1>
        <h2 className="text-xl text-black lg:text-2xl">
          Somos un equipo de talento digital.
        </h2>
        <Link href="">
          <Button
            color="primary"
            size="large"
            isLoading
            className="mx-auto mt-4 text-center lg:mx-0"
          >
            <span className="text-white">Cotizar</span>
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;