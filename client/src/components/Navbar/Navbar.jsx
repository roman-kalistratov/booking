import React from 'react';
import { Link } from "react-router-dom";
import { images } from '../../constants';

import { TfiUser } from "react-icons/tfi";
import './navbar.scss';

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="navbar__wrapper">
                <ul className='navbar__list'>
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">Home</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/destinations" className="navbar__link">Destinations</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">Tours</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">Contact</Link>
                    </li>
                </ul>
            </div>

            <Link to="/" className="navbar__link">
                <img className='navbar__logo' src={images.logo} alt="logo" />
            </Link>

            <a href='/ ' type='button' className="navbar__link navbar__account" ><TfiUser className='navbar__user-icon'/>Account</a>
        </nav>
    );
};



export default Navbar;


