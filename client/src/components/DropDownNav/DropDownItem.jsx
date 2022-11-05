import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './dropDownNav.scss';

const DropDownItem = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <li className="dropDownNav-item">
      <div className="dropDownNav-title" onClick={() => setOpen(!open)}>
        {title}
        <span className={`dropDownNav-icon ${open ? 'open' : ''}`}><MdKeyboardArrowRight /></span>
      </div>

      <div className={`dropDownNav-menu ${open ? "open" : ''}`}>
        {children}
      </div>
    </li>
  )
}

export default DropDownItem