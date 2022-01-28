import React from 'react';
import './cart.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react/cjs/react.development';
import { FaShoppingBasket, FaTrashAlt, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const Cart = () => {

  const [cart, setCart] = useContext(CartContext)

  return (
  
    <div className='cart-container'>
              
        {cart.length === 0 && <h1 className='placehoder-text'><FaShoppingBasket className='cart-logo'/>Din varukorg är tom </h1>}
            
            <div className='cart-outer-wrapper'>
            {cart.map((item) => (
              <div className='cart-wrapper' key={item.id}>
                <div className='cart-img-container'>
                    <img className='cart-img' src={item.img} alt={item.artist} />
                </div>
                <div>
                  <h3 className='cart-artist'>{item.artist}</h3>
                      <div className='info-div'>
                          <FaMinusCircle className='plus-sign'/>
                          <p className='number'>1</p>
                          <FaPlusCircle className='plus-sign' />
                 
                        <FaTrashAlt className='trash-can'/>
                        <h4 className='price-per-album'>{item.price} :-/st.</h4>
                        <h2 className='line-total'>99:-</h2>
                        
                      </div>
                </div>
              </div>
            ))}
            </div>
            
            
            <div className='end-of-cart'>
                    <button className='checkout-btn'>Betala</button>
                    <h3 className='summary'>Summa:<span> 0 </span>kr</h3>
            </div>
    </div>
  )
};

export default Cart;
