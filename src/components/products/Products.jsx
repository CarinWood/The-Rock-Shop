import React from 'react';
import './products.css';
import Albums from '../../data/AlbumData';
import Product from './Product';

const Products = () => {
  return <div className='product-row'>
      {Albums.map((album) => (
          <>
          <Product album={album} key={album.id}/>
          </>
      ))}
      
  </div>;
};

export default Products;
