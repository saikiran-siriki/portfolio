import React from 'react';


import './experience.css';

const experience = () => {
  const overallExperience = [
    {
      company: 'Zeta Suite',
      website: 'https://www.zeta.tech/',
      experience: 'Designed and developed micro-frontend based corporate hr dashboard. Wrote webviews for the userapp and added support for communication(email/push/inbox) templates for Sodexo'
    },
    {
      company: 'Emojifi Pvt. Ltd(Gifskey and Wysh)',
      website: 'https://www.crunchbase.com/organization/gifskey',
      experience: 'Worked on a wide variety of technologies like webapps, AWS, gif creation, video mutation, gif creation/manipulation, and OpenCV'
    },
    {
      company: 'Ayasta Technologies',
      website: 'http://www.ayasta.com/',
      experience: 'Primarily worked on role based admin dashboards used across our partner companies to analyze and monitor the health of their existing electrical infrastructure using highcharts'
    }
  ];


  return (
    <section id="experience">
      <h5>My Professional Experience</h5>
      <h2>Companies</h2>
      <div className="container experience__container">
        {overallExperience.map(({ company, website, experience }, index) => {
          return <div key={index} className="company_section experience__item">
            <a href={website} target="_blank" rel="noreferrer"><span className="company_name">{company} : </span></a><span className="experience_text">{experience}</span>
          </div>
        })}
      </div>

    </section>
  )
}

export default experience