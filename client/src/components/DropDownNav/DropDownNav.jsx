import React from 'react';

import './dropDownNav.scss';


const DropDownNav = ({children}) => {
    return (
        <nav className="dropDownNav">
            <ul className='dropDownNav-list'>{children}</ul>
        </nav>
    )
}

export default DropDownNav