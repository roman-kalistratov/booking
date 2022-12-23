import { CiMoneyBill } from "react-icons/ci";
import { GiAirBalloon, GiTrophyCup } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import './whyRTours.scss';

const WhyRTours = () => {
    return (
        <section className='whyRTours'>
            <h2 className='whyRTours__title'>Why book with R-tours?</h2>
            
            <div className="whyRTours__wrapper container">
                {
                    whyRToursData.map((item,i) =>
                        <div key={item+`${i}`} className="whyRTours__item">
                            {item.icon}
                            <h3 className="whyRTours__item-title">
                                {item.title}
                            </h3>
                            <p className="whyRTours__item-text">{item.text}</p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default WhyRTours


const whyRToursData = [
    {
        icon: <CiMoneyBill className='whyRTours__item-icon' />,
        title: "Ultimate flexibility",
        text: "You’re in control, with free cancellation and payment options to satisfy any plan or budget."
    },
    {
        icon: <GiAirBalloon className='whyRTours__item-icon' />,
        title: "Memorable experiences",
        text: "Browse and book tours and activities so incredible, you’ll want to tell your friends."
    },
    {
        icon: <BsBookmarkStar className='whyRTours__item-icon' />,
        title: "Quality at our core",
        text: "You’re in control, with free cancellation and payment options to satisfy any plan or budget."
    },
    {
        icon: <GiTrophyCup className='whyRTours__item-icon' />,
        title: "Award-winning support",
        text: "New price? New plan? No problem. We’re here to help, 24/7."
    },
]