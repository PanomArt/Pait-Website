'use client';
import Link from 'next/link';
import { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { SearchGlass, Setting } from '@/components/icons/iconsList';

export default function Header() {
  const [mobileActive,setMobileActive] = useState(false);
  return (
    <div className='header-maindiv'>

          <div className='logo' >
                 <Link href='/'>
                      <h4 className='logo-name'>
                          Panom
                          <span className='art-text'>Art</span>
                      </h4>
                      {/* <div className='icon-test'><Setting width={30} height={30}/> <SearchGlass width={30} height={30}/></div> */}
                   
                      
                 </Link>
          </div>
          <div className='right-header'>
                <div className={`navigator ${mobileActive ? "active":""}`} onClick={()=>setMobileActive(false)}>
                    <a href='/'>Home</a>
                    <a href='/#about'>About</a>
                    <a href='/#skills'>Skills</a>
                    <a href='/#portfolio'>Portfolio</a>
                </div>
                
                <div className='mobileview' onClick={()=>setMobileActive(!mobileActive)}>{mobileActive ? <AiOutlineClose/>:<AiOutlineMenu/>}</div>
          </div>
    </div>
  )
}
