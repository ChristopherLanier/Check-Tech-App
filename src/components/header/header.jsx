import React from 'react'
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
    <nav>
      <Link className="home" href="/" passHref>Home</Link>
      <Link href="/events" passHref>Events</Link>
      <Link href="/about-us" passHref>About Us</Link>
    </nav>
  </header>
  )
}
