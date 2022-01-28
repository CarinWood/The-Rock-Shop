import React from 'react';
import './cart.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react/cjs/react.development';
import { FaShoppingBasket } from 'react-icons/fa';

const Cart = () => {

  const [cart, setCart] = useContext(CartContext)

  return (
  
    <div className='cart-container'>
        <h1 className='cart-headline'>Varor({cart.length})</h1>
        
        {cart.length === 0 && <h1 className='placehoder-text'><FaShoppingBasket className='cart-logo'/>Din varukorg är tom </h1>}
            
            
            {cart.map((item) => (
              <div key={item.id}>
              <img src={item.img} alt={item.artist} />
              </div>
            ))}
            
            
            <div className='end-of-cart'>
                    <button className='checkout-btn'>Betala</button>
                    <h3 className='summary'>Summa:<span> 0 </span>kr</h3>
            </div>
    </div>
  )
};

export default Cart;
