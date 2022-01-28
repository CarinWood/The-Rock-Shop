import React, {useState, useContext} from 'react';
import SearchBar from '../searchbar/SearchBar';
import './header.css'
import { FaShoppingBasket } from 'react-icons/fa';
import NavBar from '../navbar/NavBar';
import Cart from '../cart/Cart';
import { LoginContext } from '../../context/LoginProvider';
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';


const Header = () => {

  const navigation = useNavigate()

  const [cart, setCart] = useContext(CartContext)

  const {loggedIn, setLoggedIn} = useContext(LoginContext);

  const [ShowingCart, setShowingCart] = useState(false)

  function showCart() {
    setShowingCart(!ShowingCart)
 
  }

  function logOutFunc() {
    setLoggedIn(!loggedIn)
    navigation("/")
  }

  return (
    <>
  <header>
     
      <div className='logo'> The Rock Shop</div>
     
      <SearchBar/>

          {loggedIn? <p className='membername'>Carin <span onClick={logOutFunc} className='logout'>(Logga ut)</span></p>: null}

          <div onClick={showCart} className='basket-div'>
              <FaShoppingBasket className="basket-icon" />
              <p className='digit'>{cart.length}</p>
              <button  className='header-btn' type="button">Varukorg</button>
          </div>
  </header>
      <NavBar/>
      {ShowingCart && <Cart/>}
      
    </>

  )
};

export default Header;
