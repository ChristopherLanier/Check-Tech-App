import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="topNav">
        <Image className="checkTapLogo" src={'/images/logo-black.png'} width={150} height={150} />
        <nav>
          <ul>
            <li>
              <Link className="home" href="/" passHref>Home</Link>
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
