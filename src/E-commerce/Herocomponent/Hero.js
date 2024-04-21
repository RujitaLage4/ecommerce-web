import React from 'react';
import './hero.css';
import Cart from '../../Cartcomponent/Cart';
 const Hero = () => {
  const items = [
    { imageUrl: '/Cartimages/free-delivery 1 (1).png',
     img2: '/Cartimages/Group 102.png',
    },
    { imageUrl: '/Cartimages/payment-protection 2 (1).png',
     img2: '/Cartimages/Group 103.png' ,
     },
    { imageUrl: '/Cartimages/return-box 1 (1).png',
     img2: '/Cartimages/Group 104.png',
     },
    { imageUrl: '/Cartimages/customer-care (1) 1 (1).png',
     img2: '/Cartimages/Group 105.png',
    },
     
  ];

  return (  
    <>
    <div className='hero-img'>
    
      <div className='logo-img'>
        <img src="/Hero/logo.png" alt="img" />
      </div>
      <div className='box'>
        <img src="/Hero/box.png" alt="img" />

      </div>
      
      <div className='pinkbg'>
        <img src="/Hero/pinkbg.png" alt="img" />

      </div>
      
      <div className='five-img'>
        <img src="/Hero/5.png" alt="img" />

      </div>
     <div className='sale-img'>
      <img src="/Hero/SALE OFFER (1).png" alt="error" /> 
    </div>
     <div className='cartss'>
      <Cart items={items}/>

     </div>

     


    </div>
    </>
  );
 }
  
 export default Hero;