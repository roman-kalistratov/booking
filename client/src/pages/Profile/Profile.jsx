import React from 'react';
import { Sidebar, Card } from '../../components';
import { Link } from "react-router-dom";
import { images } from '../../constants';


import './profile.scss'

const Profile = () => {
    return (
        <div className='layout'>
            <div className="layout__sidebar">
                <Sidebar />
            </div>
            <main className='layout__main'>
                <div className="layout__main-top">
                    <Link to='/' className="layout__main-link">
                        Back to Home
                    </Link>

                    <Link to='/' className='layout__main-link'>
                        <img src={images.log_out} alt="" />Logout
                    </Link>
                </div>

                <Card>
                    <div className='profile__avatar'>
                        <img src={images.user} alt="" />
                    </div>

                    <div className="profile__info">
                        <h3 className="profile__fname">First Name: <span>Roman</span></h3>
                        <h3 className="profile__lname">Last Name: <span>Kalistratov</span></h3>
                        <h3 className="profile__email">Email: <span>test@gmail.com</span></h3>
                        <h3 className="profile__phone">Phone: <span>054-5417050</span></h3>
                        <h3 className="profile__phone">ID: <span>333815132</span></h3>

                        <Link to='/edit-profile' className='profile__btn btn'>
                            Edit Profile
                        </Link>
                    </div>

                    <div className="profile__links">
                        <Link to='/edit-profile' className='profile__links-item btn'>
                            My Destinations
                        </Link>
                        <Link to='/edit-profile' className='profile__links-item btn'>
                            My Tours
                        </Link>                       
                    </div>
                </Card>
            </main>
        </div>
    )
}

export default Profile