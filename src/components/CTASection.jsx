import './CTASection.css';

export function CTASection() {
  // call to action
  return (
    <>
      <section className="call-to-action">
        <h2>
          Get early access today
        </h2>
        <p>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
        </p>
        <form className='cta-form' action="submit">
          <input
            className='cta-input'
            type="email" placeholder="email@example.com"
            required
          />
          <button className='cta-button'>Get Started For Free</button>
        </form>
      </section>
    </>
  );
}