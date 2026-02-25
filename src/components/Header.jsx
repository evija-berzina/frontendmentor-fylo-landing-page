import LogoImage from '../assets/images/logo.svg';
import './Header.css';

export function Header() {
  return (
    <header className='header-container'>
      <img className='fylo-logo-header' src={LogoImage} alt="Fylo logo" />
      <nav className='nav-pages'>
        <a href="/" data-text="Features">Features</a>
        <a href="/" data-text="Team">Team</a>
        <a href="/" data-text="Sign In">Sign In</a>
      </nav>
    </header>
  );
}