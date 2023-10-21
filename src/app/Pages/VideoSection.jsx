import React from 'react';

function VideoSection() {
  return (
    <div className='flex flex-col justify-center h-screen mt-8 border-t border-black'>
      <h1>VideoSection</h1>
      <div className='video-background'>
        <video className='mx-auto' autoPlay muted loop>
          <source src='/video.mov' type='video/mp4' />
        </video>
      </div>
    </div>
  );
}

export default VideoSection;