import React from 'react';
import { images } from '../../constants';
import { Divider } from '../../components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src={images.logo} alt="logo" className="sidebar__logo" />
                <h2 className="sidebar__title">R-tours</h2>
                <h3 className='sidebar__username'>Hello admin</h3>
            </div>

            <nav className="sidebar__dropdown">
                <ul className="sidebar__dropdown-list">
                    <li className="sidebar__dropdown-item">
                        <div className="sidebar__dropdown-btn">
                            Profile
                            <MdKeyboardArrowRight />
                        </div>
                    </li>
                    <li className="sidebar__dropdown-item">
                        <div className="sidebar__dropdown-btn">
                            Users
                            <MdKeyboardArrowRight />
                        </div>
                    </li>
                    <li className="sidebar__dropdown-item">
                        <div className="sidebar__dropdown-btn">
                            Destinations
                            <MdKeyboardArrowRight />
                        </div>

                    </li>
                    <li className="sidebar__dropdown-item">
                        <div className="sidebar__dropdown-btn">
                            Tours
                            <MdKeyboardArrowRight />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Sidebar