import React from 'react';
import ReactPlayer from 'react-player';

function VideoSection() {
  return (
    <div className='border-t border-black'>
      <h1>VideoSection</h1>
      <ReactPlayer
        url="/gif.mp4" // La URL del video que deseas reproducir
        width='100%' // Usar el 100% del ancho disponible
        height='100vh' // Usar el 100% de la altura disponible (pantalla completa)
        playing // Reproducir automáticamente al cargar la página
        loop={true} // Repetir el video una y otra vez
        
      />
    </div>
  );
}

export default VideoSection;
