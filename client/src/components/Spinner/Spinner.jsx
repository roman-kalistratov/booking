import React from 'react';
import './spinner.scss';
import { images } from '../../constants';

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={images.preloader} alt="preloader" />
        </div>
    )
}

export default Spinner