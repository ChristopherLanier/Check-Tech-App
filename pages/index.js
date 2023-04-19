import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { Autour_One, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
///to pull in images, they must be stored locally in its own folder within public or SRC folder
  //then the path must be ref. in the json file
  //The public or SRC folder isnt reflected in path (in json file) but folder its contained in will be
  export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header> 
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>

      <main className={styles.main}>
        {data.map((ev) => <a key={ev.id} href={`/events/${ev.id}`}>
          <Image width={300} height={200} alt={ev.title} src={ev.image} /><h2>{ev.title}</h2><p>{ev.description}</p>
        </a>)}


        {/* <a href="/events/ohio">
          <img />
          <h2> Events in Ohio</h2>
          <p>
            CodeMash, a unique event that educates developers on current practices.Create 2 other events.
          </p>
        </a>
        <a href="/events/dubai">
          <img />
          <h2> Events in Dubai</h2>
          <p>
            Gitex Global is a global tech show. Create 2 other events.
          </p>
        </a>
        <a href="/events/london">
          <img />
          <h2> Events in London</h2>
          <p>
            QCon. Create 2 other events.
          </p>
        </a> */}

      </main>


      <footer className={styles.footer}>
        <p>© Events app footer </p>
      </footer>
    </div>


  );
};



//we need to make function asynchronous or promise-based (async/await). 

//We are in the client, hence needing "console.log" to view content and request info from server
//Use getServerSideProps when we need content rendered current and uptodate
export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');
  console.log({ events_categories });
  return {
    props: {
      data: events_categories,
    },
  };

}













