import React from 'react';

import Hero from './E-commerce/Herocomponent/Hero';
import NavBar from './E-commerce/Navbar/NavBar';
import Cart from './Cartcomponent/Cart';
import Category from './Categorycomponent/Category';




function App() {
  // const items = [
  //   { imageUrl: '/Cartimages/customer-care (1) 1 (1).png',
  //    img2: '/Cartimages/Group 102.png' },
  //   { imageUrl: '/Cartimages/free-delivery 1 (1).png',
  //    img2: '/Cartimages/Group 102.png' },
  //   { imageUrl: '/Cartimages/payment-protection 2 (1).png',
  //    img2: '/Cartimages/Group 102.png' },
  //   { imageUrl: '/Cartimages/return-box 1 (1).png',
  //    img2: '/Cartimages/Group 102.png' },
     
  // ];

 
  
  return (
    <>
      <NavBar />
      <Hero />
      <Category/>
      
     
    
    </>
  );
}

export default App;
