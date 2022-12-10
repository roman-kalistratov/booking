import { useState } from 'react';
import { Sidebar, Navbar, Card } from '../../components';
import useFetch from '../../hooks/useFetch';
import './destinations.scss';

const Destinations = () => {
    const [limit, setLimit] = useState(12);
    const { data, loading, error } = useFetch(`/destinations?limit=${limit}`);

    return (

        <div className="destinations">
            <Sidebar />
            <div className="destinations__container">
                <Navbar />
                <Card>
                    <ul className='destinations__list-actions'>
                        <li><button type='button' className='btn'>+ New Destination</button></li>
                    </ul>
                </Card>
                <Card>
                    <div className="destinations__list">
                        {data.map((item) =>
                            <div key={item._id} className='destinations__item'>
                                <div className="destinations__item-img" style={{ backgroundImage: `url('/uploads/Destinations/${item.photo}')` }}></div>
                                <div className="destinations__item-info">
                                    <h2 className='destinations__item-title'>{item.name}</h2>
                                    <h4 className="destinations__item-subtitle">{item.tours.length} tours</h4>
                                </div>
                            </div>
                        )}
                    </div>
                    <button type='bottom' className='btn' onClick={() => setLimit(limit + 4)}>show more</button>

                </Card>

            </div>
        </div>

    )
}

export default Destinations
