import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { WebContext } from '../context/WebContext'

const TopServices = () => {

    const navigate = useNavigate()
    const {service} = useContext(WebContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Services to Book</h1>
        <p className='sm:w-3/4 text-center text-sm'>
            Here are the top services
        </p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {service.slice(0,10).map((item,index)=>(
                <div onClick={()=>navigate('/appointment/${item._id}')} className='border border-brown-200 round-xl overflow-hidden cusor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                           <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p> 
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item. Service}</p>
                        <p className='text-gray-600 text-sm'>{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/services');scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>More</button>
    </div>
  )
}

export default TopServices