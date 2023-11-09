'use client'
import React,{ useEffect } from 'react'
import { BsGithub , BsLinkedin,BsGeoAlt } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link';

export default function Hero() {
  
  return (
    <section id='hero'>
          <div className='hero-container'>
                 <div className='profile-bio' data-aos="fade-right" data-aos-duration="1000">
                        <h2 className='bio-title'>Panom<span className='art-text'>Art</span></h2>
                        <p className='bio-description'>
                            Hello I'm PanomArt , A Junior-Frontend Developer &  
                            ReactJs Developer <br/>
                        </p>

                        <div className='contact-information'>
                            <p className='contact'><span className='icon'><BsGeoAlt/></span>Bangkok , Thailand</p>
          
                        </div>
        
                        <p className='icons'>
                             <Link href='https://www.linkedin.com/in/panomporn-thepsai-187071245/' className='icon-linkedin' target='_blank'><BsLinkedin/></Link>
                             <Link href='https://github.com/panomartdev' className='icon-github' target='_blank'><BsGithub/></Link>
                        </p>
                 </div>

                 <div className='profile-image' data-aos="fade-left" data-aos-duration="1000">
                       <img src='/hero-img.webp' className='image'/>  
                 </div>

          </div>
    </section>
  )
}
