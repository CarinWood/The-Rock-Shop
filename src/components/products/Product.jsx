import React, {useContext} from 'react';

import { CartContext } from '../../data/CartContext';

const Product = ({album}) => {

  const [cart, setCart] = useContext(CartContext)

  function addToCart() {
      const product = {title: album.title, price: album.price}
      setCart(curr => [...curr, product])
  }



  return <div id={album.id} className='album-container'>
            <div className='image-container'>
                <img className='img' src={album.img} alt={album.artist}  />
            </div>
         <h1 className='album-artist'>{album.artist}</h1>
         <p className='album-title'>{album.title}</p>
         <p className='album-price'>{album.price} kr</p>

        <button className='buy-btn' onClick={addToCart}>Köp</button>
  </div>;
};

export default Product