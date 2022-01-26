import React, {useState} from 'react';
import './searchbar.css';
import Albums from '../../data/AlbumData';


const SearchBar = () => {


  const [searchValue, setSearchValue] = useState('')

  function handleInputchange(e) {
    setSearchValue(e.target.value);
  }

  function handleClearClick() {
    setSearchValue('');
  }

  const shouldDisplayDeleteBtn = searchValue.length > 0;
  const displayResults = searchValue.length > 0;

 

  return (
    <>
  <form>
      <input 
      className='searchbar' 
      type="text" 
      placeholder="Sök..."
      value={searchValue}
      onChange={handleInputchange}
      />

      {shouldDisplayDeleteBtn && 
         <button 
            className='delete-input'
            type="button" 
            onClick={handleClearClick}>
                <i class='bx bx-x'></i>
         </button>
         }
  </form>

         {displayResults &&
              <ul className='result-list'>
                  {Albums.map((album) => (
                        <li key={album.id} className='result-item'>{album.artist}</li>
                  ))}
              </ul>
       }
       </>
  
  )
};

export default SearchBar;
