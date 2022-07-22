import React from 'react';
import CV from '../../assets/SaikiranSiriki.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="https://www.linkedin.com/in/saikiran-siriki-296a22121/" target="_blank" rel="noreferrer"  className="btn btn-primary">Let's Connect</a>
    </div>
  )
}

export default CTA