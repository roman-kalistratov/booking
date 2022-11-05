import React, { useEffect } from 'react';
import { Sidebar, Card } from '../../components';
import { Link } from "react-router-dom";
import { images } from '../../constants';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import './profile.scss';

const regex = `^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$`;

const validationSchema = Yup.object({
    fname: Yup.string().min(4, "First name must be at least 4 characters").required('gsdgsdg'),
    lname: Yup.string().min(4, "Last name must be at least 4 characters"),
    email: Yup.string().email('Invalid email format').required('email is required'),
    phone: Yup.string().matches(regex, "Phone number is not valid"),
    identification: Yup.string().matches(/^\d+$/,"ID number is not valid").min(9,'ID must be 9 digits').max(9,'ID must be 9 digits'),
    picture: Yup.mixed().test('type', (value) => {
        return value && (value[0].type === "image/jpeg" || value[0].type === "image/png" || value[0].type === "image/jpg")})  
});

const EditProfile = () => {
    const { register, reset, formState, formState: { errors, isSubmitSuccessful }, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        console.log('Form data', data);
    }

    useEffect(() => {
        // if (formState.isSubmitSuccessful) {
        //     reset({ name: '', email: '', password: '', confirmPassword: '' });
        // }
    }, [formState, reset]);




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

                    <div className="profile__edit">
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <label className='form__label'>
                                <h3>First Name:</h3>
                                <input type="text" placeholder='First name' {...register("fname")} />
                            </label>
                            <label className='form__label'>
                                <h3>Last Name:</h3>
                                <input type="text" placeholder='Last name' {...register("lname")} />
                            </label>

                            <label className='form__label'>
                                <h3>Email:</h3>
                                <input type="email" placeholder='Email' {...register("email")} />
                            </label>

                            <label className='form__label'>
                                <h3>Phone:</h3>
                                <input type="text" placeholder='Phone' {...register("phone")} />
                            </label>

                            <label className='form__label'>
                                <h3>Identification:</h3>
                                <input type="text" placeholder='ID' {...register("identification")} />
                            </label>

                            <label className='form__label'>
                                <h3>Photo:</h3>
                                <input className='form__input-file' type='file' {...register("picture")} />                                
                            </label>

                            <span className='form__error'>
                                {errors.fname?.message ||
                                    errors.lname?.message ||
                                    errors.email?.message ||
                                    errors.phone?.message ||
                                    errors.identification?.message ||
                                    errors.picture?.message}
                            </span>

                            <button className='form__submit btn'>Edit Profile</button>
                        </form>


                    </div>


                </Card>
            </main>
        </div>
    )
}

export default EditProfile