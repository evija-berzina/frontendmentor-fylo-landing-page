import IconAccessAnywhere from '../assets/images/icon-access-anywhere.svg';
import IconSecurity from '../assets/images/icon-security.svg';
import IconCollaboration from '../assets/images/icon-collaboration.svg';
import IconAnyFile from '../assets/images/icon-any-file.svg';
import './Features.css';

export function Features() {
  return (
    <section className='features-section'>
      <article>
        <img src={IconAccessAnywhere} alt="" />
        <h2 className='features-heading'>
          Access your files, anywhere
        </h2>
        <p>
          The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
        </p>
      </article>
      <article>
        <img src={IconSecurity} alt="" />
        <h2 className='features-heading'>
          Security you can trust
        </h2>
        <p>
          2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
        </p>
      </article>
      <article>
        <img src={IconCollaboration} alt="" />
        <h2 className='features-heading'>
          Real-time collaboration
        </h2>
        <p>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
        </p>
      </article>
      <article>
        <img src={IconAnyFile} alt="" />
        <h2 className='features-heading'>
          Store any type of file
        </h2>
        <p>
          Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
        </p>
      </article>
    </section>
  );
}