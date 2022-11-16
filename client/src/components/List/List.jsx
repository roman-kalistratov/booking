import React from 'react';
import { GrFormClose } from "react-icons/gr";
import { images } from '../../constants';
import './list.scss';

const List = () => {
    return (
        <div className='list'>
            <h3 className="list__subInfo">
                Applied filters
                <span className='list__count'>123 list were found</span>
            </h3>

            <div className="list__filters">
                <div className="list__filters-item">
                    <h4 className="list__filters-name">category</h4>
                    <h4 className="list__filters-value">tours</h4>
                    <div className="list__filters-removeBtn"><GrFormClose /></div>
                </div>
                <div className="list__filters-item">
                    <h4 className="list__filters-name">category</h4>
                    <h4 className="list__filters-value">tours</h4>
                    <div className="list__filters-removeBtn"><GrFormClose /></div>
                </div>
                <div className="list__filters-item">
                    <h4 className="list__filters-name">category</h4>
                    <h4 className="list__filters-value">tours</h4>
                    <div className="list__filters-removeBtn"><GrFormClose /></div>

                </div>
                <h4 className="list__filters-clearAll">Clear All</h4>
            </div>

            <div className="list__tour">
                <img className='list__tour-img' src={images.slide5} alt="img" />
                <div className="list__tour-info">
                    <h4 className="list__tour-category">Safari</h4>
                    <h3 className="list__tour-title">5 Day Northern Tanzania Big 5 Safari</h3>
                    <img className='list__tour-rating' src={images.five_star} alt="tour rating" />
                    <p className="list__tour-descr">Our 5 day Tanzania safari was absolutely life changing! Great Lake Expedition didn't...</p>
                    <h4 className="list__tour-travelAttr">Travel Style : <span>Family, Private, Partially Guided, Christmas & New Year</span></h4>
                    <h4 className="list__tour-travelAttr">Free Cancellation available</h4>
                </div>
                <div className="list__tour-price">
                    <h3 className='list__price-number'>from 149$</h3>
                    <button className="list__price-btn btn">View Tour</button>
                </div>
            </div>
            <div className="list__tour">
                <img className='list__tour-img' src={images.slide4} alt="img" />
                <div className="list__tour-info">
                    <h4 className="list__tour-category">Safari</h4>
                    <h3 className="list__tour-title">5 Day Northern Tanzania Big 5 Safari</h3>
                    <img className='list__tour-rating' src={images.five_star} alt="tour rating" />
                    <p className="list__tour-descr">Our 5 day Tanzania safari was absolutely life changing! Great Lake Expedition didn't...</p>
                    <h4 className="list__tour-travelAttr">Travel Style : <span>Family, Private, Partially Guided, Christmas & New Year</span></h4>
                    <h4 className="list__tour-travelAttr">Free Cancellation available</h4>
                </div>
                <div className="list__tour-price">
                    <h3 className='list__price-number'>from 149$</h3>
                    <button className="list__price-btn btn">View Tour</button>
                </div>
            </div>
            <div className="list__tour">
                <img className='list__tour-img' src={images.slide3} alt="img" />
                <div className="list__tour-info">
                    <h4 className="list__tour-category">Safari</h4>
                    <h3 className="list__tour-title">5 Day Northern Tanzania Big 5 Safari</h3>
                    <img className='list__tour-rating' src={images.five_star} alt="tour rating" />
                    <p className="list__tour-descr">Our 5 day Tanzania safari was absolutely life changing! Great Lake Expedition didn't...</p>
                    <h4 className="list__tour-travelAttr">Travel Style : <span>Family, Private, Partially Guided, Christmas & New Year</span></h4>
                    <h4 className="list__tour-travelAttr">Free Cancellation available</h4>
                </div>
                <div className="list__tour-price">
                    <h3 className='list__price-number'>from 149$</h3>
                    <button className="list__price-btn btn">View Tour</button>
                </div>
            </div>
            <div className="list__tour">
                <img className='list__tour-img' src={images.slide2} alt="img" />
                <div className="list__tour-info">
                    <h4 className="list__tour-category">Safari</h4>
                    <h3 className="list__tour-title">5 Day Northern Tanzania Big 5 Safari</h3>
                    <img className='list__tour-rating' src={images.five_star} alt="tour rating" />
                    <p className="list__tour-descr">Our 5 day Tanzania safari was absolutely life changing! Great Lake Expedition didn't...</p>
                    <h4 className="list__tour-travelAttr">Travel Style : <span>Family, Private, Partially Guided, Christmas & New Year</span></h4>
                    <h4 className="list__tour-travelAttr">Free Cancellation available</h4>
                </div>
                <div className="list__tour-price">
                    <h3 className='list__price-number'>from 149$</h3>
                    <button className="list__price-btn btn">View Tour</button>
                </div>
            </div>
            <div className="list__tour">
                <img className='list__tour-img' src={images.slide1} alt="img" />
                <div className="list__tour-info">
                    <h4 className="list__tour-category">Safari</h4>
                    <h3 className="list__tour-title">5 Day Northern Tanzania Big 5 Safari</h3>
                    <img className='list__tour-rating' src={images.five_star} alt="tour rating" />
                    <p className="list__tour-descr">Our 5 day Tanzania safari was absolutely life changing! Great Lake Expedition didn't...</p>
                    <h4 className="list__tour-travelAttr">Travel Style : <span>Family, Private, Partially Guided, Christmas & New Year</span></h4>
                    <h4 className="list__tour-travelAttr">Free Cancellation available</h4>
                </div>
                <div className="list__tour-price">
                    <h3 className='list__price-number'>from 149$</h3>
                    <button className="list__price-btn btn">View Tour</button>
                </div>
            </div>
        </div>
    )
}

export default List