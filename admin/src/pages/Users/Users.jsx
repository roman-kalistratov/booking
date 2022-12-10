import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar, Navbar, Card, Avatar } from '../../components';
import { UpdateUser } from '../../form';
import { images } from '../../constants';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import './users.scss';

const Users = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const [list, setList] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [isEditId, setIsEditId] = useState('');
    const { data, loading, error } = useFetch(`/${path}`);

    useEffect(() => {
        setList(data);       
    }, [data]);

    const handleDelete = async (e) => {
        try {
            await axios.delete(`/${path}/${e.target.id}`);
            setList(list.filter((item) => item._id !== e.target.id));
        } catch (err) { }
    };

    const handleEdit = (e) => {
        setIsEdit(!isEdit);
        setIsEditId(e.target.id);
    };

    return (
        <div className="users">
            <Sidebar />
            <div className="users__container">
                <Navbar />
                <Card>
                    <ul className='users__filters'>
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
                            <li className="users__filters-item">
                                <input type="search" placeholder='Please enter user name' />
                            </li>
                        </li>
                    </ul>


                    <table className="users__list">
                        <thead>
                            <tr>
                                <th>-</th>
                                <th>id</th>
                                <th>first name</th>
                                <th>last name</th>
                                <th>email</th>
                                <th>phone</th>
                                <th>city</th>
                                <th>country</th>
                                <th>-</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map(user => (
                                    !user.isAdmin &&
                                    <>
                                        <tr key={user.id}>
                                            <td><Avatar className="avatar avatar-user-list" path = {user.photo}/></td>
                                            <td>{user._id}</td>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.city}</td>
                                            <td>{user.country}</td>

                                            <td className='users__list-actions'>
                                                <img style={{ width: "25px" }} id={user._id} src={images.edit} alt="edit note" onClick={handleEdit} />
                                                <img style={{ width: "25px" }} id={user._id} src={images.delete_note_red} alt="delete note icon" onClick={handleDelete} />
                                            </td>
                                        </tr>
                                        {
                                            (isEdit && isEditId === user._id) &&
                                            <tr>
                                                <td colspan="9">
                                                    <Card>
                                                        <UpdateUser user={user}/>
                                                    </Card>
                                                </td>
                                            </tr>
                                        }
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                </Card>

            </div>
        </div>
    )
}

export default Users

