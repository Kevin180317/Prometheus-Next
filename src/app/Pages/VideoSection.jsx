import React from "react";

function VideoSection() {
  return (
    <div className="flex flex-col h-screen">
      <div className="relative w-full h-screen">
        <video
          className="w-screen h-screen"
          autoPlay
          muted
          loop
          style={{ objectFit: "cover" }}
        >
          <source src="/video.mov" type="video/mp4" />
        </video>
        <div className="absolute left-0 flex flex-col items-start justify-center w-full h-full p-24 -bottom-80">
          <h2 className="hidden text-5xl font-bold text-white md:block">
            El futuro de la conexión digital
          </h2>
          <p className="hidden mb-4 text-2xl text-white md:block">
            Estamos trascendiendo las pantallas 2D e incursionando en
            experiencias envolventes en el metaverso para dar
            <br />
            forma a la próxima evolución de la tecnología social.
          </p>
          <button className="hidden px-4 py-2 font-bold text-white bg-blue-600 md:block rounded-2xl hover:bg-blue-800">
            Más información
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
