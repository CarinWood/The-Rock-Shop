import React from 'react';
import './searchbar.css';

const SearchBar = () => {
  return (
  <form>
      <input 
      className='searchbar' 
      type="text" 
      placeholder="Search..." />
  </form>
  )
};

export default SearchBar;
