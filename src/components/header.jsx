import React from 'react'
import { assets } from '../assets/assets'

const header = () => {
  return (
    <div className=' flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>
        {/* ------left------ */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-black font-semibold  leading-tight md:leading-tight'>
                Book Your Appointment <br className='hidden sm:block'/> with Sibongile Nqashe
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <p>Powered by King Jesus!!</p>
            </div>
            <a href="#services" className=' flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                Book Now! <img className='w-3' src={assets.arrow_icon} alt=""/>
            </a>
        </div>
         {/* ------right------ */}
        <div className='md:w-1/2 relative '>
            <img className='w-full md:absolute bottom-14 h-auto rounded-lg ' src={assets.homepage2} alt=""/>
         </div>
    </div>
  )
}

export default header