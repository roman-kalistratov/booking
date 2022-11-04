import React, { useState } from 'react';
import { Divider } from '../../components';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { images } from '../../constants';

import './filters.scss';


const category = [{ name: 'tours' }, { name: 'Landmarks' }, { name: 'Museums' }, { name: 'Activities' }];
const advStyles = [{ name: 'Hiking & Trekking' }, { name: 'River Cruises' }, { name: 'Safari' }, { name: 'Explore Europe' }, { name: 'Popular Adventure' }];
const Filters = () => {
    const [isDropDown, setIsDropDown] = useState(true);
    const [minRange, setMinRange] = useState(0);
    const [maxRange, setMaxRange] = useState(100);

    const [checkedCategory, setCheckedCategory] = useState(new Array(category.length).fill(false));
    const [checkedAdvStyles, setAdvStyles] = useState(new Array(advStyles.length).fill(false));

    const handleOnCategory = (position) => {
        const updatedCheckedCategory = checkedCategory.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedCategory(updatedCheckedCategory);
    }

    const handleOnAdvStyles = (position) => {
        const updatedAdvStyles = checkedAdvStyles.map((item, index) =>
            index === position ? !item : item
        );

        setAdvStyles(updatedAdvStyles);
    }


    console.log(isDropDown);



    return (
        <div className='filters'>
            <h2 className="filters__title">Filter</h2>
            <div className="filters__dropdown">
                <h3 className="filters__dropdown-title" onClick={() => setIsDropDown(!isDropDown)}>
                    Price  
                    <span className={`filters__dropdown-icon ${isDropDown ? 'open' : ''}`}><MdKeyboardArrowUp /></span>
                </h3>

                <div className={`filters__dropdown-item ${isDropDown ? 'open' : ''}`}>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">₪ 0 - ₪ 70<span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">₪ 70 - ₪ 140 <span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">₪ 140 - ₪ 263 <span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">₪ 263 - ₪ 437 <span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">₪ 437+<span>(123)</span></label>
                    </div>
                </div>
            </div>
            <Divider />



            <div className="filters__dropdown">
                <h3 className="filters__dropdown-title" onClick={() => setIsDropDown(!isDropDown)}>
                    Category  
                    <span className={`filters__dropdown-icon ${isDropDown ? 'open' : ''}`}><MdKeyboardArrowUp /></span>
                </h3>

                <div className={`filters__dropdown-item ${isDropDown ? 'open' : ''}`}>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">Tours<span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">Activities<span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">Landmarks<span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">Museums <span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">Attractions<span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">Transportation & services<span>(123)</span></label>
                    </div>
                </div>
            </div>
            <Divider />



            <div className="filters__dropdown">
                <h3 className="filters__dropdown-title" onClick={() => setIsDropDown(!isDropDown)}>
                Rating  
                <span className={`filters__dropdown-icon ${isDropDown ? 'open' : ''}`}><MdKeyboardArrowUp /></span>
                </h3>

                <div className={`filters__dropdown-item ${isDropDown ? 'open' : ''}`}>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox"><img src={images.five_star} alt="five start" /><span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox"><img src={images.four_star} alt="five start" /><span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox"><img src={images.three_star} alt="five start" /><span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox"><img src={images.two_star} alt="five start" /> <span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox"><img src={images.one_star} alt="five start" /><span>(123)</span></label>
                    </div>                    
                </div>
            </div>
            <Divider />



            <div className="filters__dropdown">
                <h3 className="filters__dropdown-title" onClick={() => setIsDropDown(!isDropDown)}>
                Adventure Styles  
                <span className={`filters__dropdown-icon ${isDropDown ? 'open' : ''}`}><MdKeyboardArrowUp /></span>
                    
                </h3>

                <div className={`filters__dropdown-item ${isDropDown ? 'open' : ''}`}>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">Hiking & Trekking<span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">River Cruises<span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">Safari<span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">Explore Europe<span>(123)</span></label>
                    </div>
                    <div className="filters__dropdown-input">
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            className='filters__dropdown-checkbox'
                            name="name"
                            value="name"
                        />
                        <label htmlFor="custom-checkbox">Popular Adventure<span>(123)</span></label>
                    </div>                    
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default Filters