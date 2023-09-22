'use client';
import Link from 'next/link';
import { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

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
                 </Link>
          </div>
          <div className='right-header'>
                <div className={`navigator ${mobileActive ? "active":""}`} onClick={()=>setMobileActive(false)}>
                    <Link href='/'>Home</Link>
                    <Link href='#about'>About</Link>
                    <Link href='#skills'>Skills</Link>
                    <Link href='#portfolio'>Portfolio</Link>
                </div>
                <Link href="/"></Link>
                <div className='mobileview' onClick={()=>setMobileActive(!mobileActive)}>{mobileActive ? <AiOutlineClose/>:<AiOutlineMenu/>}</div>
          </div>
    </div>
  )
}
