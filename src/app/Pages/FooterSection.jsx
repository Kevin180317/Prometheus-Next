import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const LINKS = [
  {
    items: [
      { name: "Servicios", href: "#servicios" },
      { name: "Somos", href: "#somos" },
      { name: "Portafolio", href: "#portafolio" },
    ],
  },
];

export default function Footer() {

  const handleSmoothScroll = (e, section) => {
    e.preventDefault();
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full mt-8 border-t border-black">
      <div className="flex flex-row flex-wrap items-center justify-center mt-8 text-center bg-white gap-y-6 gap-x-12 md:justify-between">
        <img src="/logo.png" alt="logo-ct" className="w-16" />
        <div>
          {LINKS.map(linkSection => (
            <div>
              <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                {linkSection.items.map(link => (
                  <li key={link.name}>
                    <Typography
                      as="a"
                      href={link.href}
                      color="blue-gray"
                      className="text-xl font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                    >
                      {link.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-2xl font-normal text-center">
        &copy; 2023 PrometheusTij
      </Typography>
    </footer>
  );
}
