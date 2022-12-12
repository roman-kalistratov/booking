import React from 'react';
import { Slider } from '../../components';
import './header.scss';

const Header = () => {
  return (
    <header className='header' id='home'> 
       <Slider.HeaderSlider/>
     </header>
  )
}

export default Header;
