import React from 'react';
import SidebarItem from './SidebarItem';
import { images } from '../../../constants';
import './sidebar.scss'

const accountData = [
    {
        id: 10,
        title: "Profile",
        icon: images.user_white,
        link: 'profile'
    }
    
]

const userData = [
    {
        id: 13,
        title: "Users",
        icon: images.users_white,
        link: 'users'
    }   
]
const destinationsData = [
    {
        id: 16,
        title: "All Destinations",
        icon: images.note,
        link: 'destinations'
    },
    {
        id: 22,
        title: "Add Destination",
        icon: images.add_note,
        link: 'new-user'
    },
    {
        id: 32,
        title: "Delete Destination",
        icon: images.delete_note,
        link: 'delete-user'
    }
]
const toursData = [
    {
        id: 31,
        title: "All Tours",
        icon: images.note,
        link: 'destinations'
    },
    {
        id: 42,
        title: "Add Tour",
        icon: images.add_note,
        link: 'new-user'
    },
    {
        id: 55,
        title: "Delete Tour",
        icon: images.delete_note,
        link: 'delete-user'
    }
]

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src={images.logo} alt="logo" className="sidebar__logo" />
                <h2 className="sidebar__title">R-tours</h2>
            </div>

            <div className="sidebar__nav">
                <SidebarItem data={accountData} title='account' />
                <SidebarItem data={userData} title='users' />
                <SidebarItem data={destinationsData} title='destinations' />
                <SidebarItem data={toursData} title='Tours' />
            </div>
        </div>
    )
}

export default Sidebar