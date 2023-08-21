import React from 'react'
import { portfolio } from '../data'
import Link from 'next/link';
import { GoLinkExternal } from "react-icons/go";

export default function Portfolio() {
  return (
    <section id='portfolio'>
          <div className='section-title'>
                 <h1>Portfolio</h1>
          </div>

          <div className='portfolio-container'>
                 {portfolio.map((item)=>(
                     <div className='port-card'>
                            <div className='portfolio-img'>
                                   <img src={item.image} className='img'/>
                            </div>
                            <div className='portfolio-texts'>
                                   <h3>{item.projects}</h3>
                                   <div className='description-live'>
                                        <p>{item.description}</p>
                                        <a href={item.url} className='live-demo' target='_blank'>Live Demo <span><GoLinkExternal/></span></a>
                                   </div>
                                   
                            </div>
                            
                     </div>
                 ))}
          </div>
    </section>
  )
}
