import React from 'react'
import { servicesData } from '../assets/assets'
import { Link } from 'react-router-dom'

const ServicesMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id="services">
        <h1 className='text-3xl font-semibold'>
            Find Service
        </h1>
        <p className='sm:w-3/4 text-center text-sm'>
            Browse through our services and find the right one for you.
        </p>
        <div className='flex sm:justify-center gap-4 overflow-scroll w-full pt-5'>
            {servicesData.map((item,index)=>(

                <Link onClick={()=>scrollTo(0,0)} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/services/${item.service}`}>

                  <img className='w-16 sm-w-24 mb-2' src={item.image} alt="" />
                  <p>{item.service}</p>

                
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ServicesMenu