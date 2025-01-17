"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
    const [navLink,setNavLink] = useState('Home');
    const links = ['Home','About','Contact']

    const handleLinkChange = (e)=>{
        setNavLink(e.target.value)

    }
  return (
    <div className='bg-sky-200 flex justify-between items-center h-[60px] px-5 w-full'>
      <Link href="/"><span className='text-[2rem] text-white'>Dashboard</span></Link>
      <div>
      <select
          value={navLink}
          onChange={handleLinkChange}
          className="  text-[1rem]  p-1 outline-none"
        >
         
          {links.map((link) => (
            <option key={link} value={link}>
              {link}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Header
