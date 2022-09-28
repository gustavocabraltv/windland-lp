import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (

         <div className='flex max-w-[1280px] justify-between w-full items-center px-8 md:px-4 lg:px-0  my-8'>
        <div className='flex flex-col gap-4'>
            <h1 className=' text-7xl font-semibold leading-tight w-fit'>Find your new style with <span className='text-[#3865F3]'>Veshion</span></h1>
            <p className=' text-[#94959B] text-[20px] w-fit'>Buy something has never been easy now, download Veshion now and get 30 off</p>
            <div className='flex flex-row gap-4 mt-8'>
            <Image
               className='cursor-pointer'
        src="/assets/android.svg"
        alt="Android"
        height={73}
        width={220}
      />
      <Image
               className='cursor-pointer'
        src="/assets/android.svg"
        alt="Apple"
        height={73}
        width={220}
      />
            </div>
        </div>
        <div className='hidden lg:block'>
        <Image

        src="/assets/right.svg"
        alt="Apple"
        width={732.7}
        height={802}

      />
        </div>
        
    </div>
   
  )
}

export default Hero