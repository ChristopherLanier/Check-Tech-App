import React from 'react'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'

// Key understanding!! Our pages are dynamic with only the header and footer remaining constant.
// How do you style or code dynamic pages then? See below
// All of our pages in the browser will possess both the header and footer opposed to only the home page possessing it  before

const MainLayout = ({children}) => {
  return (
    <>
        <Header/>
            <main>{children}</main>
        <Footer/>
    </>
   
  )
}
 
export default MainLayout;