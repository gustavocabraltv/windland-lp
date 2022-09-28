import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



const Header = () => {
    const [nav, setNav] = React.useState(true)

    function handleNav(){
        setNav(!nav)
    }

  return (
    <div className='flex max-w-[1280px] justify-between w-full h-[131px] items-center px-8 md:px-4 lg:px-0'>
        <Image
        className='cursor-pointer'
            src="/assets/Logo.svg"
            alt="Logo"
            width={199}
            height={56}
    />
    <div onClick={handleNav} className='lg:hidden '>
        {nav ? <AiOutlineMenu size={24}/> : <AiOutlineClose size={24}/>}
    </div>
        <ul className=' gap-12 flex-row hidden lg:flex '>
            <li>Landing</li>
            <li>Pages</li>
            <li>Contact</li>
            <li>About</li>

        </ul>

         <div className='gap-2  lg:flex hidden'>
                <button className='bg-[#3865F3] border-[#3865F3] border-[2px] text-white px-8 py-3 rounded-md'>Login</button>
                <button className='border-solid border-[2px] border-[#3865F3] text-[#3865F3] px-8 py-3 rounded-md'>Register</button>
         </div>
    </div>
  )
}

export default Header