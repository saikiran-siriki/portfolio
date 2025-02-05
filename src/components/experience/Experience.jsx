import React from 'react';
import PortfolioItem from './portfolioitem/PortfolioItem'
import Intuit from '../../assets/intuit.jpeg'
import Zeta from '../../assets/zeta.png'
import Wysh from '../../assets/wysh.jpeg'
import Ayasta from '../../assets/ayasta.png'


import './experience.css';

const experience = () => {
  const overallExperience = [
    {
      name: 'Intuit',
      website: 'https://www.intuit.com/',
      description: `As a part of QBOA business intelligence team, I'm working on providing powerful reporting capabilities that empower small businesses to make data-driven decisions, optimize their financial performance, and gain valuable insights to drive growth`,
      logo: Intuit
    },
    {
      name: 'Zeta Suite',
      website: 'https://www.zeta.tech/',
      description: 'Designed and developed micro-frontend based corporate hr dashboard. Wrote webviews for the userapp and added support for communication(email/push/inbox) templates for Sodexo',
      logo: Zeta
    },
    {
      name: 'Emojifi Pvt. Ltd(Gifskey and Wysh)',
      website: 'https://www.crunchbase.com/organization/gifskey',
      description: 'Worked on a wide variety of technologies like webapps, AWS, gif creation, video mutation, gif creation/manipulation, and OpenCV',
      logo: Wysh
    },
    {
      name: 'Ayasta Technologies',
      website: 'http://www.ayasta.com/',
      description: 'Primarily worked on role based admin dashboards used across our partner companies to analyze and monitor the health of their existing electrical infrastructure using highcharts',
      logo: Ayasta
    }
  ];


  return (
    <section id="experience">
      <h5>My Professional Experience</h5>
      <h2>Companies</h2>
      <div className="container experience__container">
        {overallExperience.map(({ company, website, description, logo }, index) => {
          return <PortfolioItem key={index} company={company} website={website} description={description} logo={logo}/>
        })}
      </div>

    </section>
  )
}

export default experience