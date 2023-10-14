import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-screen bg-black">
            <motion.img
                src="/logo.png"
                alt="Loading Logo"
                initial="out"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                    duration: 0.5,
                    yoyo: Infinity, 
                    ease: "easeInOut", 
                }}
            />
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600"
            >
                ¡Bienvenidos! a Prometheus
            </motion.p>
        </div>
    );
}
