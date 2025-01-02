import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
             {/* ----left---- */}
            <div>
                <img className= 'mb-5 w-40 'src={assets.homepage2} alt="" />
                <p className='w-full md:w-4/5 text-gray-600 leading-6'>
                Bongi On The Beat Beauty Salon is an exceptional haven for beauty and self-care, renowned for its unparalleled service and attention to detail. With a team of skilled professionals who blend artistry and expertise, the salon offers a wide range of services tailored to meet each client's unique needs.
                </p>
             </div>
                 {/* ----center---- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className=' flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li> Contact us</li>
                    <li>Privacy policy</li>
                </ul>
             </div>
             {/* ----right---- */}
             <div>
                <p className='text-xl font-medium mb-5'>GET IN Touch</p>
                <ul>
                    <li>025 156 1454</li>
                    <li>Bongionthebeat@gamil.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>© 2021 Bongi On The Beat Beauty Salon. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer