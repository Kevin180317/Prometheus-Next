import React from "react";
import Link from "next/link";

function AboutSection() {
  const cards = [
    {
      title: "Desarollo de Apps",
      image: "/Layer3.png",
      textColor: "text-white",
      link: "/apps",
    },
    {
      title: "Desarollo Web",
      image: "/layer2.webp",
      textColor: "text-white",
      link: "/web",
    },
    {
      title: "Desarollo de prototipos",
      image: "/layer1.webp",
      textColor: "text-gray-700",
      link: "/prototipos",
    },
  ];

  return (
    <main className="items-center justify-center p-8" id="servicios">
      <h1 className="text-4xl font-bold text-center md:text-6xl">
        Mira nuestro servicios
      </h1>
      <section className="grid grid-cols-1 gap-8 py-16 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card}
            className="relative h-[500px] overflow-hidden shadow-lg rounded-2xl transform transition-transform duration-500 hover:scale-105"
          >
            <Link href={card.link}>
              <div
                className={`absolute z-10 px-6 py-4 right-0 ${card.textColor}`}
              >
                <div className="mb-2 text-2xl font-bold">{card.title}</div>
              </div>
              <img
                className="object-cover w-full h-full"
                src={card.image}
                alt="Cover"
              />
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}

export default AboutSection;
