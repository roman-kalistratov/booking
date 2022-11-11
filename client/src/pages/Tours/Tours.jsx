import { 
  Footer, 
  Navbar, 
  Filters, 
  ScrollToTop, 
  Search } from '../../components';
import './tours.scss';

const Tours = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <main className="main">
          <div className="main__container container">
            <div className="main__left">
              <Filters />
            </div>
            <div className="main__right">
              <Search />
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