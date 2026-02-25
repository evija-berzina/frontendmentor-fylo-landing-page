import IntroPicture from '../assets/images/illustration-intro.png';
import './Hero.css';

export function Hero({scrollToCTA}) {

  return (
    <section className="hero">

      <div className="hero-top">
        <div className="container">
          <img
            className="hero-img"
            src={IntroPicture}
            alt="Illustration of people putting documentation in folder"
          />
          <h1 className="hero-heading">
            All your files in one secure location, accessible anywhere.
          </h1>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="container">
          <p className="hero-info">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.
          </p>
          <button 
            onClick={scrollToCTA}
            className="get-started-btn"
            data-text='Get Started'>
            Get Started
          </button>
        </div>
      </div>

    </section>
  );
}