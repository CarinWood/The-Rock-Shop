import React from 'react';
import SearchBar from '../searchbar/SearchBar';
import './header.css'
import { FaShoppingBasket } from 'react-icons/fa';
import NavBar from '../navbar/NavBar';

const Header = () => {

  function showCart() {
    alert('click')
  }

  return (
    <>
  <header>
      <div className='logo'>The Rock Shop</div>
      <SearchBar/>
          <div className='basket-div'>
              <FaShoppingBasket className="basket-icon" />
              <p className='digit'>0</p>
              <button onClick={showCart} className='header-btn' type="button">Varukorg</button>
          </div>
  </header>
      <NavBar/>
    </>

  )
};

export default Header;
