import Image from "next/image";
import React from "react";
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
        <Image
          src="/logo.png"
          alt="logo-ct"
          className="w-16"
          width={40}
          height={50}
        />
        <div>
          {LINKS.map((linkSection, index) => (
            <div key={index}>
              <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                {linkSection.items.map((link) => (
                  <li key={link.name}>
                    <p
                      as="a"
                      href={link.href}
                      color="blue-gray"
                      className="text-xl font-normal text-black transition-colors hover:text-blue-500 focus:text-blue-500"
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                    >
                      {link.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <p
        color="blue-gray"
        className="text-2xl font-normal text-center text-black"
      >
        &copy; 2023 PrometheusTij
      </p>
    </footer>
  );
}
