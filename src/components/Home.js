import React from 'react'
import Header from "./Header"
import About from "./About"
import Resume from "./Resume"
import Works from "./Works"
import Contact from "./Contact"
import Footer from "./Footer"

// import { HashLink } from 'react-router-hash-link';
const Home = () => {
  return (
    <>
   
        <Header/>
        <About/>
        <Resume/>
        <Works/>
        <Contact/>
        <Footer/>
  </>
  )
}

export default Home