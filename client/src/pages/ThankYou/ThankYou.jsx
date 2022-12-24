import { useState, useContext } from 'react'
import { Divider, Footer, Navbar } from '../../components';
import { GoCalendar } from 'react-icons/go';
import { AiOutlineUser } from 'react-icons/ai';
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import './thankYou.scss';

const ThankYou = () => {
  const location = useLocation();
  const [orderId, setOrderId] = useState(location.state.orderId);
  const [tour, setTour] = useState(location.state.data);
  const [adults, setAdults] = useState(location.state.adults);
  const [dateTour, setDateTour] = useState(location.state.date);
  const { user } = useContext(AuthContext);
 
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <main className="main">
          <div className="thankYou">
            <div className="thankYou__top"></div>
            <div className="thankYou__wrapper container">
              <div className="thankYou__inner">
                <h2 className='thankYou__title'>Thank you. The order was successfully received.</h2>
                <div className="thankYou__order">

                  <table>
                    <thead>
                      <tr>
                        <th><h3>Order Number:</h3></th>
                        <th><h3>Date:</h3></th>
                        <th><h3>Email:</h3></th>
                        <th><h3>Adults:</h3></th>
                        <th><h3>Total price:</h3></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>{orderId}</td>
                        <td>{new Date().toLocaleDateString()}</td>
                        <td>{user.email}</td>
                        <td>{adults}</td>
                        <td>{tour.price * adults}$</td>
                      </tr>
                    </tbody>
                  </table>

                  <Divider />

                  <div className="thankYou__details">
                    <div className="thankYou__details-wrapper">
                      <img className='thankYou__details-img' src={`/uploads/Tours/${tour.photos[0]}`} alt="order-tour-img" />
                      <h3 className="thankYou__details-tour">{tour.title}</h3>
                      <h3 className="thankYou__details-cnt">x 1</h3>
                      <h3 className="thankYou__details-adults"><AiOutlineUser /> 1 person</h3>
                      <h3 className="thankYou__details-date"><GoCalendar />{new Date(dateTour).toLocaleDateString()}</h3>
                      <h3 className="thankYou__details-price">{tour.price}$</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default ThankYou