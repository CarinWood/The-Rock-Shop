import React from 'react';
import SearchBar from '../searchbar/SearchBar';
import './header.css'
import { FaShoppingBasket } from 'react-icons/fa';
import NavBar from '../navbar/NavBar';

const Header = () => {
  return (
    <>
  <header>
      <div className='logo'>The Rock Shop</div>
      <SearchBar/>
          <div className='basket-div'>
              <FaShoppingBasket className="basket-icon" />
              <p className='digit'>0</p>
              <button className='header-btn' type="button">Checkout</button>
          </div>
  </header>
      <NavBar/>
    </>

  )
};

export default Header;
