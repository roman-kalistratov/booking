import { useState } from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './search.scss';

const Search = () => {
    const [open, setOpen] = useState(false)
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const handleClick = () => {

    };


    return (
        <div className='search'>
            <div className="search__wrapper">

                <div className="search__item">
                    <input type="text" placeholder='Destination' />
                </div>
                <div className="search__item">
                    <input
                        placeholder={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
                        readOnly
                        className="inputBox"
                        onClick={() => setOpen(open => !open)}
                    />

                    {open &&
                        <DateRange
                            onChange={item => setRange([item.selection])}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                            months={2}
                            direction="horizontal"
                            className="search__calendar"
                        />
                    }

                </div>
                <button className='search__btn btn' onClick={handleClick}>Search</button>
            </div>

        </div>
    )
}

export default Search