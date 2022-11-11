import React from 'react';
import { Link } from "react-router-dom";
import { images } from '../../../constants';
import './header.scss';

const Header = () => {
    return (
        <header className='header-admin'>
            <div className="header-admin__user">
                <img className='header-admin__user-img' src={images.avatar} alt="avatar" />
                <h3 className="header-admin__user-name">Hello Roman</h3>
            </div>
            <Link to='/' className="header-admin__link">
                Back to Home
            </Link>

            <Link to='/' className='header-admin__link'>
                <img src={images.log_out_white} alt="" />Logout
            </Link>
        </header>
    )
}

export default Header