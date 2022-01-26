import React from 'react';

const Product = ({album}) => {
  return <div className='album-container'>
      <div className='image-container'>
          <img className='img' src={album.img}  />
      </div>
      <h1 className='album-artist'>{album.artist}</h1>
      <p className='album-title'>{album.title}</p>
      <p className='album-price'>{album.price} kr</p>
      <button className='buy-btn'>Köp</button>
  </div>;
};

export default Product