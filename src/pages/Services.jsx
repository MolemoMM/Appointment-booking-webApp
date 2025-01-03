import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { WebContext } from '../context/WebContext';


const Services = () => {
  const { Service } = useParams();
  const [filterServ, setFilterServ] = useState([]);
  const navigate = useNavigate();

  const { service } = useContext(WebContext);

  const applyFilter = () => {
    if (Service) {
      setFilterServ(service.filter(item => item.Service === Service));
    } else {
      setFilterServ(service);
    }
  }

  useEffect(() => {
    applyFilter();
  }, [service, Service]);

  return (
    <div>
      <p className='text-gray-600'>Browse through our Services. </p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={() => service === 'Make-Up' ? navigate('/services') : navigate('/services/Make-Up')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}>Make-Up</p>
          <p onClick={() => service === 'Hair Installation' ? navigate('/services') : navigate('/services/Hair Installation')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}>Hair Installation</p>
          <p onClick={() => service === 'Eyelashes' ? navigate('/services') : navigate('/services/Eyelashes')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}>Eyelashes</p>
          <p onClick={() => service === 'Eyebrows' ? navigate('/services') : navigate('/services/Eyebrows')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}>Eyebrows</p>
          <p onClick={() => service === 'Skin Care' ? navigate('/services') : navigate('/services/Skin Care')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}>Skin Care</p>
          <p onClick={() => service === 'Wig Unit' ? navigate('/services') : navigate('/services/Wig Unit')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}>Wig Unit</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterServ.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-brown-200 round-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.Service}</p>
                  <p className='text-gray-600 text-sm'>{item.price}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services