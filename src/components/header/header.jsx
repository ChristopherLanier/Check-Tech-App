import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="topNav">
        <Image className="checkTapLogo" alt="checkTech"src={'/images/logo-black.png'} width={150} height={150} />
        <nav>
          <ul>
            <li>
              <Link href="/" passHref><Image src='/images/home-favicon.png' alt="homebtn" height={30}width={30}></Image></Link>
            </li>
            <li>
              <Link href="/events" passHref>Events</Link>
            </li>
            <li>
              <Link href="/about-us" passHref>About Us</Link>
            </li>
          </ul>
        </nav> 
      </div>
      </div>
     
    </header>
          
          
        
  )
}
