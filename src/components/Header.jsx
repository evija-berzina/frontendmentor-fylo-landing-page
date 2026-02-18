import LogoImage from '../assets/images/logo.svg';
import './Header.css';

export function Header() {
  return (
    <header className='header-container'>
      <img className='fylo-logo' src={LogoImage} alt="Fylo logo" />
      <nav className='nav-pages'>
        <a href="/">Features</a>
        <a href="/">Team</a>
        <a href="/">Sign In</a>
      </nav>
    </header>
  );
}