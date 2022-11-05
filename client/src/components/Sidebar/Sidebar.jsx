import React from 'react';
import SidebarItem from './SidebarItem';
import { images } from '../../constants';
import './sidebar.scss'

const accountData = [
    {
        id: 10,
        title: "Profile",
        icon: images.user_white,
        link: 'profile'
    },
    {
        id: 11,
        title: "Edit Profile",
        icon: images.edit_white,
        link: 'edit-profile'
    },
    {
        id: 12,
        title: "Change Password",
        icon: images.settings_white,
        link: 'change-password'
    }
]

const userData = [
    {
        id: 13,
        title: "All users",
        icon: images.users_white,
        link: 'users'
    },
    {
        id: 14,
        title: "Add User",
        icon: images.add_user,
        link: 'new-user'
    },
    {
        id: 15,
        title: "Delete user",
        icon: images.delete_user,
        link: 'delete-user'
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
                <h3 className='sidebar__username'>Hello admin</h3>
            </div>

            <div className="sidebar__nav">
                <SidebarItem data={accountData} title='account' />
                <SidebarItem data={userData} title='users' />
                <SidebarItem data={destinationsData} title='Destinations' />
                <SidebarItem data={toursData} title='Tours' />
            </div>
        </div>
    )
}

export default Sidebar