import React from 'react'

const Features = () => {
  return (
    <div className='flex flex-col max-w-[1280px] justify-between w-full items-center px-8 md:px-4 lg:px-0  my-8'>
        <h1 className='text-4xl font-bold pb-[24px]'>New Features</h1>
        <p className='text-xl text-[#94959B] pb-[64px] text-center'>We have release some new features in the Veshion. Check it out now guys</p>

        <div className='flex flex-col gap-10 lg:flex-row justify-between w-full'>

          <div className='flex flex-col items-center justify-center '>
            <img src='assets/icone-1.svg' className='h-[140px]'/>
            <h2 className='pb-[16px] text-2xl font-semibold pt-[64px]'>Free Delivery</h2>
            <p>Free delivery up to $7 to all addresses</p>
          </div>

          <div className='flex flex-col items-center justify-center '>
            <img src='assets/icone-1.svg' className='h-[140px]'/>
            <h2 className='pb-[16px] text-2xl font-semibold pt-[64px]'>Free Delivery</h2>
            <p>Free delivery up to $7 to all addresses</p>
          </div>

          <div className='flex flex-col items-center justify-center '>
            <img src='assets/icone-1.svg' className='h-[140px]'/>
            <h2 className='pb-[16px] text-2xl font-semibold pt-[64px]'>Free Delivery</h2>
            <p>Free delivery up to $7 to all addresses</p>
          </div>
        </div>
      </div>
  )
}

export default Features