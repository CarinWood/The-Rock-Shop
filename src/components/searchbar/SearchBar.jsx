import React, {useState} from 'react';
import './searchbar.css';
import Albums from '../../data/AlbumData';
import { IoCloseOutline } from "react-icons/io5";


const SearchBar = () => {


  const [searchValue, setSearchValue] = useState('')

  function handleInputchange(e) {
    setSearchValue(e.target.value);
  }

  function handleClearClick() {
    setSearchValue('');
  }

  function clear() {
    setSearchValue('')
  }

  const shouldDisplayDeleteBtn = searchValue.length > 0;
  const displayResults = searchValue.length > 0;
  
  const filteredAlbums = Albums.filter(album => {
    return album.artist.toLowerCase().includes(searchValue.toLowerCase())
  })

  

 

  return (
    <>
          <form className='search-container'>
              <input 
              data-testid="input"
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
                    <IoCloseOutline className='close'/>
                </button>
                }
          </form>

         {displayResults &&
              <ul className='result-list'>
                  {filteredAlbums.map((album) => (
                        <li 
                          className='result-item'
                          key={album.id} 
                        >
                              <a onClick={clear} href={album.link}>
                              {album.artist}
                              </a>
                        </li>
                  ))}
              </ul>
       }
       </>
  
  )
};

export default SearchBar;
