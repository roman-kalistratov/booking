import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { TfiUser } from "react-icons/tfi";
import { images } from '../../constants';

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


            <div class="dropdown">
                <div className='dropdown__trigger'>
                    <TfiUser className='navbar__user-icon dropbtn' />
                    <span>Account</span>
                </div>

                <ul className='dropdown__list'>
                <h3 className='dropdown__title'>Hello <span>Roman</span> </h3>
                    <li className='dropdown__item'>
                        <Link to="/profile" className="navbar__link">
                            <img src={images.user} alt="drop icon" />
                            My Profile
                        </Link>

                    </li>
                    <li className='dropdown__item'>
                        <Link to="/" className="navbar__link">
                            <img src={images.dashboard} alt="drop icon"/>
                            Dashboard
                        </Link>

                    </li>
                    <li className='dropdown__item'>
                        <Link to="/" className="navbar__link">
                            <img src={images.edit} alt="drop icon"/>
                            Edit Profile
                        </Link>
                    </li>
                    <li className='dropdown__item'>
                        <Link to="/" className="navbar__link">
                            <img src={images.settings} alt="drop icon"/>
                            Settings
                        </Link>

                    </li>
                    <li className='dropdown__item'>
                        <Link to="/" className="navbar__link">
                            <img src={images.log_out} alt="drop icon"/>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};



export default Navbar;


