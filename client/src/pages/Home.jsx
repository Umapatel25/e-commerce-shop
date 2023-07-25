import React from 'react';
import Navbar from '../component/Navbar';
import Announcement from '../component/Announcement';
import Slider from '../component/Slider';
import Categories from '../component/categories';
import Products from '../component/Products';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Footer /> 
    </div>
  );
};

export default Home;