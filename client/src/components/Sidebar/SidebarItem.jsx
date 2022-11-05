import React, {useState} from 'react';
import { DropDownNav, DropDownItem } from '../../components';
import { Link } from "react-router-dom";

import './sidebar.scss'
const SidebarItem = ({ data, title }) => {
    const [active,setActive] = useState('profile');   
   
    return (
        <DropDownNav>
            <DropDownItem title={title}>
                {
                    data.map((item) => {
                        return (
                            <Link key={item.id} to={`/${item.link}`} className={`sidebar__link ${active === item.link ? "active" : ''}`} onClick={()=> setActive(item.link)}>
                                <img className='sidebar__icon' src={item.icon} alt="drop icon" />
                                {item.title}
                            </Link>
                        )
                    }
                    )}
            </DropDownItem>
          
        </DropDownNav>
    )
}

export default SidebarItem