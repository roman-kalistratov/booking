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
                    <div className="layout__main-user">
                        <img className='layout__main-user-img' src={images.avatar} alt="avatar" />
                        <h3 className="layout__main-user-name">Hello Roman</h3>
                    </div>
                    <Link to='/' className="layout__main-link">
                        Back to Home
                    </Link>

                    <Link to='/' className='layout__main-link'>
                        <img src={images.log_out_white} alt="" />Logout
                    </Link>
                </div>

                <Card>
                    <div className='profile__avatar'>
                        <img src={images.avatar} alt="" />
                    </div>

                    <div className="profile__info">
                        <form className="form" >
                            <div className='aa'>
                                <label className='form__label'>
                                    First Name:
                                </label>
                                <input type="text" placeholder='Roman' />
                            </div>

                            <div className='aa'>
                                <label className='form__label'>
                                    Last Name:
                                </label>
                                <input type="text" placeholder='Kalistratov' />
                            </div>


                            <label className='form__label'>
                                Email:
                            </label>
                            <input type="email" placeholder='test@gmail.com' />



                            <label className='form__label'>
                                Phone:
                            </label>
                            <input type="text" placeholder='054-1111111' />

                            <label className='form__label'>
                                Identification:

                            </label>
                            <input type="text" placeholder='333333333' />

                            <label className='form__label'>
                                Photo:

                            </label>
                            <input className='form__input-file' type='file' />


                            <button className='form__submit btn'>Edit Profile</button>
                        </form>


                    </div>
                </Card>
            </main>
        </div>
    )
}

export default Profile