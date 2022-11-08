import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import './dropDownNav.scss';

const DropDownNav = ({ title, children }) => {
    const [active, setActive] = useState(true);
    
    return (
        <div className="dropDownNav">
            <div className="dropDownNav-title" onClick={() => setActive(!active)}>
                {title}
                <span className={`dropDownNav-icon ${active ? 'active' : ''}`}><MdKeyboardArrowRight /></span>
            </div>
            <ul className={`dropDownNav-list ${active ? "active" : ''}`}>
                <li className="dropDownNav-item">
                    <div className="dropDownNav-menu">
                        {children}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default DropDownNav