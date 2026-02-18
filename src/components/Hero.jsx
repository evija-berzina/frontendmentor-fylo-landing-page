import IntroPicture from '../assets/images/illustration-intro.png';
import './Hero.css';

export function Hero() {
  return (
    <section className='hero-section'>
      <img src={IntroPicture} alt="Ilustration of people putting documentation in folder" />
      <h1 className='hero-heading'>
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className='hero-info'>
        Fylo stores all your most important files in one secure location. Access them wherever 
  you need, share and collaborate with friends family, and co-workers.
      </p>
      <button className='get-started-btn'> Get Started</button>
    </section>
  );
}