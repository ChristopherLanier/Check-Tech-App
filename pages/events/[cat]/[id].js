


const EventPage = ({data}) => {
  console.log(data);

  ////Image isn't coming in!!!!!!!!!!!!!
  return (
    <div>
    <Image width={300} height={200} alt={data.title} src={data.image} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
    )
    
}

export default EventPage;
  
//////// tells Nextjs how many pages to create based upon paths/objects in array
export async function getStaticPaths() {
  const data = await import('/data/data.json');
  const allEvents = data.allEvents

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
 
 /////////

 ///////// in case if user makes a request outside of whats reflected in app
return {
  paths: allPaths,
  fallback: true,
};
/////////
}

//using getStaticProps we get access to context, which we'll use to extract the path
//Made call to json file then stored in allEvents array
//then acted on allEvents (brought in from call) with find method to pass 'id' element that satisfies condition
export async function getStaticProps(context){
  console.log(context);
  const id = context.params.id;
  const { allEvents } = await import('/data/data.json');
  const eventData = allEvents.find(ev => id === ev.id);
  console.log(eventData);
  
  return {
    props: { data: eventData},

  }

  //Pass data property thru page comp.
}

  


