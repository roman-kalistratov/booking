import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { images } from '../../constants';

import { TfiUser } from "react-icons/tfi";
import './navbar.scss';

const Navbar = () => {
    const [isActive, setIsActive] = useState('home');

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });    

    const isSticky = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector(".navbar");

        scrollTop >= 50
            ? (header.classList.add('sticky'))
            : (header.classList.remove('sticky'));       
    };
   
    return (
        <nav className="navbar">
            <div className="navbar__wrapper">
                <ul className='navbar__list'>
                    {['home', 'destinations', 'tours', 'contact'].map((item) =>
                        <li key={item} className={`navbar__item ${isActive === item ? "active" : ''}`} onClick={() => setIsActive(item)}>
                            <Link to={`/${item !== 'home' ? item : ''}`} className="navbar__link">{item}</Link>
                        </li>
                    )}
                </ul>
            </div>

            <Link to="/" className="navbar__link">
                <img className='navbar__logo' src={images.logo} alt="logo" />
            </Link>

            <Link to="/" className="navbar__link navbar__account" ><TfiUser className='navbar__user-icon' />Account</Link>
        </nav>
    );
};



export default Navbar;


