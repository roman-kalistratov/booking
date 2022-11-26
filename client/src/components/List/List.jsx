import './list.scss';

const List = ({data,rating}) => {

    // adds the correct path for the rating image relative to the item's rating
    const crntRating = (tourRaiting) => {
        const arr = rating.filter(item => item.value === tourRaiting);
        return arr[0].img
    }
    
    return (
        <div className='list'>
            {
                data.map((item) => (
                    <div className="list__tour">
                        <img className='list__tour-img' src={`/uploads/Tours/${item.photos[0]}`} alt="img" />
                        <div className="list__tour-info">
                            <h4 className="list__tour-category">{item.category}</h4>
                            <h3 className="list__tour-title">{item.title}</h3>
                            <img className='list__tour-rating' src={`/uploads/${crntRating(item.rating)}`} alt="tour rating" />
                            <p className="list__tour-descr">{item.desc}</p>                           
                            <h4 className="list__tour-travelAttr">Free Cancellation available</h4>
                        </div>
                        <div className="list__tour-price">
                            <h3 className='list__price-number'>from {item.price}$</h3>
                            <button className="list__price-btn btn">View Tour</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default List