import { Container, Main } from '../../layout';
import { Sidebar, Header, Card, Avatar } from '../../components';
import { images } from '../../../constants';
import './users.scss';
const Users = () => {
    return (
        <div className="users">
            <Container>
                <Sidebar />
                <Main>
                    <Header />
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
                                    users.map(user => (
                                        <>
                                            <tr key={user.id}>
                                                <td><Avatar className="avatar avatar-user-list" /></td>
                                                <td>{user.id}</td>
                                                <td>{user.first_name}</td>
                                                <td>{user.last_name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.city}</td>
                                                <td>{user.country}</td>

                                                <td className='users__list-actions'>
                                                    <img style={{ width: "25px" }} src={images.edit} alt="edit note" />                                                   
                                                    <img style={{ width: "25px" }} src={images.delete_note_red} alt="edit note" />
                                                </td>
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Card>
                   
                </Main>
            </Container>
        </div>
    )
}

export default Users


const users = [
    {
        id: 3536162,
        first_name: "Axel",
        last_name: "Brewster",
        email: "abrewster0@army.mil",
        phone: "413-492-8926",
        password: "8RSdEaS",
        city: "Trashigang",
        country: "Bhutan"
    },
    {
        id: 1115030,
        first_name: "Liam",
        last_name: "Kopta",
        email: "lkopta1@aboutads.info",
        phone: "201-939-0899",
        password: "QIDhtI8v",
        city: "Tsaritsyno",
        country: "Russia"
    },
    {
        id: 2786484,
        first_name: "Even",
        last_name: "Worsley",
        email: "eworsley2@umich.edu",
        phone: "522-541-1576",
        password: "0OfNzAB3ZNn",
        city: "Pilchowice",
        country: "Poland"
    },
    {
        id: 9928866,
        first_name: "Jessie",
        last_name: "Bartelet",
        email: "jbartelet3@howstuffworks.com",
        phone: "471-886-7764",
        password: "xDddPu0e",
        city: "Longwood",
        country: "Ireland"
    },
    {
        id: 4764328,
        first_name: "Amory",
        last_name: "Jocic",
        email: "ajocic4@bbc.co.uk",
        phone: "287-551-2727",
        password: "9hgYU8",
        city: "Shuigou",
        country: "China"
    },
    {
        id: 5078811,
        first_name: "Aldwin",
        last_name: "Di Bartolommeo",
        email: "adibartolommeo5@google.fr",
        phone: "749-864-9672",
        password: "outhtfugBXB",
        city: "Zhangcun",
        country: "China"
    },
    {
        id: 1907599,
        first_name: "Ashton",
        last_name: "Pickervance",
        email: "apickervance6@about.me",
        phone: "972-592-7184",
        password: "u1dfwQ5Xc",
        city: "Kedungsumurkrajan",
        country: "Indonesia"
    }
]
