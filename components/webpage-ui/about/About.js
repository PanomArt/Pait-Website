import React from 'react'

export default function About() {
  return (
    <section id='about'>
         <div className='section-title'>
               <h1>About</h1>
          </div>
          <div className='about-container'>
                <div className='about-img' data-aos="fade-right">
                      <img src='/hero-img.webp' alt='about-img'/>
                </div>
                <div className='about-texts' data-aos="fade-left">
                      <h2>I am PanomArt</h2>
                      <p>
                          I'm PanomArt, a Frontend Developer based in Bangkok,
                          Thailand. I'm passionate about coding and enjoy diving into
                          various technologies to enhance my skills. My expertise 
                          lies in ReactJS and NextJS, I'm dedicated
                          to continuous learning, exploring new technologies, 
                          and building projects that challenge and expand my abilities
                          . I'm on a journey to becoming a Fullstack Developer, 
                          and I'm excited about the endless possibilities that lie
                          ahead in the world of web development.</p>
                </div>
          </div>
    </section>
  )
}
