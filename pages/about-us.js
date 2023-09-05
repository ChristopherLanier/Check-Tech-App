import React from 'react'
import Image from 'next/image';


//images folder must remain inside public contrary to other online sources

const AboutUsPage = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>
        My name is Christopher Lanier and I'm in the beginning of my Software Engineering journey. I drew inspiration for creating this app from the need for junior developers like myself to remain connected and up-to-date on events occurring within the tech community. My fur child has always been a source of support and laughter throughout my journey, so I wanted to shout him out and show him some love!
      </p>
      <Image src={'/images/chris-picture.png'} width={300} height={300} />
    </div>
  )
}

export default AboutUsPage;