import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const AllEvents = ({ data }) => {
    return (
      <div className="eventsPage">
  
  
        {data.map((ev) => (<Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <div className="eventCard">
          <Image src={ev.image} alt={ev.title} width={500} height={300} /> <h2>{ev.title}</h2>
          </div>
          </Link>
          
        ))}
  
      </div>
  
  
  
  
    )
  }
  
  export default AllEvents;