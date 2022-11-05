import React, { useState } from 'react';
import FilterItem from './FilterItem';
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

    const prices = [
        {
            value: '₪ 0 - ₪ 70',
            cnt: '123'
        }, {
            value: '₪ 70 - ₪ 140',
            cnt: '111'
        }, {
            value: '₪ 140 - ₪ 263',
            cnt: '21'
        }, {
            value: '₪ 263 - ₪ 437',
            cnt: '11'
        }, {
            value: '₪ 437+',
            cnt: '152'
        }
    ]

    const categories = [
        {
            value: 'Tours',
            cnt: '123'
        }, {
            value: 'Activities',
            cnt: '111'
        }, {
            value: 'Landmarks',
            cnt: '21'
        }, {
            value: 'Museums',
            cnt: '11'
        }, {
            value: 'Attractions',
            cnt: '152'
        }, {
            value: 'Transportation & services',
            cnt: '152'
        }
    ]

    const rating = [
        {
            value: images.five_star,
            cnt: '123'
        }, {
            value: images.four_star,
            cnt: '111'
        }, {
            value: images.three_star,
            cnt: '21'
        }, {
            value: images.two_star,
            cnt: '11'
        }, {
            value: images.one_star,
            cnt: '152'
        }
    ]

    const styles = [
        {
            value: "Hiking & Trekking",
            cnt: '123'
        }, {
            value: "River Cruises",
            cnt: '111'
        }, {
            value: "Safari",
            cnt: '21'
        }, {
            value: "Explore Europe",
            cnt: '11'
        }, {
            value: "Popular Adventure",
            cnt: '152'
        }
    ]

    return (
        <div className='filters'>
            <h2 className="filters__title">Filter</h2>
            <FilterItem data = {prices} title = "Price" trigger="" />            
            <FilterItem data = {categories} title = "Categories" trigger="" />
            <FilterItem data = {rating} title = "Rating" trigger="images" />
            <FilterItem data = {styles} title = "Adventure Styles" trigger="" />
        </div>
    )
}

export default Filters