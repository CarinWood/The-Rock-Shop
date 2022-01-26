import React from 'react';
import './cart.css';

const Cart = () => {
  return <div className='cart-container'>
      <div className='end-of-cart'>
          <button className='checkout-btn'>Betala</button>
          <h3 className='summary'>Summa:<span> 0 </span>kr</h3>
      </div>
  </div>;
};

export default Cart;
