import React,{useState} from 'react';
import { Sidebar, Card } from '../../components';
import { Link } from "react-router-dom";
import { images } from '../../constants';
import { AiOutlineEye } from 'react-icons/ai';


import './profile.scss'

const Profile = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false); 


    return (
        <div className='layout'>
            <div className="layout__sidebar">
                <Sidebar />
            </div>
            <main className='layout__main'>
                <div className="fancy-cube-right"></div>
                <div className="fancy-cube-left"></div>
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

                <div className="layout__main-wrapper">
                    <Card>
                        <div className='profile__avatar'>
                            <img src={images.avatar} alt="" />
                        </div>

                        <div className="profile__info">
                            <form className="form" >

                                <div className="form__label-left">
                                    <label className='form__label'>
                                        First Name:
                                    </label>
                                    <input type="text" placeholder='Roman' />
                                </div>

                                <div className="form__label-right">
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

                                <div className="form__label-left">
                                    <label className='form__label'>
                                        Country:
                                    </label>
                                    <input type="text" placeholder='Trashigang' />
                                </div>

                                <div className="form__label-right">
                                    <label className='form__label'>
                                        City:
                                    </label>
                                    <input type="text" placeholder='Zhangcun' />
                                </div>



                                <label className='form__label'>
                                    Photo:

                                </label>
                                <input className='form__input-file' type='file' />


                                <button className='form__submit btn'>Edit Profile</button>
                            </form>


                        </div>
                    </Card>

                    <Card>                       
                        <div className="change-password">
                            <div className="change-password__title">
                                <h3>Change Password</h3>
                                <form className='form change-password-form'>
                                    <label className='form__label'>
                                        Current password:
                                    </label>
                                    <input type="text" />

                                    <label className='form__label'>
                                        New Password:
                                    </label>
                                    <div class="form__password">
                                        <input type={passwordShown ? "text" : "password"} placeholder='test@gmail.com'/>
                                        <AiOutlineEye onClick={() => setPasswordShown(!passwordShown)}/>                                       
                                    </div>
                                    
                                    <label className='form__label'>
                                        Confirm Password:
                                    </label>
                                    <div class="form__password">
                                        <input type={confirmPasswordShown ? "text" : "password"} placeholder='test@gmail.com'/>                                        
                                        <AiOutlineEye onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}/>                                       
                                    </div>

                                <button className='form__submit btn'>Update Password</button>

                                </form>
                            </div>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    )
}

export default Profile