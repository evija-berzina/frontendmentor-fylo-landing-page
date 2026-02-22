import StayProductiveImage from '../assets/images/illustration-stay-productive.png';
import IconArrow from '../assets/images/icon-arrow.svg';
import './ProductOverview.css';

export function ProductOverview () {
  return (
    <section className='overview-section'>
      <img className='overview-image' src={StayProductiveImage} alt="" />
      <h2 className='features-heading'>
         Stay productive, wherever you are
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
          <img src={IconArrow} alt="" />
        </a>
      </div>
    </section>
  );
}