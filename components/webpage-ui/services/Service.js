import React from 'react'
import { activities } from '../data'

export default function Service() {
  return (
    <section id='services'>
            <div className='section-title'>
                <h1>Service</h1>
            </div>
            <div className='services-container'>
                {activities.map((item)=>(
                    <div className='activities-card'>
                        <img src={item.icon} className='activities-icon'/>
                        <h3 className='activities-title'>{item.title}</h3>
                        <p className='activities-texts'>{item.text}</p>
                    </div>
                ))}
            </div>
    </section>
  )
}
