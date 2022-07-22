import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Hello I'm</h5>
      <h1>Saikiran Siriki</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Companies</h5>
              <small>3 startups</small>
            </article>
          </div>
          <p>
            Having 5+ years of experience in front end web development, I have a passion for design and development of frontend systems, and there's always something new I learn everyday.
          </p>
          <p> Through out my career I have worked at multiple startups(from pre-seed stage to unicorns) and have hands on experience with designing and developing robust systems from scratch with minimal guidance.</p>
          <p> I have worked both as a Individual contributor as well as team player. I like to own things I do and drive things I own to completion. </p>
        </div>
      </div>
    </section>
  )
}

export default Intro