import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { WebContext } from '../context/WebContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { servId } = useParams();
  const { service } = useContext(WebContext);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 
  const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [servInfo, setServInfo] = useState(null);

  const[servSlots, setServSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchServInfo = async () => {
    const servInfo = service.find(item => item._id === servId);
    setServInfo(servInfo);

  };

  const getAvailableSlots = async () => {
    setServSlots([])

    // Get the current date
    let today = new Date();

    for (let i = 0 ; i < 31; i++) {
      //getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time of date with index
      let endTime = new Date(currentDate);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if(today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }else {
        currentDate.setHours(3)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

        // add time slots
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        })

        //increase curren time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setServSlots((prev) => [...prev, timeSlots])}
  }

  useEffect(() => {
    fetchServInfo();
  }, [service, servId]);

  useEffect(() => {
    getAvailableSlots()
  }, [servInfo])

  useEffect(() => {
     console.log(servSlots)

  },[])

  return  servInfo && (
    <div>
      {/* Your JSX code here */}
      <div className='flex flex-col items-center sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={servInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-primary rounded-lg p-8 py-7 bg-white mx-20 sm:mx-0 mt-[-80px] sm:mt-0'>
            {/* Your JSX code here */}
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
              {servInfo?.name}
              <img className='w-5' src={assets.appointment_icon } alt="" />
              </p> 
             
          <div className='flex itmes-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{servInfo.duration} </p>
            
          </div>
            {/* About */}
            <div>
              <p className='flex items-center gap-1 stext-sm font-medium text-gray-900'>NB <img src={assets.info_icon} alt="" />
              </p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{servInfo.about}</p>
            </div>
            <p className='text-gray-500 font-medium mt-4'>
              Appointment Price: <span className='text-gray-600'>{servInfo.price}</span></p>
        </div>
      </div>
       {/* booking */}
       <div className='sm-ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 itmes-center w-full overflow-x-scroll mt-4'>
          {
          servSlots.length && servSlots.map((item, index) => (
            <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-black' : 'border border-black-300'}`} key={index}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()] } </p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
              <p>{item[0] && monthsOfYear[item[0].datetime.getMonth()]}</p>
              </div>

          ))


          }
        </div>
        <div className='flex items-center gap-3  w-full overflow-x-scroll mt-4'>
          {servSlots.length && servSlots[slotIndex].map((item, index) => ( 

            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-black' : 'text-black-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}</p>
          ))}
        </div>

       </div>
    </div>
  );
};

export default Appointment;