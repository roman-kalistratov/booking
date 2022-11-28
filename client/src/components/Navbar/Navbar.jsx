import React, { useEffect, useContext } from 'react';
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import { NavLink, useNavigate } from "react-router-dom";
import { TfiUser } from "react-icons/tfi";
import { images } from '../../constants';

import './navbar.scss';

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    // log out user and delet cookie from back
    const handleLogOut = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/auth/logout");
            dispatch({ type: "LOGOUT", payload: res.data });
            navigate("/");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });

    // adds an Sticky effect to the menu
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
                    {['home'].map((item) =>
                        <li key={item} className="navbar__item">
                            <NavLink to={`/${item}`} activeClassname="active" className="navbar__link">{item}</NavLink>
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

                {user ? (
                    <ul className='dropdown__list'>
                        <h3 className='dropdown__title'>Hello <span>{user.firstname}</span> </h3>
                        <li className='dropdown__item'>
                            <NavLink to="/admin/profile" className="navbar__link">
                                <img src={images.user} alt="drop icon" />
                                My Profile
                            </NavLink>

                        </li>
                        <li className='dropdown__item'>
                            <NavLink to="/admin/dashboard" className="navbar__link">
                                <img src={images.dashboard} alt="drop icon" />
                                Dashboard
                            </NavLink>

                        </li>
                        <li className='dropdown__item'>
                            <NavLink to="/admin/edit-profile" className="navbar__link">
                                <img src={images.edit} alt="drop icon" />
                                Edit Profile
                            </NavLink>
                        </li>
                        <li className='dropdown__item'>
                            <NavLink to="/admin/settings" className="navbar__link">
                                <img src={images.settings} alt="drop icon" />
                                Settings
                            </NavLink>

                        </li>
                        <li className='dropdown__item'>
                            <NavLink className="navbar__link" onClick={handleLogOut}>
                                <img src={images.log_out} alt="drop icon" />
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                ) : (
                    <ul className='dropdown__list'>
                        <h3 className='dropdown__title'>Hello <span>User</span> </h3>
                        <li className='dropdown__item'>
                            <NavLink to="/register" className="navbar__link">
                                <img src={images.edit} alt="drop icon" />
                                Sign Up
                            </NavLink>
                        </li>

                        <li className='dropdown__item'>
                            <NavLink to="/login" className="navbar__link">
                                <img src={images.user} alt="drop icon" />
                                Log in
                            </NavLink>
                        </li>

                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;


