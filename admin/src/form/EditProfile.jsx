import React from 'react'

const EditProfile = ({onClick}) => {
    return (
        <form className="form" >
            <div className="form__label-left">
                <label className='form__label'>
                    First Name:
                </label>
                <input type="text" placeholder='Roman' />
            </div>

            <div className="form__label-right">
                <label className='form__label'>
                    Last Name:
                </label>
                <input type="text" placeholder='Kalistratov' />
            </div>

            <label className='form__label'>
                Email:
            </label>
            <input type="email" placeholder='test@gmail.com' />

            <label className='form__label'>
                Phone:
            </label>
            <input type="text" placeholder='054-1111111' />

            <div className="form__label-left">
                <label className='form__label'>
                    Country:
                </label>
                <input type="text" placeholder='Trashigang' />
            </div>

            <div className="form__label-right">
                <label className='form__label'>
                    City:
                </label>
                <input type="text" placeholder='Zhangcun' />
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