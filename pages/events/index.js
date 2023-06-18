//Can't declare images unless imports are brought in

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events Page</h1>
      <div>
        {data.map((ev) => (<Link key={ev.id} href={`/events/${ev.id}`} passHref>
            <Image src={ev.image} alt={ev.title} width={300} height={100} /> <h2>{ev.title}</h2>
          </Link>
          
        ))}
      </div>
    </div>




  )
}

export default EventsPage;
//Now that we are in server, This page is gonna need STATIC GENERATION of properties
// or rendering upon build. Why? We dont need to constantly retrieve up-to-date information for this page
export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };


}
