import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { TfiUser } from "react-icons/tfi";
import { images } from '../../constants';

import './navbar.scss';

const Navbar = () => {

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
                    {['home','tours', 'contact'].map((item) =>                
                        <li key={item} className="navbar__item">
                            <NavLink to={`/${item}`} activeClassname = "active"  className="navbar__link">{item}</NavLink>
                        </li>
                    )}
                </ul>
            </div>

            <NavLink to="/" className="navbar__link">
                <img className='navbar__logo' src={images.logo} alt="logo" />
            </NavLink>


            <div class="dropdown">
                <div className='dropdown__trigger'>
                    <TfiUser className='navbar__user-icon dropbtn' />
                    <span>Account</span>
                </div>

                <ul className='dropdown__list'>
                <h3 className='dropdown__title'>Hello <span>Roman</span> </h3>
                    <li className='dropdown__item'>
                        <NavLink to="/admin/profile" className="navbar__link">
                            <img src={images.user} alt="drop icon" />
                            My Profile
                        </NavLink>

                    </li>
                    <li className='dropdown__item'>
                        <NavLink to="/admin/dashboard" className="navbar__link">
                            <img src={images.dashboard} alt="drop icon"/>
                            Dashboard
                        </NavLink>

                    </li>
                    <li className='dropdown__item'>
                        <NavLink to="/admin/edit-profile" className="navbar__link">
                            <img src={images.edit} alt="drop icon"/>
                            Edit Profile
                        </NavLink>
                    </li>
                    <li className='dropdown__item'>
                        <NavLink to="/admin/settings" className="navbar__link">
                            <img src={images.settings} alt="drop icon"/>
                            Settings
                        </NavLink>

                    </li>
                    <li className='dropdown__item'>
                        <NavLink to="/admin/log_out" className="navbar__link">
                            <img src={images.log_out} alt="drop icon"/>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};



export default Navbar;


