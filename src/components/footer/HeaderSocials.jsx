import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa'

const HeaderSocials = () => {
  let iconSize = '1.5rem'
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/saikiran-siriki-296a22121/" target="_blank" rel="noreferrer" ><BsLinkedin size={iconSize}/></a>
      <a href="https://github.com/saikiran-siriki" target="_blank" rel="noreferrer" ><FaGithub  size={iconSize}/></a>
      <a href="https://stackoverflow.com/users/8994551/saikiran" target="_blank" rel="noreferrer" ><FaStackOverflow  size={iconSize}/></a>
    </div>
  )
}

export default HeaderSocials