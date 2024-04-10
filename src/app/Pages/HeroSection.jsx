import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="grid items-center justify-center min-h-screen grid-cols-1 gap-6 p-4 bg-[#fcfcfc] lg:grid-cols-2"
    >
      <div className="flex items-center justify-center w-full ">
        <motion.div
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: 90 }}
          transition={{ duration: 2, type: "spring" }}
          duration={100}
        >
          <Image
            src="/bg.webp" 
            alt="Hero Image"
            width={750}
            height={300}
            className="object-cover object-center shadow-md rounded-3xl"
          />
        </motion.div>
      </div>

      <div className="flex flex-col justify-center w-full text-center lg:mt-0 lg:text-left">
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
      </div>
    </section>
  );
};

export default HeroSection;
