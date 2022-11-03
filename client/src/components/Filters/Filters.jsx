import React, { useState } from 'react';

import './filters.scss';

const category = [{ name: 'tours' }, { name: 'Landmarks' }, { name: 'Museums' }, { name: 'Activities' }];
const advStyles = [{ name: 'Hiking & Trekking' }, { name: 'River Cruises' }, { name: 'Safari' }, { name: 'Explore Europe' }, { name: 'Popular Adventure' }];
const Filters = () => {
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

    



    return (
        <div className='filters'>
            <h3 className="filters__found-info">{minRange} results were found {maxRange}</h3>
            <span>Price</span>
            <div className="filters__rangeInputs">
                <input
                    className='filters__range'
                    type="range"
                    min="0"
                    max="49"
                    value={minRange}
                    onChange={(e) => setMinRange(e.target.value)}
                />
                <input
                    className='filters__range'
                    type="range"
                    min="49"
                    max="100"
                    value={maxRange}
                    onChange={(e) => setMaxRange(e.target.value)}
                />
            </div>
            <span>Category</span>
            {
                category.map(({ name }, index) => {
                    return (
                        <li key={index}>
                            <div className="toppings-list-item">
                                <div className="left-section">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={checkedCategory[index]}
                                        onChange={() => handleOnCategory(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>

                            </div>
                        </li>
                    )
                })}
            <span>Adventure Styles</span>
            {
                advStyles.map(({ name }, index) => {
                    return (
                        <li key={index}>
                            <div className="toppings-list-item">
                                <div className="left-section">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={checkedAdvStyles[index]}
                                        onChange={() => handleOnAdvStyles(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>

                            </div>
                        </li>
                    )
                })}
                 <span>Rating</span>

        </div>
    )
}

export default Filters