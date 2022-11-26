import {images} from '../../constants';
import './spinner.scss';

const Spinner = () => {
  return (
    <div className='spinner'>
        <img src={images.preloader} alt="preloader" />
    </div>
  )
}

export default Spinner