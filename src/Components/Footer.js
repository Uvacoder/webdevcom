import React from 'react';
import {
  Heart,
  Dribbble,
  Codepen,
  GitHub,
  Twitter,
  Linkedin,
} from 'react-feather';
import ReactTooltip from 'react-tooltip';

const Footer = () => {
  return (
    <footer className='footer'>
      <ReactTooltip type='light' />
      <p className='has-text-centered is-size-4 has-text-grey-light'>β’ β’ β’</p>
      <div className='column'>
        <div className='buttons is-centered'>
          <a
            href='https://www.dribbble.com/uvacoder'
            target='_blank'
            rel='noopener noreferrer'
            className='button button-special is-rounded box-shadow-lift'
            data-tip='connect on Dribbble π¦Έββ'
          >
            <Dribbble color='blue' className='icon' />
          </a>
          <a
            href='https://www.codepen.io/uvacoder/'
            target='_blank'
            rel='noopener noreferrer'
            className='button button-special is-rounded box-shadow-lift'
            data-tip='connect on Codepen π'
          >
            <Codepen color='#C74B91' className='icon' />
          </a>
          <a
            href='https://github.com/uvacoder'
            target='_blank'
            rel='noopener noreferrer'
            className='button button-special is-rounded box-shadow-lift'
            data-tip='connect on Github β€οΈ'
          >
            <GitHub className='icon' />
          </a>
          <a
            href='https://twitter.com/AlecCam43544378'
            target='_blank'
            rel='noopener noreferrer'
            className='button button-special is-rounded box-shadow-lift'
            data-tip='connect on Twitter π€·ββοΈ'
          >
            <Twitter color='#1DA1F2' className='icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/alecbcampbell/'
            target='_blank'
            rel='noopener noreferrer'
            className='is-hidden-touch button button-special is-rounded box-shadow-lift'
            data-tip='connect on Linkedin π¨ββοΈ'
          >
            <Linkedin color='#0077B5' className='icon' />
          </a>
        </div>
      </div>
      {/* <div className='column has-text-centered'>
        <p className='subtitle is-7 is-capitalized has-text-danger'>
          This Project is just for Learning and teaching purposes.
        </p>
      </div> */}
      <div className='column has-text-centered'>
        <p className='menu-label'>
          Made with <Heart color='red' fill='red' size='15px' />{' '}
          <a
            href='https://binu42.netlify.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            By uvacoder
          </a>{' '}
          <br />
          &copy;{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
