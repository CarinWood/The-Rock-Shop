import React, {useState, useContext} from 'react';
import './cart.css';
import { CartContext } from '../../context/CartContext';
import { FaShoppingBasket, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

const Cart = () => {

  const [cart, setCart] = useContext(CartContext)
 


  const handleRemoveProduct = (product) => {
    const productExist = cart.find((item) => item.id === product.id)
    if (productExist.quantity === 1) {
          setCart(cart.filter((item) => item.id !== product.id ))
    } else {
      setCart(cart.map((item) => item.id == product.id ? {...productExist, quantity: productExist.quantity -1} : item ))
    }
  }

  const handleAddProduct = (album) => {
    const productExist = cart.find((item) => item.id === album.id)
    if (productExist) {
      setCart(cart.map((item) => item.id === album.id ? 
      {...productExist, quantity: productExist.quantity + 1} : item))
    } else {
      setCart([...cart, {...album, quantity: 1}])
    }

  }

 

  function handlePayment() {

    alert('Tack för ditt köp hos The Rock Shop!');
    setCart([])   
   
  }
 
  

 const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0)


 const leftToFreeFreight = 259




 



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
                          <FaMinusCircle className='plus-sign' onClick={() => handleRemoveProduct(item)}/>
                          <p className='number'>{item.quantity}</p>
                          <FaPlusCircle className='plus-sign' onClick={() => handleAddProduct(item)} />
                 
                     
                        <h4 className='price-per-album'>{item.price} :-/st.</h4>
                        <h2 className='line-total'>{item.quantity * item.price}:-</h2>
                     
                      </div>
                </div>
              </div>
            ))}
            </div>
            
            
            <div className='end-of-cart'>
                    <button onClick={handlePayment} className='checkout-btn' data-testid="pay-btn">Betala</button>
                    <div className='freightAndPrice'>
                    {totalPrice >= 259 ? <p className='freight-message'>Du har uppnått fri frakt!</p>  :<p className='freight-message'>Du har {leftToFreeFreight - totalPrice} :- kvar till fri frakt</p>}
                      <h3 className='summary'>Summa:<span className='red-text'> {totalPrice} :- </span></h3>
              
                    </div>
             
                    
            </div>
    </div>
  )
};

export default Cart;
