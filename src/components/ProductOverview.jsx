import StayProductiveImage from '../assets/images/illustration-stay-productive.png';
import './ProductOverview.css';

export function ProductOverview () {
  return (
    <section className='overview-section'>
      <div className='overview-image-container'>
        <img className='overview-image' src={StayProductiveImage} alt="" />
      </div>
      <div className='overview-text-container'>
        <h2 className='overview-heading'>
          Stay productive,<span className="desktop-break"> wherever you are</span>
        </h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
        </p>
        <div className='link-wrapper'>
          <a className='fylo-workd-link'>
            <span>
              See how Fylo works
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g transform="translate(2 2)">
                  {/* Ēna paliek kā use ar filter */}
                  <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                  {/* Faktiskais circle, kuru krāsu mainīsim hover */}
                  <circle
                    className="circle-fill"
                    cx="6"
                    cy="6"
                    r="6"
                    fill="hsl(var(--teal-200))"
                  />
                </g>
                <path d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="#1B2330" />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}