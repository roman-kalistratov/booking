import './footer.scss';
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaCcPaypal, FaCcMastercard, FaCcVisa, FaCcAmazonPay, FaCcApplePay, FaGooglePay } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { images } from '../../constants';

export const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className="footer__main container">
                <ul className="footer__main-list">
                    <li className="footer__main-item">
                        <h3 className="footer__main-title">
                            Support
                        </h3>

                        <ul className="footer__support">
                            <li className="footer__support-item">Contact</li>
                            <li className="footer__support-item">Legal Notice</li>
                            <li className="footer__support-item">Privacy Policy</li>
                            <li className="footer__support-item">Terms and Conditions</li>
                        </ul>

                    </li>
                    <li className="footer__main-item">
                        <h3 className="footer__main-title">
                            Ways You Can Pay
                        </h3>

                        <ul className="footer__pay">
                            <li className="footer__pay-item"><FaCcPaypal /></li>
                            <li className="footer__pay-item"><FaCcMastercard /></li>
                            <li className="footer__pay-item"><FaCcVisa /></li>
                            <li className="footer__pay-item"><FaCcAmazonPay /></li>
                            <li className="footer__pay-item"><FaCcApplePay /></li>
                            <li className="footer__pay-item"><FaGooglePay /></li>
                        </ul>
                    </li>
                    <li className="footer__main-item">
                        <ul className="footer__social">
                            <li className="footer__social-item"><FaFacebookF /></li>
                            <li className="footer__social-item"><BsInstagram /></li>
                            <li className="footer__social-item"><BsTwitter /></li>
                            <li className="footer__social-item"><FaPinterest /></li>
                            <li className="footer__social-item"><FaLinkedinIn /></li>
                        </ul>

                    </li>
                </ul>
            </div>
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