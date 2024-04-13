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
        <h1 className="my-4 text-4xl text-center text-black uppercase">{id}</h1>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {path
              .filter((app) => app.id === id)
              .map((app, index) => (
                <>
                  <div key={index + "a"}>
                    <img src={app.image1} className="w-full" alt="" />
                  </div>
                  <div key={index + "b"}>
                    <img src={app.image2} className="w-full" alt="" />
                  </div>
                  <div key={index + "c"}>
                    <img src={app.image3} className="w-full" alt="" />
                  </div>
                </>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
