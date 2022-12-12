import { useState, useContext } from 'react';
import { Divider, Footer, Navbar, Slider } from '../../components';
import { Calendar } from 'react-date-range';
import { GoCalendar } from 'react-icons/go';
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import format from 'date-fns/format';
import './tour.scss';

const Tour = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const { data, loading, error } = useFetch(`/tours/find/${id}`);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const crntRating = (tourRaiting) => {
        const arr = rating.filter(item => item.value === tourRaiting);
        return arr[0].img
    }

    const handleClick = () => {
        if (user) {
            //   setOpenModal(true);
        } else {
            navigate("/login");
        }
    };

    return (
        <>
            <Navbar />
            <div className="wrapper">
                <main className="main">
                    <div className="tour">
                        <div className="tour__top"></div>
                        {loading ? (
                            "loading"
                        ) : (
                            <div className="tour__wrapper container">
                                <h3 className='tour__subtitle'>Madrid tours</h3>
                                <h2 className='tour__title'>{data.title}</h2>

                                <div className='tour__rating'>
                                    {
                                        data.rating ? (
                                            <>
                                                <img src={`/uploads/${crntRating(data.rating)}`} alt="tour rating" />
                                                <h3>52 Reviews | {data.category}</h3>
                                            </>
                                        ) : (null)
                                    }
                                </div>

                                <div className="tour__inner">
                                    {
                                        data.photos ? (
                                            <div className="tour__slider">
                                                <Slider.TourSlider photos={data.photos} />
                                            </div>) : (null)
                                    }

                                    <div className="tour__details">
                                        <h3 className='tour__details-price'>from {data.price}$</h3>
                                        <h3 className='tour__details-date'>Select Date and Travelers</h3>

                                        <div className="tour__date">
                                            <input
                                                placeholder={`${format(date, "MM/dd/yyyy")}`}
                                                readOnly
                                                className="inputBox"
                                                onClick={() => setOpen(open => !open)}
                                            />
                                            <div className="tour__date-icon">
                                                <GoCalendar />
                                            </div>
                                        </div>

                                        {open &&
                                            <>
                                                <Calendar
                                                    onChange={item => setDate(item)}
                                                    editableDateInputs={false}
                                                    direction="horizontal"
                                                    months={1}
                                                    className="tour__calendar"
                                                />
                                                <span className='search__item-close' onClick={() => setOpen(!open)}>x</span>
                                            </>
                                        }
                                        <button className='tour__btn btn' type='button'>Search</button>
                                        <Divider />
                                        <p className='tour__desc'>{data.desc}</p>
                                        <Divider />
                                        <div className="tour__total">
                                            <h3 className="tour__total-price">total: ${data.price}</h3>
                                        </div>
                                        <button className='tour__btn-book btn' type='button' onClick={handleClick}>Book now</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
                <Footer />
            </div>


        </>
    )
}

export default Tour


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