import { forwardRef, useState } from 'react';
import './CTASection.css';

// importējamā komponente > export const CTASection
// forwardRef ir React funkcija, kas ļauj komponentei pieņemt ref no vecāka komponentes
export const CTASection = forwardRef((props, ref) => {
  // call to action
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const isValidEmail = emailRegex.test(email);
    console.log(isValidEmail)

    if(isValidEmail === false) {
      setErrorMessage('Please enter valid email address');
    } else {
      setErrorMessage("");
      setEmail("");
    }
  }

  return (
    <>
      <section ref={ref} className="call-to-action">
        <h2>
          Get early access today
        </h2>
        <p>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
        </p>
        <form onSubmit={handleSubmit} className='cta-form' action="submit">
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              value={email}
              className='cta-input'
              type="text" placeholder="email@example.com"
              required
            />
            <div className='error-msg' data-text="Error Message">{errorMessage}</div>
          </div>
          <button type="submit" className='cta-button' data-text='Get Started For Free'>Get Started For Free</button>
        </form>
      </section>
    </>
  );
});