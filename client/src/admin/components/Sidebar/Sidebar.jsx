import { NavLink } from "react-router-dom";
import { images } from '../../../constants';
import './sidebar.scss';

const Sidebar = () => {    

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
                            <NavLink key={item.id} to={`/admin/${item.link}`} activeclassname = "active" className="sidebar__link">
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

export default Sidebar


const menu = [
    {
        id: 16,
        title: "Dashboard",
        icon: images.dashboard_white,
        link: 'dashboard'
    },
    {
        id: 14,
        title: "Profile",
        icon: images.user_white,
        link: 'profile'
    },
    {
        id: 22,
        title: "Users",
        icon: images.users_white,
        link: 'users'
    },
    {
        id: 32,
        title: "Destinations",
        icon: images.note,
        link: 'destinations'
    },
    {
        id: 12,
        title: "Tours",
        icon: images.note,
        link: 'tours'
    }
]
