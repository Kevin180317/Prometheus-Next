import Carrousel from "../../components/Carrousel";

export function generateStaticParams() {
  return [{ id: "prototipo" }, { id: "laser" }, { id: "3d" }];
}

export default function Page({ params }) {
  const { id } = params;
  const path = [
    {
      id: "prototipo",
      image1: "/protipo1.jpg",
      image2: "/protipo2.jpg",
      image3: "/protipo3.jpg",
    },
    {
      id: "laser",
      image1: "/laser1.jpg",
      image2: "/laser2.jpg",
      image3: "/laser3.jpg",
    },
    {
      id: "3d",
      image1: "/3d_1.jpg",
      image2: "/3d_2.jpg",
      image3: "/3d_3.jpg",
    },
  ];

  return (
    <main>
      <section>
        <div className="flex items-center justify-center w-full bg-black">
          <img src="/Artboard 1.png" className="w-full" alt="" />
        </div>
        <h1 className="my-4 text-xl text-center text-black uppercase md:text-7xl">
          Prototipado: {id}
        </h1>

        <Carrousel path={path} id={id} />
      </section>
    </main>
  );
}
