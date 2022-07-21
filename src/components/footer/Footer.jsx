import React from 'react';
import meme from '../../assets/explain.jpeg';
import './footer.css';

const Intro = () => {
  return (
    <section class="footer">
      <h5>Get to know more</h5>
      <h2>About my projects</h2>
      <div className="container about__container">
            <img src={meme} alt="me" />
          
        <div className="about__content">
          <p>
            Want to know more indepth about my projects and experience?
          </p>
          <a href="https://www.linkedin.com/in/saikiran-siriki-296a22121/" className="btn btn-primary">Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default Intro