import { useState, useEffect, useContext } from 'react';
import { DateRange } from 'react-date-range';
import { AiOutlineSearch } from 'react-icons/ai';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from 'react-router-dom';
import './search.scss';
import { setMonth } from 'date-fns';

const Search = () => {
    const [open, setOpen] = useState(false);
    const [destination, setDestination] = useState("");
    const [error, setError] = useState([]);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date().setDate(new Date().getDate() + 3),
            key: 'selection'
        }
    ])

    const navigate = useNavigate();

    const { dispatch } = useContext(SearchContext);

    const handleDestination = (e) => {

        setDestination(e.target.value);
        setError('');
    }

    const handleSearch = () => {
        if (destination) {
            dispatch({ type: "NEW_SEARCH", payload: { destination, dates } });
            navigate("/tours", { state: { destination, dates } });
        } else {           
            setError("Enter destination");
        }
    };

    console.log(error);

    return (
        <div className='search'>
            <div className="search__wrapper container">
                <div className="search__wrapper-title">
                    <AiOutlineSearch />
                    <h3>Where are you going?</h3>
                </div>
                <div className="search__item">
                    <input type="text" placeholder='Destination' onChange={handleDestination} />
                    {error && <h3 className='search__error'>{error}</h3>}
                </div>
                <div className="search__item">

                    <input
                        placeholder={`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                        readOnly
                        className="inputBox"
                        onClick={() => setOpen(open => !open)}
                    />


                    {open &&
                        <>
                            <DateRange
                                onChange={item => setDates([item.selection])}
                                editableDateInputs={true}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                months={2}
                                direction="horizontal"
                                className="search__calendar"
                            />
                            <span className='search__item-close' onClick={() => setOpen(!open)}>x</span>
                        </>
                    }

                </div>
                <button className='search__btn btn' onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default Search