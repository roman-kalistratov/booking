import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Buble, Divider } from "../../components";
import "./login.scss";

const Login = () => {
    const [credentials, setCredentials] = useState({
        firstname: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            if (res.data.isAdmin) {
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
                navigate("/");
            } else {
                dispatch({
                    type: "LOGIN_FAILURE",
                    payload: { message: "You are not allowed!" },
                });
            }
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };
    

    return (
        <div className="login">

            <Buble className={"buble"} />
            <Buble className={"buble big"} />

            <div className="login__wrapper">
                <h2 className='login__title'>Log in to R-trip</h2>
                <p className='login__text'>Log in to access your bookings <br /> from any device.</p>
                <Divider />
                <div className="login__content" >
                    <label className='login__label'>
                        <span>Name:</span>
                        <input
                            type="text"
                            placeholder="Name"
                            id="firstname"
                            onChange={handleChange}
                            className="login__input"
                        />
                    </label>

                    <label className='login__label'>
                        <span>Password:</span>
                        <input
                            type="password"
                            placeholder="password"
                            id="password"
                            onChange={handleChange}
                            className="login__input"
                        />
                    </label>

                    <button disabled={loading} onClick={handleClick} className="login__btn btn">
                        Login
                    </button>
                    {error && <span style={{ "color": "#ff0000" }}>{error.message}</span>}
                    <Divider />

                    <div className="login__bottom">
                        <span>New here?</span>
                        <Link to="/register" className="btn">Create an account </Link>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Login;