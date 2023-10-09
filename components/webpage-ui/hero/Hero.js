import React from 'react'
import { BsGithub , BsLinkedin,BsGeoAlt } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id='hero'>
          <div className='hero-container'>

                 <div className='profile-bio'>
                        <h2 className='bio-title'>Panom<span className='art-text'>Art</span></h2>
                        <p className='bio-description'>
                            Hello I'm PanomArt , A Junior-Frontend Developer &  
                            ReactJs Developer <br/>
                        </p>

                        <div className='contact-information'>
                            <p className='contact'><span className='icon'><BsGeoAlt/></span>Bangkok , Thailand</p>
                            <p className='contact'><span className='icon'><AiOutlineMail/></span>artrock548@gmail.com</p>
                        </div>
        
                        <p className='icons'>
                             <a href='https://www.linkedin.com/in/panomporn-thepsai-187071245/' className='icon-linkedin' target='_blank'><BsLinkedin/></a>
                             <a href='https://github.com/panomartdev' className='icon-github' target='_blank'><BsGithub/></a>
                        </p>
                 </div>

                 <div className='profile-image'>
                       <img src='/profile-image.jpg' className='image'/>  
                 </div>

          </div>
    </section>
  )
}
