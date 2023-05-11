import React from 'react'

const EventsCatPage = ({data}) => {
  return (
    <div>
    <h1>Events in Ohio</h1>
        <div>
            <a href="/event/event1">
              {''}
              <img /> <h2>Event 1</h2>{''}
              </a>
              <a href="/event/event2">
              {''}
              <img /> <h2>Event 2</h2>{''}
              </a>
              <a href="/event/event3">
              {''}
              <img /> <h2>Event 3</h2>{''}
              </a>
              <a href="/event/event4">
              {''}
              <img /> <h2>Event 4</h2>{''}
              </a>
              <a href="/event/event5">
              {''}
              <img /> <h2>Event 5</h2>{''}
              </a>
              <a href="/event/event6">
              {''}
              <img /> <h2>Event 6</h2>{''}
              </a>
        </div>
    </div>
            
  );
};

export default EventsCatPage;

//These are functions that will Prerender our page with our dT at buildtime vs. runtime with getServerSideProps
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
  return {props: {data} };
 }   

//

  




