import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavigationBar = () => {

   const navigate= useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className= "flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-500" >
        <img onClick={()=>navigate('/')} className = "w-44 cursor-pointer " src={assets.S} alt=""   style={{ width: '100px', height: '100px' }}  />
        <ul className="hidden md:flex items-start gap-5 font-medium">
            <NavLink to="/">
                <li className="py-1">
                    Home
                </li>
                <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
            </NavLink>
            <NavLink to= "/services">
            <li className="py-1">
                    All Services
                </li>
                <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
            </NavLink>
            <NavLink to= "/about">
            <li className="py-1">
                    About
                </li>
                <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to= "/contact"> 
            <li className="py-1">
                    Contact
                </li>
                <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
        </ul>
        <div className='flex items-center gap-5'>
            {
                token 
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className="w-10 rounded-full"  src={assets.make} alt="" />
                    <img className="w-3" src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex-col gap-4 p-4'>
                            <p  onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'> My Appointments</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>

                    </div>

                </div>
                : <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
            }
           
        </div>
    </div>
  )
}

export default NavigationBar