import React, {useContext} from 'react';

import { CartContext } from '../../context/CartContext';

const Product = ({album}) => {

  const [cart, setCart] = useContext(CartContext)

  const addToCart = (album) => {
    const productExist = cart.find((item) => item.id === album.id)
    if (productExist) {
      setCart(cart.map((item) => item.id === album.id ? 
      {...productExist, quantity: productExist.quantity + 1} : item))
    } else {
      setCart([...cart, {...album, quantity: 1}])
    }
  }



  return <div id={album.id} className='album-container'>
            <div className='image-container'>
                <img className='img' src={album.img} alt={album.artist}  />
            </div>
         <h1 className='album-artist'>{album.artist}</h1>
         <p className='album-title'>{album.title}</p>
         <p className='album-price'>{album.price} :-</p>

        <button className='buy-btn' onClick={() => addToCart(album)}>Köp</button>
  </div>;
};

export default Product