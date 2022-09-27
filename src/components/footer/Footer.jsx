import React from 'react';
import meme from '../../assets/explain.jpeg';
import HeaderSocials from './HeaderSocials';
import CTA from './CTA';
import './footer.css';

const Intro = () => {
  return (
    <section className="footer">
      <h5>Get to know more</h5>
      <h2>About my projects</h2>
      <div className="container about__container">
            <img src={meme} alt="me" />
          
        <div className="about__content">
          <p>
            Want to know more indepth about my projects and experience?
          </p>
          <CTA />
        </div>
      </div>
      <HeaderSocials />
    </section>
  )
}

export default Intro