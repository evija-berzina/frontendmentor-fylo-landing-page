import IntroPicture from '../assets/images/illustration-intro.png';
import BgCurvyMobile from '../assets/images/bg-curvy-mobile.svg';
import BgCurvyDesktop from '../assets/images/bg-curvy-mobile.svg';
import './Hero.css';

export function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-first-section'>
        <img src={IntroPicture} alt="Ilustration of people putting documentation in folder" />
        <h1 className='hero-heading'>
          All your files in one secure location, accessible anywhere.
        </h1>
        <picture className='hero-background'>
          <source
            media="(min-width:768px)"
            srcSet={BgCurvyDesktop}  
          />
          <img src={BgCurvyMobile} alt="" />
        </picture>
      </div>
      <div className='hero-second-section'>
        <p className='hero-info'>
        Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
      </p>
      <button className='get-started-btn'> Get Started</button>
      </div>
    </section>
  );
}