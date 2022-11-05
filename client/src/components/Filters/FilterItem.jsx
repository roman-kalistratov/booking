import React from 'react';
import { Divider, DropDownNav, DropDownItem } from '../../components';
import { images } from '../../constants';


const FilterItem = ({ data, title, trigger }) => {

    return (
        <DropDownNav>
            <DropDownItem title={title}>
                {
                    data.map((item, i) => {
                        return (
                            <div key={i} className="filters-input">
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${item.value}`}
                                    className='filters-checkbox'
                                    name="name"
                                    value="name"
                                />

                                {trigger === "images" ? (
                                    <label htmlFor={`custom-checkbox-${item.value}`}><img src={item.value} alt="five start" /></label>

                                ) : (
                                    <label htmlFor={`custom-checkbox-${item.value}`}>{item.value}<span>({item.cnt})</span></label>

                                )}

                            </div>
                        )
                    }
                    )}
            </DropDownItem>
            <Divider />
        </DropDownNav>
    )
}

export default FilterItem;
