import React from 'react';
import { Sidebar, Card } from '../../components';
import { Link } from "react-router-dom";
import { RiDeleteBin2Line } from 'react-icons/ri';
import { IoAddCircleOutline } from 'react-icons/io5';
import { images } from '../../constants';
import './users.scss';

const Users = () => {
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



                <div className="users">
                    <ul className="users__filters">
                        <li className="users__filters-item">
                            <select name="country" id="">
                                <option value="" selected disabled hidden>Country</option>
                                <option value="">China</option>
                                <option value="">Colombia</option>
                                <option value="">Yemen</option>
                                <option value="">Indonesia</option>
                            </select>
                        </li>
                        <li className="users__filters-item">
                            <select name="city" id="">
                                <option value="" selected disabled hidden>City</option>
                                <option value="">Leticia</option>
                                <option value="">Tsaritsyno</option>
                                <option value="">Zhangcun</option>
                                <option value="">Kotabaru</option>
                            </select>
                        </li>
                        <li className="users__filters-item">
                            <input type="search" placeholder='Please enter user name' />
                        </li>
                    </ul>
                    <ul className='users__list'>
                        <li className="users__item">
                            <h3 className="users__item-title">-</h3>
                            <ul className="users__info">
                                <li className="users__info-item">
                                    <img src={images.avatar} alt="" />
                                </li>
                                <li className="users__info-item">
                                    <img src={images.avatar} alt="" />
                                </li>
                                <li className="users__info-item">
                                    <img src={images.avatar} alt="" />
                                </li>
                                <li className="users__info-item">
                                    <img src={images.avatar} alt="" />
                                </li>
                                <li className="users__info-item">
                                    <img src={images.avatar} alt="" />
                                </li>

                            </ul>
                        </li>
                        <li className="users__item">
                            <h3 className="users__item-title">id</h3>
                            <ul className="users__info">
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                            </ul>
                        </li>

                        <li className="users__item">
                            <h3 className="users__item-title">first name</h3>
                            <ul className="users__info">
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                            </ul>
                        </li>
                        <li className="users__item">
                            <h3 className="users__item-title">last name</h3>
                            <ul className="users__info">
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                            </ul>
                        </li>
                        <li className="users__item">
                            <h3 className="users__item-title">email</h3>
                            <ul className="users__info">
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                            </ul>
                        </li>

                        <li className="users__item">
                            <h3 className="users__item-title">phone</h3>
                            <ul className="users__info">
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                            </ul>
                        </li>

                        <li className="users__item">
                            <h3 className="users__item-title">city</h3>
                            <ul className="users__info">
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                            </ul>
                        </li>

                        <li className="users__item">
                            <h3 className="users__item-title">country</h3>
                            <ul className="users__info">
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                                <li className="users__info-item">
                                    dsg
                                </li>
                            </ul>
                        </li>

                        <li className="users__item">
                            <h3 className="users__item-title">-</h3>
                            <ul className="users__info">
                                <li className="users__info-item">
                                    <RiDeleteBin2Line />
                                    <IoAddCircleOutline />
                                </li>
                                <li className="users__info-item">
                                    <RiDeleteBin2Line />
                                    <IoAddCircleOutline />
                                </li>
                                <li className="users__info-item">
                                    <RiDeleteBin2Line />
                                    <IoAddCircleOutline />
                                </li>
                                <li className="users__info-item">
                                    <RiDeleteBin2Line />
                                    <IoAddCircleOutline />
                                </li>
                                <li className="users__info-item">
                                    <RiDeleteBin2Line />
                                    <IoAddCircleOutline />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Users