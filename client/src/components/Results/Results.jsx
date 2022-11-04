import React from 'react';
import { GrFormClose } from "react-icons/gr";
import { images } from '../../constants';
import './results.scss';

const Results = () => {
    return (
        <div className='results'>

            <h3 className="results__subInfo">
                Applied filters
                <span className='results__count'>123 results were found</span>
            </h3>

            <div className="results__filters">
                <div className="results__filters-item">
                    <h4 className="results__filters-name">category</h4>
                    <h4 className="results__filters-value">tours</h4>
                    <div className="results__filters-removeBtn"><GrFormClose /></div>
                </div>
                <div className="results__filters-item">
                    <h4 className="results__filters-name">category</h4>
                    <h4 className="results__filters-value">tours</h4>
                    <div className="results__filters-removeBtn"><GrFormClose /></div>
                </div>
                <div className="results__filters-item">
                    <h4 className="results__filters-name">category</h4>
                    <h4 className="results__filters-value">tours</h4>
                    <div className="results__filters-removeBtn"><GrFormClose /></div>

                </div>
                <h4 className="results__filters-clearAll">Clear All</h4>
            </div>

            <div className="results__tour">
                <img className='results__tour-img' src={images.slide5} alt="img" />
                <div className="results__tour-info">
                    <h4 className="results__tour-category">Safari</h4>
                    <h3 className="results__tour-title">5 Day Northern Tanzania Big 5 Safari</h3>
                    <img className='results__tour-rating' src={images.five_star} alt="tour rating" />
                    <p className="results__tour-descr">Our 5 day Tanzania safari was absolutely life changing! Great Lake Expedition didn't...</p>
                    <h4 className="results__tour-travelAttr">Travel Style : <span>Family, Private, Partially Guided, Christmas & New Year</span></h4>
                    <h4 className="results__tour-travelAttr">Free Cancellation available</h4>
                </div>
                <div className="results__tour-price">
                    <h3 className='results__price-number'>from 149$</h3>
                    <button className="results__price-btn btn">View Tour</button>
                </div>
            </div>
            <div className="results__tour">
                <img className='results__tour-img' src={images.slide4} alt="img" />
                <div className="results__tour-info">
                    <h4 className="results__tour-category">Safari</h4>
                    <h3 className="results__tour-title">5 Day Northern Tanzania Big 5 Safari</h3>
                    <img className='results__tour-rating' src={images.five_star} alt="tour rating" />
                    <p className="results__tour-descr">Our 5 day Tanzania safari was absolutely life changing! Great Lake Expedition didn't...</p>
                    <h4 className="results__tour-travelAttr">Travel Style : <span>Family, Private, Partially Guided, Christmas & New Year</span></h4>
                    <h4 className="results__tour-travelAttr">Free Cancellation available</h4>
                </div>
                <div className="results__tour-price">
                    <h3 className='results__price-number'>from 149$</h3>
                    <button className="results__price-btn btn">View Tour</button>
                </div>
            </div>
            <div className="results__tour">
                <img className='results__tour-img' src={images.slide3} alt="img" />
                <div className="results__tour-info">
                    <h4 className="results__tour-category">Safari</h4>
                    <h3 className="results__tour-title">5 Day Northern Tanzania Big 5 Safari</h3>
                    <img className='results__tour-rating' src={images.five_star} alt="tour rating" />
                    <p className="results__tour-descr">Our 5 day Tanzania safari was absolutely life changing! Great Lake Expedition didn't...</p>
                    <h4 className="results__tour-travelAttr">Travel Style : <span>Family, Private, Partially Guided, Christmas & New Year</span></h4>
                    <h4 className="results__tour-travelAttr">Free Cancellation available</h4>
                </div>
                <div className="results__tour-price">
                    <h3 className='results__price-number'>from 149$</h3>
                    <button className="results__price-btn btn">View Tour</button>
                </div>
            </div>
            <div className="results__tour">
                <img className='results__tour-img' src={images.slide2} alt="img" />
                <div className="results__tour-info">
                    <h4 className="results__tour-category">Safari</h4>
                    <h3 className="results__tour-title">5 Day Northern Tanzania Big 5 Safari</h3>
                    <img className='results__tour-rating' src={images.five_star} alt="tour rating" />
                    <p className="results__tour-descr">Our 5 day Tanzania safari was absolutely life changing! Great Lake Expedition didn't...</p>
                    <h4 className="results__tour-travelAttr">Travel Style : <span>Family, Private, Partially Guided, Christmas & New Year</span></h4>
                    <h4 className="results__tour-travelAttr">Free Cancellation available</h4>
                </div>
                <div className="results__tour-price">
                    <h3 className='results__price-number'>from 149$</h3>
                    <button className="results__price-btn btn">View Tour</button>
                </div>
            </div>
            <div className="results__tour">
                <img className='results__tour-img' src={images.slide1} alt="img" />
                <div className="results__tour-info">
                    <h4 className="results__tour-category">Safari</h4>
                    <h3 className="results__tour-title">5 Day Northern Tanzania Big 5 Safari</h3>
                    <img className='results__tour-rating' src={images.five_star} alt="tour rating" />
                    <p className="results__tour-descr">Our 5 day Tanzania safari was absolutely life changing! Great Lake Expedition didn't...</p>
                    <h4 className="results__tour-travelAttr">Travel Style : <span>Family, Private, Partially Guided, Christmas & New Year</span></h4>
                    <h4 className="results__tour-travelAttr">Free Cancellation available</h4>
                </div>
                <div className="results__tour-price">
                    <h3 className='results__price-number'>from 149$</h3>
                    <button className="results__price-btn btn">View Tour</button>
                </div>
            </div>
        </div>
    )
}

export default Results