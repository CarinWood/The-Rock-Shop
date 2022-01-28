import React from 'react';
import './cart.css';
import { CartContext } from '../../data/CartContext';
import { useContext } from 'react/cjs/react.development';

const Cart = () => {

  const [cart, setCart] = useContext(CartContext)

  return (
  
    <div className='cart-container'>
        <h1>Varor({cart.length})</h1>
            <div className='end-of-cart'>
                    <button className='checkout-btn'>Betala</button>
                    <h3 className='summary'>Summa:<span> 0 </span>kr</h3>
            </div>
    </div>
  )
};

export default Cart;
