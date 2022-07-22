import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './skills.css';

const skills = () => {
  return (
    <section id="skills">
      <h2>Skillset</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Languages and Frameworks</h3>
          <div className="skills__content">
          <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>HTML/CSS</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Jquery</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>React</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>SCSS/SaSS</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>VueJS</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>NuxtJS</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>NodeJS</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Typescript</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Python</h4>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <h3>Tools and Libraries</h3>
          <div className="skills__content">
          <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>VueX</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Unix and tools</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Git</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>AWS</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Bootstrap/Bulma</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Jest</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills