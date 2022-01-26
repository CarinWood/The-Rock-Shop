import React from 'react';
import Cart from '../../components/cart/Cart';
import Products from '../../components/products/Products';
import './home.css'

const Home = () => {
  return <div className='home-container'>
      <h1 className='home-headline'>Populär produkter</h1>
      <p className='text-body'>Hos The Rock Shop har vi ett stort urval av produkter för just din musiksmak!
         Nedan har vi samlat våra mest poplära produkter genom tiderna. 
         Glöm inte att hos oss får du alltid fri frakt om du handlar för 259:- eller mer! 
      </p>
      <Products/>
    
  </div>;
};

export default Home;
