import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

function page() {
  const apps = [
    {
      img: "/Tablas.jpg",
      title: "Tablas",
      description: "Descripción de la web 1...",
      href: "/prototipos/tablas",
    },
    {
      img: "/Prototipado.jpg",
      title: "Prototipado",
      description: "Descripción de la web 2...",
      href: "/prototipos/prototipado",
    },
    {
      img: "/Laser.jpg",
      title: "Laser",
      description: "Descripción de la web 3...",
      href: "/prototipos/laser",
    },
    {
      img: "/3D.jpg",
      title: "Impresiones 3D",
      description: "Descripción de la web 4...",
      href: "/prototipos/3d",
    },
  ];

  return (
    <main>
      <section>
        <div className="flex items-center justify-center w-full bg-black">
          <img src="/Artboard 2.png" className="w-full" alt="" />
        </div>
        <div className="my-16 mb-8">
          <h1 className="mb-8 text-6xl text-center text-black">
            Lista de Prototipos Realizadas
          </h1>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {apps.map((app, index) => (
                <Link href={app.href} key={index}>
                  <Card
                    key={index}
                    isFooterBlurred
                    radius="lg"
                    className="m-4 border-none md:m-12"
                  >
                    <Image
                      alt={app.title}
                      className="object-cover md:h-[700px] md:w-[400px] hover:scale-105 transition-transform duration-500 ease-in-out"
                      src={app.img}
                      width="100%"
                    />
                    <CardFooter className="absolute bottom-0 z-10 w-full py-8 text-center text-white bg-black bg-opacity-50">
                      <p className="text-xl">{app.title}</p>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
