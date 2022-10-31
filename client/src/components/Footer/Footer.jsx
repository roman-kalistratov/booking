import './footer.scss';
import { images } from '../../constants';

export const Footer = () => {
    return ( 
        <footer className='footer' id='footer'>  
            <div className="footer__copyright">                
                Copyrights 2022 © All Rights Reserved To
                <a className='footer__copyright-link' href="# ">
                    <img className='footer__copyright-logo' src={images.logo_rk} alt="logo-rk" />
                </a>
            </div>
        </footer >
    )
}

export default Footer;