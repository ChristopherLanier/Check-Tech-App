import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//Link tags gives us the ability to do clientside navigation in the browser
//creates smoother transitions between navigation
//Link tags and anchor <a></a> have the same function except Link tags require the passHreg property while anchor tags dont
const EventsCatPage = ({data, pageName}) => {
  return (
    <div>
    <h1>Events in {pageName}</h1>

        <div>
          {data.map((ev) => (
            <Link key={ev.id}href={`events/${ev.id}`} passHref>
                <Image width={300} height={200} alt={ev.title} src={ev.image} />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
            </Link>
               
          ))}
        </div>
    </div>
  );                     
              
}; 
            
             
             
            
  


export default EventsCatPage;

//1.These are functions that will Prerender our page with our data at buildtime vs. runtime with getServerSideProps
//2.We are using DynamicRoutes so Nextjs has no way of knowing what paths (event 1,2,3,4 etc) to render
//2 cont'd. getStaticPaths allows us to designate what page for Nextjs to render
export async function getStaticPaths(){
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map(ev=> {
    return {
      params: {
        cat: ev.id.toString(), 
      },
    };
  });
 console.log(allPaths);

  //VVV in case the user inputs an unrecognized path
  return {
  paths: allPaths, 
    fallback: false,
  };
  };
//^^^
 export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import('/data/data.json');

  const data = allEvents.filter((ev) => ev.city === id);
  console.log(data);
  return {props: {data, pageName: id} };
 }   

//

  




