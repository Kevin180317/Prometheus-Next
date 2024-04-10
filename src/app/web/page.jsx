import React from "react";

function page() {
  const apps = [
    {
      img: "/mockup1.png",
      title: "Title 1",
      description: "Descripción de la web 1...",
    },
    {
      img: "/mockup2.png",
      title: "Title 2",
      description: "Descripción de la web 2...",
    },
    {
      img: "/mockup3.png",
      title: "Title 3",
      description: "Descripción de la web 3...",
    },
  ];

  return (
    <main>
      <section>
        <div className="bg-black h-[600px] w-full justify-center items-center flex">
          <img src="/Artboard 3.png" className="w-full" alt="" />
        </div>
        <div className="my-16">
          <h1 className="mb-8 text-6xl text-center text-black">
            Lista de Paginas web Realizadas
          </h1>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {apps.map((app, index) => (
                <div
                  key={index}
                  className="m-12 overflow-hidden bg-white rounded-lg md:w-[350px] shadow-black shadow-md"
                >
                  <div className="flex items-center justify-center h-48 bg-gray-200">
                    <img
                      src={app.img}
                      alt={app.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold">{app.title}</h2>
                    <p className="mt-2 text-2xl text-gray-700">
                      {app.description}
                    </p>
                  </div>
                  <div className="flex justify-start p-4">
                    <button className="px-12 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                      Ver más
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
