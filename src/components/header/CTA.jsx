import React from 'react';
import CV from '../../assets/SaikiranSiriki.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="https://www.linkedin.com/in/saikiran-siriki-296a22121/" className="btn btn-primary">Let's talk</a>
    </div>
  )
}

export default CTA