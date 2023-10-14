import React, { useState, useEffect } from "react";
import { Drawer, Typography, IconButton, Input, Textarea, Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { name: "Inicio", link: "#inicio" },
    { name: "Servicios", link: "#servicios" },
    { name: "Somos", link: "#somos" },
    { name: "Portafolio", link: "#portafolio" },
    { name: "Contacto", link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.link);
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) {
          const y = element.getBoundingClientRect().top;
          if (y <= 50) currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e, section) => {
    if (section === "contact") {
      e.preventDefault();
      setOpen(true);
      return;
    }

    e.preventDefault();
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };
  return (
    <nav className="fixed top-0 z-50 flex items-center w-full px-6 py-4 bg-black border outline-red-50">
      <div className="flex-grow text-xl text-white">
        <Image src="/logo.png" width={50} height={50} />
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-between h-6 lg:hidden"
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      <div className={`space-x-8 ${isOpen ? "block" : "hidden"} lg:flex`}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`hover:text-blue-500 ${activeSection === item.link ? "text-blue-500" : ""}`}
            onClick={(e) => handleSmoothScroll(e, item.link)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className="flex items-center justify-between p-4 mb-2">
          <Typography variant="h5" color="blue-gray">
            Contactanos
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={() => setOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <form className="flex flex-col gap-6 p-4">
          <Input type="email" label="Correo" />
          <Input label="Asunto" />
          <Textarea rows={6} label="Mensaje" />
          <Button>Enviar mensaje</Button>
        </form>
      </Drawer>
    </nav>
  );
};

export default Navbar;
