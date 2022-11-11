import { Container, Main } from '../../layout';
import { Sidebar, Header, Card } from '../../components';
import { images } from '../../../constants';
import './destinations.scss';

const Destinations = () => {
    return (
        <div className='destinations'>
            <Container>
                <Sidebar />
                <Main>
                    <Header />

                    <Card>
                        <ul className='destinations__list-actions'>
                            <li><button type='button' className='btn'>+ New Destination</button></li>
                            <li><button type='button' className='btn'>+ New Destination</button></li>
                            <li><button type='button' className='btn'>+ New Destination</button></li>
                        </ul>
                    </Card>
                    <Card>
                        <div className="tours__wrapper">
                            {toursData.map((item) =>
                                <div className='tours__item'>
                                    <div className="tours__item-img" style={{ backgroundImage: `url(${item.img})` }}></div>
                                    <div className="tours__item-info">
                                        <h2 className='tours__item-title'>{item.name}</h2>
                                        <h4 className="tours__item-subtitle">{item.toursCount} thingins to do</h4>
                                    </div>
                                </div>
                            )}
                        </div>

                        <button type='bottom' className='tours__btn btn'>show more</button>
                    </Card>

                </Main>
            </Container>
        </div>
    )
}

export default Destinations

const toursData = [
    {
        name: "Madrid",
        toursCount: 11,
        img: images.slide1
    },
    {
        name: "Madrid",
        toursCount: 421,
        img: images.slide2
    },
    {
        name: "Madrid",
        toursCount: 122,
        img: images.slide3
    },
    {
        name: "Madrid",
        toursCount: 321,
        img: images.slide4
    },
    {
        name: "Madrid",
        toursCount: 393,
        img: images.slide3
    },
    {
        name: "Madrid",
        toursCount: 641,
        img: images.slide4
    },
    {
        name: "Madrid",
        toursCount: 213,
        img: images.slide5
    },
    {
        name: "Madrid",
        toursCount: 393,
        img: images.slide2
    },
    {
        name: "Madrid",
        toursCount: 11,
        img: images.slide1
    },
    {
        name: "Madrid",
        toursCount: 421,
        img: images.slide2
    },
    {
        name: "Madrid",
        toursCount: 122,
        img: images.slide3
    },
    {
        name: "Madrid",
        toursCount: 321,
        img: images.slide4
    },
]