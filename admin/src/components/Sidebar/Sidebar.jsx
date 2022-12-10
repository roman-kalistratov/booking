import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { images } from '../../constants';
import { AuthContext } from '../../context/AuthContext';
import './sidebar.scss';

const Sidebar = () => {
    const { user,dispatch } = useContext(AuthContext);

    console.log(user);

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src={images.logo} alt="logo" className="sidebar__logo" />
                <h2 className="sidebar__title">R-tours</h2>
            </div>

            <div className="sidebar__nav">
                {
                    menu.map((item) => {
                        return (
                            (user.isAdmin === item.isAdmin || item.isUser) &&
                            <NavLink key={item.id} to={`/${item.link}`} activeclassname="active" className="sidebar__link">
                                <img className='sidebar__icon' src={item.icon} alt="drop icon" />
                                {item.title}
                            </NavLink>
                        )
                    }
                    )}
            </div>
        </div>
    )
}

export default Sidebar;


const menu = [
    {
        id: 16,
        title: "Dashboard",
        icon: images.dashboard_white,
        link: 'dashboard',
        isAdmin:true,
        isUser:true
    },
    {
        id: 14,
        title: "Profile",
        icon: images.user_white,
        link: 'profile',
        isAdmin:true,
        isUser:true
    },
    {
        id: 22,
        title: "Users",
        icon: images.people_white,
        link: 'users',
        isAdmin:true
    },
    {
        id: 32,
        title: "Destinations",
        icon: images.note_white,
        link: 'destinations',
        isAdmin:true
    },
    {
        id: 12,
        title: "Tours",
        icon: images.note_white,
        link: 'tours',
        isAdmin:true
    }
]
