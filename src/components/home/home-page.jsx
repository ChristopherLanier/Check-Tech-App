import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

//bring in imports
//use rafc shortcut to build component
//pass {data} property through component
//in js file (pages index.js) of browser home page, import this pages component-> go to 'pages index.js'
export const HomePage = ({data}) => {
  return (
        <div classsName="home_body">

        {data.map((ev) => (
            <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
                <Image className="img" width={500} height={200} alt={ev.title} src={ev.image} />

                <div className="content">
                  <h2>{ev.title}</h2>
                  <p>{ev.description}</p>
                </div>

            </Link> 
            
        ))}    
        </div>
  )
}         
                   






