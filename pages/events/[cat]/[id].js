
import Image from 'next/image'

const EventPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Image width={800} height={300} alt={data.title} src={data.image} />
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

  return {
    paths: allPaths,
    fallback: 'blocking',
  };






}

//using getStaticProps we get access to context, which we'll use to extract the path

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import('/data/data.json');
  const eventData = allEvents.find(ev => id === ev.id);
  console.log(eventData);

  return {
    props: { data: eventData },

  }

  //Pass data property thru page comp.
}




