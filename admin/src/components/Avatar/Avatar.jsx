import React from 'react';
import { images } from '../../constants';
import './avatar.scss';
const Avatar = ({className}) => {
    return (
        <div className={className}>
            <img src={images.avatar} alt="" />
        </div>
    )
}

export default Avatar