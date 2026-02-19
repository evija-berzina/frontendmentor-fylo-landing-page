import './ReviewsSection.css';
import Profile1 from '../assets/images/profile-1.jpg';
import Profile2 from '../assets/images/profile-2.jpg';
import Profile3 from '../assets/images/profile-3.jpg';
import Quotes from '../assets/images/bg-quotes.png';


export function ReviewsSection() {
  return(
    <>
      <img className='quotes-image' src={Quotes} alt="" />
      <section className="reviews">
        <article className="review-card">
          <blockquote className='review'>
            <p>
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
            </p>
          </blockquote>

          <div className="author">
            <img className='author-image' src={Profile1} alt="Satish Patel" />
            <div>
              <h3>Satish Patel</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </article>

        <article className="review-card">
          <blockquote className='review'>
            <p>
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
            </p>
          </blockquote>

          <div className="author">
            <img className='author-image' src={Profile2} alt="Bruce McKenzie" />
            <div>
              <h3>Bruce McKenzie</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </article>

        <article className="review-card">
          <blockquote className='review'>
            <p>
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
            </p>
          </blockquote>

          <div className="author">
            <img className='author-image' src={Profile3} alt="Iva Boyd" />
            <div>
              <h3>Iva Boyd</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}