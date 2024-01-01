import React from 'react'
import { BsGithub , BsLinkedin } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer-maindiv'>
           <p className='icons'>
                  <a href='https://www.linkedin.com/in/panomporn-thepsai-187071245/' target='_blank' className='icon-linkedin'><BsLinkedin/></a>
                  <a href='https://github.com/panomartdev' target='_blank' className='icon-github'><BsGithub/></a>
           </p>
           <p className='footer-text'>
                   © {currentYear} PanomArt. All Rights reserved.
           </p>

    </div>
  )
}
