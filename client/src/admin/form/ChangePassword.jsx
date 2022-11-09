import React,{useState} from 'react';
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import './form.scss';

const ChangePassword = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    
    return (
        <form className='form change-password-form'>
            <label className='form__label'>
                Current password:
            </label>
            <input type="text" />

            <label className='form__label'>
                New Password:
            </label>
            <div class="form__password">
                <input type={passwordShown ? "text" : "password"}/>
                {
                    passwordShown ? (
                        <AiOutlineEye onClick={() => setPasswordShown(!passwordShown)} />

                    ): (
                        <AiOutlineEyeInvisible onClick={() => setPasswordShown(!passwordShown)} />
                    )
                }
            </div>

            <label className='form__label'>
                Confirm Password:
            </label>
            <div class="form__password">
                <input type={confirmPasswordShown ? "text" : "password"} required/>
                {
                    confirmPasswordShown ? (
                        <AiOutlineEye onClick={() => setConfirmPasswordShown(!confirmPasswordShown)} />
                    ): (
                        <AiOutlineEyeInvisible onClick={() => setConfirmPasswordShown(!confirmPasswordShown)} />
                    )
                }               
            </div>

            <button className='form__submit btn'>Update Password</button>
        </form>
    )
}

export default ChangePassword