import React from "react"
import Profile from "./Profile"
import Footer from "./Footer"
import Contact from "./Contact"
import Project from "./Project"
import About from "./About"
import Skills from "./Skills"
import './Home.css'
export default function Home() {
    return(
        <>
        <div className='home-container'>
        
            <Profile />
            <Footer />
            <Skills />
            <Project/>
            <About />
            <Contact/>
        </div>
       
      </>
    );
}