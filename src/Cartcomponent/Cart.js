import React from "react";
import PropTypes from "prop-types";
import './Cart.css';

const Cart = ({ items }) => {
  return ( 
    <div className="cart">
      {items.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.imageUrl} alt={`Image ${index}` } className="img1-item" />
          <img src={item.img2} alt={`Image2 ${index}`}  className="img2-item"/>
         
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      img2: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Cart;
