import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
            <div className="navbar__user">
                <img className='navbar__user-img' src={images.avatar} alt="avatar" />
                <h3 className="navbar__user-name">Hello Roman</h3>
            </div>
            <Link to='/' className="navbar__link">
                Back to Home
            </Link>

            <Link to='/' className='navbar__link'>
                <img src={images.log_out_white} alt="" />Logout
            </Link>
        </nav>
  )
}

export default Navbar