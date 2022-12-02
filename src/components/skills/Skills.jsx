import React from 'react';
import SectionCard from './SectionCard';
import './skills.css';

const skills = () => {
  const languages = ['HTML/CSS', 'Javascript', 'React', 'Typescript', 'NextJS', 'VueJS', 'SCSS/Sass', 'NuxtJS', 'NodeJS', 'Python']
  const tools = ['Redux', 'VueX', 'Unix and tools', 'Git', 'AWS', 'Bootstrap/Bulma', 'Jest']
  return (
    <section id="skills">
      <h2>Skillset</h2>
      <div className="container skills__container">
        <SectionCard title="Languages and Frameworks" items={languages} />
        <SectionCard title="Tools and Libraries" items={tools} />
      </div>
    </section>
  )
}

export default skills