import React from 'react'

const EditProfile = ({onClick, user}) => {
    return (
        <form className="form" >
            <div className="form__label-left">
                <label className='form__label'>
                    First Name:
                </label>
                <input type="text" placeholder={user.firstname} />
            </div>

            <div className="form__label-right">
                <label className='form__label'>
                    Last Name:
                </label>
                <input type="text" placeholder={user.lastname} />
            </div>

            <label className='form__label'>
                Email:
            </label>
            <input type="email" placeholder={user.email} />

            <label className='form__label'>
                Phone:
            </label>
            <input type="text" placeholder={user.phone} />

            <div className="form__label-left">
                <label className='form__label'>
                    Country:
                </label>
                <input type="text" placeholder={user.country} />
            </div>

            <div className="form__label-right">
                <label className='form__label'>
                    City:
                </label>
                <input type="text" placeholder={user.city} />
            </div>

            <label className='form__label'>
                Photo:
            </label>
            <input className='form__input-file' type='file' />

            <button className='form__submit btn'>Edit Profile</button>
            <button className='form__submit btn' onClick = {onClick}>Change Password</button>
        </form>
    )
}

export default EditProfile