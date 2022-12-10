import React from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
    firstname: Yup.string(),
    lastname: Yup.string(),
    email: Yup.string().email('Invalid email format'),
    phone: Yup.string(),
    country: Yup.string(),
    city: Yup.string(),
    photo: Yup.mixed()
});


const UpdateUser = ({ user }) => {
    const [resError, serResError] = useState('');
    const [file, setFile] = useState("");
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        const userImg = new FormData();
        userImg.append("file", file);

        let newData = {
            firstname : data.firstname || user.firstname,
            lastname : data.lastname || user.lastname,
            email : data.email || user.email,
            phone : data.phone || user.phone,
            country : data.country || user.country,
            city : data.city || user.city,
            photo: file.name || user.photo || ''        
        }         

        try {
            const res = await axios.put(`/users/${user._id}`, newData);
            res.status === 200 ? window.location.reload() : serResError("Something went wrong");

            if(file) {
               await axios.post(`/users`, userImg);
            }
            

        } catch (err) {
            serResError(err.response.data);
        }
    }

    return (
        <form className="form updateUserForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__label-left">
                <label className='form__label'>
                    First Name:
                </label>
                <input
                    placeholder={user.firstname}
                    className="register__input"
                    {...register("firstname")}
                />
            </div>

            <div className="form__label-right">
                <label className='form__label'>
                    Last Name:
                </label>
                <input
                    placeholder={user.lastname}
                    className="register__input"
                    {...register("lastname")}
                />
            </div>

            <label className='form__label'>
                Email:
            </label>
            <input
                className="register__input"
                type="email"
                placeholder={user.email}
                {...register("email")}
            />

            <label className='form__label'>
                Phone:
            </label>
            <input
                className="register__input"
                placeholder={user.phone}
                {...register("phone")}
            />

            <div className="form__label-left">
                <label className='form__label'>
                    Country:
                </label>
                <input
                    className="register__input"
                    placeholder={user.country}
                    {...register("country")}
                />
            </div>

            <div className="form__label-right">
                <label className='form__label'>
                    City:
                </label>
                <input
                    className="register__input"
                    placeholder={user.city}
                    {...register("city")}
                />
            </div>

            <label className='form__label'>
                Photo:
            </label>
            <input
                className='form__input-file'
                type='file'
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
               
            />

            <span className='form__error'>
                {errors.firstname?.message ||
                    errors.lastname?.message ||
                    errors.email?.message ||
                    errors.phone?.message ||
                    errors.country?.message ||
                    errors.city?.message ||
                    resError
                }
            </span>
            <button className='form__submit btn'>Save</button>
        </form>
    )
}

export default UpdateUser