import LogoImage from '../assets/images/logo.svg';
import IconLocation from '../assets/images/icon-location.svg';
import IconPhone from '../assets/images/icon-phone.svg';
import IconEmail from '../assets/images/icon-email.svg';
import './Footer.css';

export function Footer() {
  return(
    <footer className='footer-section'>
      <img className='fylo-logo' src={LogoImage} alt="Fylo logo" />

      <div className="footer-content">

        <address className="contact-info">
          <div className='location-info'>
            <img src={IconLocation} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div>
            <div className='phone-info'>
              <img src={IconPhone} alt="" />
              <p>
                +1-543-123-4567
              </p>
            </div>
            <div className='email-info'>
              <img src={IconEmail} alt="" />
              <p>
                example@fylo.com
              </p>
            </div>
          </div>
        </address>

        <nav className="footer-nav">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>

        <nav className="footer-nav">
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </nav>
        
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            {/* <img src={IconFacebook} alt="" /> */}
          </a>
          <a href="#" aria-label="Twitter">
            {/* <img src={IconTwitter} alt="" /> */}
          </a>
          <a href="#" aria-label="Instagram">
            {/* <img src={IconInstagram} alt="" /> */}
          </a>
        </div>
      </div>
    </footer>
  );
}