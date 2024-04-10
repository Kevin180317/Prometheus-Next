import React from 'react'
import Image from 'next/image'
function BannerSection() {
  return (
    <div className='flex items-center justify-center my-36'>
        <Image width={1000} height={1000} src='/banner.png'  />
    </div>
  )
}

export default BannerSection