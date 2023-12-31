'use client';
import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import Hero from './hero/Hero';
import About from './about/About';
import Skills from './skills/Skills';
import Service from './services/Service';
import Portfolio from './portfolio/Portfolio';

const HomePage = () => {
    useEffect(()=>{
        Aos.init({once: true})
        Aos.refresh()
     },[])
  return (
    <div>
          <Hero/>
          <About/>
          <Skills/>
          <Service/>
          <Portfolio/>
    </div>
  )
}

export default HomePage
