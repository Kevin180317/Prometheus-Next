"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carrousel({ path, id }) {
  const filteredApps = path.filter((app) => app.id === id);

  return (
    <div className="flex items-center justify-center">
      {filteredApps.map((app, index) => (
        <Carousel key={index} className="w-full h-[700px]">
          <div className="flex items-center justify-center h-screen md:h-[900px]  p-4 bg-white rounded-lg shadow-md">
            <img
              src={app.image1}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center h-screen md:h-[900px]  p-4 bg-white rounded-lg shadow-md">
            <img
              src={app.image2}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center h-screen md:h-[900px]  p-4 bg-white rounded-lg shadow-md">
            <img
              src={app.image3}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </Carousel>
      ))}
    </div>
  );
}
