import React from 'react'
import { skills,activities } from '../data'
import Image from 'next/image'

export default function Skills() {
  return (
    <section id='skills'>
          <div className='section-title'>
               <h1>Skills</h1>
          </div>

          <div className='skills-container'>
                <div className='skills-list'>
                       {skills.map((item)=>(
                           <div className='card'>
                                  <h3 className='skill-title'>{item.skill}</h3>
                                  <img src={item.logo} className='skill-logo' />
                           </div>
                       ))}
                </div>
          </div>
    </section>
  )
}
