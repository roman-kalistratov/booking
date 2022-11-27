import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "../../components";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import "./register.scss";

const validationSchema = Yup.object({
    firstname: Yup.string().required('Firs tname is required').min(4),
    lastname: Yup.string(),
    email: Yup.string().email('Invalid email format').required('email is required'),
    password: Yup.string().min(6).required('password is Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('please confirm password'),
    phone: Yup.string().matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
    ),
    country: Yup.string(),
    city: Yup.string()
}).required();


const Register = () => {
    const [ resError, serResError ] = useState(''); 
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("/auth/register", data);            
            res.status === 200 ? navigate("/login") : serResError("Something went wrong");
          
        } catch (err) {
            serResError(err.response.data);
        }
    }

    return (
        <div className="register">
            <div className="register__wrapper">
                <h2 className='register__title'>Registration</h2>
                <p className='register__text'>Create an account to access your bookings from any device.</p>
                <Divider />
                <form className="register__form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="register__form-wrapper">
                        <label className='register__label label-half'>
                            <span>First Name:</span>
                            <input
                                placeholder='your name'
                                className="register__input"
                                {...register("firstname")}
                            />
                        </label>

                        <label className='register__label label-half'>
                            <span>Last Name:</span>
                            <input
                                placeholder='your lastname'
                                className="register__input"
                                {...register("lastname")}
                            />
                        </label>
                    </div>

                    <label className='register__label'>
                        <span>Email:</span>
                        <input className="register__input" type="email" placeholder='Email' {...register("email")} />
                    </label>

                    <label className='register__label'>
                        <span>Password:</span>
                        <input className="register__input" placeholder='Password' {...register("password")} />
                    </label>

                    <label className='register__label'>
                        <span>Confirm Password:</span>
                        <input className="register__input" placeholder='сonfirm the password' {...register("confirmPassword")} />
                    </label>

                    <label className='register__label'>
                        <span>Phone:</span>
                        <input className="register__input" placeholder='enter the phone number' {...register("phone")} />
                    </label>
                    <label className='register__label'>
                        <span>Country:</span>
                        <input className="register__input" placeholder='enter the country where you live' {...register("country")} />
                    </label>

                    <label className='register__label'>
                        <span>City:</span>
                        <input className="register__input" placeholder='enter the city where you live' {...register("city")} />
                    </label>

                    <span className='register__error'>
                        {errors.firstname?.message ||
                            errors.lastname?.message ||
                            errors.email?.message ||
                            errors.password?.message ||
                            errors.confirmPassword?.message ||
                            errors.phone?.message ||
                            errors.country?.message ||
                            errors.city?.message ||
                            resError ? resError : null
                        }
                    </span>

                    <button className='register__btn btn'>Sign Up</button>

                    <Divider />

                    <div className="register__bottom">
                        <span>Already have an account?</span>
                        <Link to="/login" className="btn">Log In </Link>
                    </div>
                </form>
            </div>
        </div >

    );
};

export default Register;