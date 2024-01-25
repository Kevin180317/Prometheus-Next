import React from 'react';

function VideoSection() {
  return (
    <div className='flex flex-col h-screen'>
      <div className='relative w-full h-screen'>
        <video className='w-screen h-screen' autoPlay muted loop style={{ objectFit: 'cover' }}>
          <source src='/video.mov' type='video/mp4' />
        </video>
        <div className='absolute top-0 left-0 flex flex-col items-start justify-center w-full h-full p-24'>
          <h2 className='text-5xl font-bold text-white'>El futuro de la conexión digital</h2>
          <p className='mb-4 text-2xl text-white'>
          Estamos trascendiendo las pantallas 2D e incursionando en experiencias envolventes en el metaverso para dar<br />forma a la próxima evolución de la tecnología social.
          </p>
          <button className='px-4 py-2 font-bold text-black bg-white rounded-2xl hover:bg-gray-200'>Más información</button>
        </div>
      </div>
    </div>
  );
}

export default VideoSection