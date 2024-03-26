import React from 'react';
// import {NavLink} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import "./Header.css";

const Header = () => {
  return (
    
    <header className='header'>
    <img src='my-react-app/src/assets/amazon logo.png'alt='Amazon logo' />
    <div className='header_search'>
      <input className='header_input' type='text' />
      <SearchIcon className='search_icon' />
    </div>
    <div className='header_nav'>
      <div className='header_option '>
        <span className='heeder_optionOne'>Hello World</span>
        <span className='heeder_optionTwo'>Sign In</span>
      </div>

      <div className='header_option '>
        <span className='heeder_optionOne'>Returns</span>
        <span className='heeder_optionTwo'>& Oders</span>
      </div>

      <div className='header_option '>
        <span className='heeder_optionOne'>Your</span>
        <span className='heeder_optionTwo'>Prime</span>
      </div>
     {/* <div className='header_optionBasket'>
       <ShoppingBasketIcon  /> 
       <span className='header_optionTwo header_basketCount'></span>
     </div> */}
    </div>
  </header>
  );
};

export default Header;