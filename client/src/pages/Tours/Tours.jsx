import React, { useState } from 'react';
import {
  Footer,
  Navbar,
  Filters,
  ScrollToTop,
  List,
  Spinner
} from '../../components';
import { useLocation } from "react-router-dom";
import { changeSymbol } from '../../utils/changeSymbol.js';
import { GrFormClose } from "react-icons/gr";
import reFetch from '../../hooks/useFetch';

import './tours.scss';

const Tours = () => { 
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [priceName, setPriceName] = useState('');
  const [categoryName, setCategoryName] = useState('ALL');
  const [ratingValue, setRatingValue] = useState('ALL');
  const [checkedPrice, setCheckedPrice] = useState(null);
  const [checkedCategory, setCheckedCategory] = useState(null);
  const [checkedRatingValue, setCheckedRatingValue] = useState(null);
  const [limit, setLimit] = useState(10);

  const { data, loading, error } = reFetch(`/tours?destination=${destination}&min=${min || 0}&max=${max || 999}&category=${changeSymbol(categoryName)}&rating=${ratingValue}&limit=${limit}`);
  console.log(data);

  const getFilterPrice = (e) => {
    if (e.target.checked) {
      setCheckedPrice(e.target.id);

      const crtPrice = prices.filter((price) => price.id === parseInt(e.target.id))
      setMin(crtPrice[0].min);
      crtPrice[0].max === undefined ? setMax(9999) : setMax(crtPrice[0].max);

      setPriceName(`$${crtPrice[0].min} ${crtPrice[0].max === undefined ? "+" : "- $" + crtPrice[0].max}`);

    } else {
      setMin(undefined);
      setMax(undefined);
      setCheckedPrice(null);
    }
  }

  const getFilteredCategory = (e) => {
    if (e.target.checked) {
      setCategoryName(e.target.value);
      setCheckedCategory(e.target.id);
    } else {
      setCategoryName('ALL');
      setCheckedCategory(null);
    }
  }

  const getRatingValue = (e) => {
    if (e.target.checked) {
      setRatingValue(e.target.value);
      setCheckedRatingValue(e.target.id);
    } else {
      setRatingValue('ALL');
      setCheckedRatingValue(null);
    }
  }

  const clearPriceFilter = () => {
    setCheckedPrice(null);
    setMin(undefined);
    setMax(undefined);
  }
  const clearCategoryFilter = () => {
    setCheckedCategory(null);
    setCategoryName('ALL');
  }

  const clearRatingFilter = () => {
    setCheckedRatingValue(null)
    setRatingValue('ALL');
  }

  const clearAllFilters = () => {
    setCategoryName('ALL');
    setRatingValue('ALL');
    setCheckedPrice(null);
    setCheckedCategory(null);
    setCheckedRatingValue(null);
    setMin(undefined);
    setMax(undefined);
  }

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="wrapper__top"></div>
        <main className="main">        
          <div className="main__container container">
            
            <div className="main__left">
              <Filters
                getFilterPrice={getFilterPrice}
                getFilteredCategory={getFilteredCategory}
                getRatingValue={getRatingValue}
                prices={prices}
                categories={categories}
                rating={rating}
                checkedPrice={checkedPrice}
                checkedCategory={checkedCategory}
                checkedRatingValue={checkedRatingValue}
              />
            </div>
            <div className="main__right">
              <h3 className="main__right__subInfo">
                Applied filters
                <span className='main__right__count'>{data.length} list were found</span>
              </h3>

              <div className="main__right__filters">
                {
                  checkedCategory ? (
                    <>
                      <div className="main__right__filters-item">
                        <h4 className="main__right__filters-name">category</h4>
                        <h4 className="main__right__filters-value">{categoryName}</h4>
                        <div className="main__right__filters-removeBtn" onClick={clearCategoryFilter}><GrFormClose /></div>
                      </div>
                    </>
                  ) : (
                    null
                  )
                }

                {
                  checkedPrice ? (
                    <div className="main__right__filters-item">
                      <h4 className="main__right__filters-name">price</h4>
                      <h4 className="main__right__filters-value">{priceName}</h4>
                      <div className="main__right__filters-removeBtn" onClick={clearPriceFilter}><GrFormClose /></div>
                    </div>
                  ) : (
                    null
                  )
                }

                {
                  checkedRatingValue ? (
                    <div className="main__right__filters-item">
                      <h4 className="main__right__filters-name">rating</h4>
                      <h4 className="main__right__filters-value">{ratingValue}</h4>
                      <div className="main__right__filters-removeBtn" onClick={clearRatingFilter}><GrFormClose /></div>
                    </div>
                  ) : (
                    null
                  )
                }

                {checkedCategory || checkedPrice || checkedRatingValue ? (<h4 className="main__right__filters-clearAll" onClick={clearAllFilters}>Clear All</h4>) : (null)}
              </div>
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {

                    data.length > 0 ? (
                      <>
                        <List data={data} rating={rating} />
                        {limit > 10 && <button className='btn' type="button" onClick={() => setLimit(limit + 4)}>show more</button>}
                      </>
                    ) : (<h3>Sorry.No results found.</h3>)
                  }

                </>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  )
}

export default Tours


const prices = [
  {
    id: 1,
    min: 0,
    max: 70,
    cnt: '123'
  }, {
    id: 2,
    min: 70,
    max: 140,
    cnt: '111'
  }, {
    id: 3,
    min: 140,
    max: 263,
    cnt: '21'
  }, {
    id: 4,
    min: 263,
    max: 437,
    cnt: '11'
  }, {
    id: 5,
    min: 437,
    cnt: '152'
  }
]

const categories = [
  {
    id: 1,
    value: 'Art & Culture',
    cnt: '123'
  }, {
    id: 2,
    value: 'Food & Drink',
    cnt: '111'
  }, {
    id: 3,
    value: 'Outdoor Activities',
    cnt: '21'
  }, {
    id: 4,
    value: 'Unique Experiences',
    cnt: '11'
  }, {
    id: 5,
    value: 'Seasonal & Special',
    cnt: '152'
  }
]

const rating = [
  {
    id: 1,
    value: '5',
    img: "five_star.png",
    cnt: '123'
  }, {
    id: 2,
    value: '4',
    img: "four_star.png",
    cnt: '111'
  }, {
    id: 3,
    value: '3',
    img: "three_star.png",
    cnt: '21'
  }, {
    id: 4,
    value: '2',
    img: "two_star.png",
    cnt: '11'
  }, {
    id: 5,
    value: '1',
    img: "one_star.png",
    cnt: '152'
  }
]
