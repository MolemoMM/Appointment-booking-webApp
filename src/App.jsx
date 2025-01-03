import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/Services';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import NavigationBar from './components/Navigationbar';
import Footer from './components/footer';



const  App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:Service' element={<Services/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:servId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App