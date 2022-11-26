import React,{useState} from 'react';
import { Divider } from '..';
import {Spinner} from '../../components';
import useFetch from '../../hooks/useFetch';
import './destinations.scss';


const Destinations = () => {
  const [limit,setLimit] = useState(8);
  const {data, loading, error} = useFetch(`/destinations?limit=${limit}`);
 
  return (
    <section className='tours container'>
      <h2 className="tours__title">Destinations</h2>
      <p className="tours__text">Find things to do in cities around the world</p>
      <Divider />

      <div className="tours__wrapper">
        {loading ? (
        <Spinner/>
        ) : data.map((item) =>
          <div className='tours__item' key={item._id}>
            <div className="tours__item-img" style={{ backgroundImage:`url('/uploads/Destinations/${item.photo}')` }}></div>
            <div className="tours__item-info">
              <h2 className='tours__item-title'>{item.name}</h2>
              <h4 className="tours__item-subtitle">{item.tours.length} thingins to do</h4>
            </div>
          </div>
        )}
      </div>

      <button type='bottom' className='tours__btn btn' onClick={() => setLimit(limit + 4)}>show more</button>
    </section>
  )
}

export default Destinations;
