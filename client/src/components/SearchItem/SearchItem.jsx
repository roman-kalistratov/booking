import { Link } from 'react-router-dom';
import './searchItem.scss';

const SearchItem = ({data,rating}) => {

    // adds the correct path for the rating image relative to the item's rating
    const crntRating = (tourRaiting) => {
        const arr = rating.filter(item => item.value === tourRaiting);
        return arr[0].img
    }
    
    return (
        <div className='searchItem'>
            {
                data.map((item) => (
                    <div key={item._id} className="searchItem__tour">
                        <img className='searchItem__tour-img' src={`/uploads/Tours/${item.photos[0]}`} alt="img" />
                        <div className="searchItem__tour-info">
                            <h4 className="searchItem__tour-category">{item.category}</h4>
                            <h3 className="searchItem__tour-title">{item.title}</h3>
                            <img className='searchItem__tour-rating' src={`/uploads/${crntRating(item.rating)}`} alt="tour rating" />
                            <p className="searchItem__tour-descr">{item.desc}</p>                           
                            <h4 className="searchItem__tour-travelAttr">Free Cancellation available</h4>
                        </div>
                        <div className="searchItem__tour-price">
                            <h3 className='searchItem__price-number'>from {item.price}$</h3>
                            <Link to={`/tours/${item._id}`} className="searchItem__btn btn">View Tour</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SearchItem