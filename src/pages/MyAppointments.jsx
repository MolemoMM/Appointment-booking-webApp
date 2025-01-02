import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { WebContext } from '../context/WebContext'

const MyAppointments = () => {

  const {servId} = useParams();
  const {service} = useContext(WebContext);

  const [servInfo, setServInfo] = useState(Null);

  const fetchServInfo = () => {

    const servInfo = service.find(item => item._id === servId)
    setServInfo(servInfo)
    console.log(servInfo)
  }

  useEffect(() => {
    fetchServInfo()
  },[service, servId])

  return (

    <div>
      {/* */}
      <div>
        <div>
          <img src= {servInfo.image} alt="" />
        </div>
      </div>
      
      </div>
  )
}

export default MyAppointments