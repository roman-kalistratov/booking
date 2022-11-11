import { Container, Main } from '../../layout';
import { Sidebar, Header, Card } from '../../components';
import { images } from '../../../constants';

import './tours.scss';

const Tours = () => {
  return (
    <div className='tours'>
      <Container>
        <Sidebar />
        <Main>
          <Header />
            <Card>
              <ul className='tours__filters'>
                <li className="tours__filters-item">
                  <select name="category" id="">
                    <option value="" selected disabled hidden>Category</option>
                    <option value="">China</option>
                    <option value="">Colombia</option>
                    <option value="">Yemen</option>
                    <option value="">Indonesia</option>
                  </select>
                </li>
                <li className="tours__filters-item">
                  <select name="Destination" id="">
                    <option value="" selected disabled hidden>Destination</option>
                    <option value="">Leticia</option>
                    <option value="">Tsaritsyno</option>
                    <option value="">Zhangcun</option>
                    <option value="">Kotabaru</option>
                  </select>
                </li>
                <li className="tours__filters-item">
                  <li className="tours__filters-item">
                    <input type="search" placeholder='Please enter user name' />
                  </li>
                </li>
                <li><button type='button' className='btn'>New Tour +</button></li>
              </ul>


              <table className="tours__list">
                <thead>
                  <tr>
                    <th>-</th>
                    <th>id</th>
                    <th>name</th>
                    <th>category</th>
                    <th>destination</th>
                    <th>price</th>
                    <th>date of start</th>
                    <th>date of end</th>
                    <th>-</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    tours.map(tour => (
                      <>
                        <tr key={tour.id}>
                          <td><img className='tours__img' src={images.slide1} alt="" /></td>
                          <td>{tour.id}</td>
                          <td>{tour.name}</td>
                          <td>{tour.category}</td>
                          <td>{tour.destination}</td>
                          <td>{tour.price}</td>
                          <td>{tour.start}</td>
                          <td>{tour.end}</td>

                          <td className='tours__list-actions'>
                            <img style={{ width: "25px" }} src={images.edit} alt="edit note" />
                            <img style={{ width: "25px" }} src={images.delete_note_red} alt="edit note" />
                          </td>
                        </tr>
                      </>
                    ))
                  }
                </tbody>
              </table>
            </Card>
        </Main>
      </Container>
    </div>
  )
}

export default Tours


const tours = [
  {
    id: 3536162,
    name: "Axel",
    category: "Brewster",
    destination: "abrewster0@army.mil",
    price: "413-492-8926",
    start:"22-10-22",
    end:"22-10-29"
  },
  {
    id: 1115030,
    name: "Liam",
    category: "Kopta",
    destination: "lkopta1@aboutads.info",
    price: "QIDhtI8v",
    start:"22-10-22",
    end:"22-10-29"
  },
  {
    id: 2786484,
    name: "Even",
    category: "Worsley",
    email: "eworsley2@umich.edu",
    destination: "522-541-1576",
    price: "0OfNzAB3ZNn",
    start:"22-10-22",
    end:"22-10-29"
  },
  {
    id: 9928866,
    name: "Jessie",
    category: "Bartelet",
    email: "jbartelet3@howstuffworks.com",
    destination: "471-886-7764",
    price: "xDddPu0e",
    start:"22-10-22",
    end:"22-10-29"
  },
  {
    id: 4764328,
    name: "Amory",
    category: "Jocic",
    email: "ajocic4@bbc.co.uk",
    destination: "287-551-2727",
    price: "9hgYU8",
    start:"22-10-22",
    end:"22-10-29"
  },
  {
    id: 5078811,
    name: "Aldwin",
    category: "Di Bartolommeo",
    email: "adibartolommeo5@google.fr",
    destination: "749-864-9672",
    price: "outhtfugBXB",
    start:"22-10-22",
    end:"22-10-29"
  },
  {
    id: 1907599,
    name: "Ashton",
    category: "Pickervance",
    email: "apickervance6@about.me",
    destination: "972-592-7184",
    price: "u1dfwQ5Xc",
    start:"22-10-22",
    end:"22-10-29"
  }
]
