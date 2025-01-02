import React from 'react';
import Header from '../components/header';
import ServicesMenu from '../components/ServicesMenu';
import TopServices from '../components/TopServices';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div >
      <Header />
      {/* other components */}
      <ServicesMenu />
      <TopServices />
      <Banner />
    </div>
  );
};

export default Home;