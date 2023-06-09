import Head from 'next/head';
import React from 'react';
import { Autour_One, Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { HomePage } from '@/src/components/home/home-page';
import { Footer } from '@/src/components/footer/footer';
import { Header } from '@/src/components/header/header';

const inter = Inter({ subsets: ['latin'] })

//From 'home-page.jsx file' pass 'data' through 'HomePage' component tags
//From 'footer.jsx file' bring in 'Footer' tags
//From 'header.jsx file' bring in 'header' tags

//This will render info in browser now
export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <HomePage data={data} />

    </div>

      
      
      

   

  );
};


export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');
  console.log({ events_categories });
  return {
    props: {
      data: events_categories,
    },
  };

}



















