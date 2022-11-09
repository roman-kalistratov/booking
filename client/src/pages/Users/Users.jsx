import React from 'react';

import { Container, Main } from '../../admin/layout';
import { Sidebar, Header, Card, Avatar } from '../../admin/components';




import { images } from '../../constants';
import './users.scss';

const Users = () => {
    return (
        <Container>

            <Sidebar />

            <Main>
                <Header />


                <Card>
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
                                        <Avatar className="avatar avatar-user-list" />
                                    </li>
                                    <li className="users__info-item">
                                        <Avatar className="avatar avatar-user-list" />

                                    </li>
                                    <li className="users__info-item">
                                        <Avatar className="avatar avatar-user-list" />

                                    </li>
                                    <li className="users__info-item">
                                        <Avatar className="avatar avatar-user-list" />

                                    </li>
                                    <li className="users__info-item">
                                        <Avatar className="avatar avatar-user-list" />

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
                                        fssaf
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
                                        <img src={images.edit} alt="edit note" />
                                        <img src={images.add_note} alt="add note" />
                                        <img src={images.delete_note_red} alt="delete note" />
                                    </li>
                                    <li className="users__info-item">
                                        <img src={images.edit} alt="edit note" />
                                        <img src={images.add_note} alt="add note" />
                                        <img src={images.delete_note_red} alt="delete note" />
                                    </li>
                                    <li className="users__info-item">
                                        <img src={images.edit} alt="edit note" />
                                        <img src={images.add_note} alt="add note" />
                                        <img src={images.delete_note_red} alt="delete note" />
                                    </li>
                                    <li className="users__info-item">
                                        <img src={images.edit} alt="edit note" />
                                        <img src={images.add_note} alt="add note" />
                                        <img src={images.delete_note_red} alt="delete note" />
                                    </li>
                                    <li className="users__info-item">
                                        <img src={images.edit} alt="edit note" />
                                        <img src={images.add_note} alt="add note" />
                                        <img src={images.delete_note_red} alt="delete note" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Card>
            </Main>
        </Container>
    )
}

export default Users