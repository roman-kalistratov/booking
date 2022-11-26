import { DropDownNav } from '../../components';
import './filters.scss';

const Filters = ({ getFilterPrice, getFilteredCategory,getRatingValue, prices, categories, rating, checkedPrice, checkedCategory,checkedRatingValue }) => {

    
    return (
        <div className='filters'>
            <h2 className="filters__title">Filter</h2>
            <DropDownNav title={"Price"}>
                {
                    prices.map((item, i) => {
                        return (
                            <div key={item.id} className="filters-input">
                                <input
                                    type="checkbox"
                                    id={item.id}
                                    className='filters-checkbox'
                                    name={`price-checkbox-${item.id}`}
                                    value={item.value}
                                    checked={item.id === parseInt(checkedPrice)}
                                    onChange={getFilterPrice}
                                />
                                <label htmlFor={`custom-checkbox-${item.value}`}>${item.min} {`${item.max === undefined ? "+" : "- $" + item.max}`}<span>({item.cnt})</span></label>
                            </div>
                        )
                    }
                    )}
            </DropDownNav>

            <DropDownNav title={"Categories"}>
                {
                    categories.map((item, i) => {
                        return (
                            <div key={i} className="filters-input">
                                <input
                                    type="checkbox"
                                    id={item.id}
                                    className='filters-checkbox'
                                    name={`price-checkbox-${item.id}`}
                                    value={item.value}
                                    checked={item.id === parseInt(checkedCategory)}
                                    onChange={getFilteredCategory}
                                />
                                <label htmlFor={`custom-checkbox-${item.value}`}>{item.value}<span>({item.cnt})</span></label>
                            </div>
                        )
                    }
                    )}
            </DropDownNav>

            <DropDownNav title={"Rating"}>
                {
                    rating.map((item, i) => {
                        return (
                            <div key={i} className="filters-input">
                                <input
                                    type="checkbox"
                                    id={item.id}
                                    className='filters-checkbox'
                                    name={`rating-checkbox-${item.id}`}
                                    value={item.value}
                                    checked={item.id === parseInt(checkedRatingValue)}
                                    onChange={getRatingValue}
                                />

                                <label htmlFor={`custom-checkbox-${item.value}`}><img src={`/uploads/${item.img}`} alt="five start" /></label>
                            </div>
                        )
                    }
                    )}
            </DropDownNav>
        </div>
    )
}


export default Filters