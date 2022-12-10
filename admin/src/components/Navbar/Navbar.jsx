import { useContext } from 'react';
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import { Link,useNavigate } from 'react-router-dom';
import { images } from '../../constants';
import './navbar.scss';

const Navbar = () => {
    const { user,dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogOut = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/auth/logout");

            dispatch({ type: "LOGOUT", payload: res.data.details });
            navigate("/");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    }
    return (
        <nav className='navbar'>
            <div className="navbar__user">
                <img className='navbar__user-img' src={`uploads/${user.photo ? `${user.photo}` : `avatar-1.png`} `} alt="avatar" />
                <h3 className="navbar__user-name">Hello {user.firstname}</h3>
            </div>
            <Link to='/' className="navbar__link">
                Back to Home
            </Link>

            <Link className='navbar__link' onClick={handleLogOut}>
                <img src={images.log_out_white} alt="logout-icon" />Logout
            </Link>
        </nav>
    )
}

export default Navbar