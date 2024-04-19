import Carrousel from "../../components/Carrousel";

export function generateStaticParams() {
  return [{ id: "petsafe" }, { id: "recipe-book" }];
}

export default function Page({ params }) {
  const { id } = params;
  const path = [
    {
      id: "petsafe",
      image1: "/1.png",
      image2: "/2.png",
      image3: "/3.png",
    },
    {
      id: "recipe-book",
      image1: "/1.1.png",
      image2: "/1.2.png",
      image3: "/1.3.png",
    },
  ];

  return (
    <main>
      <section>
        <div className="flex items-center justify-center w-full bg-black">
          <img src="/Artboard 2.png" className="w-full" alt="" />
        </div>
        <h1 className="my-4 text-xl text-center text-black uppercase md:text-7xl">
          Apps: {id}
        </h1>

        <Carrousel path={path} id={id} />
      </section>
    </main>
  );
}
