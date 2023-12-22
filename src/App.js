import React from "react";
import Navbar from './Components/Navbar'
import Details from './Components/Details'
import Portfolio  from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from './Components/Footer'


const App =()=>{
    return(
        <div>
        <Navbar/>
        <Details/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
        </div>
    )
}

export default App