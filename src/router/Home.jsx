import React from 'react'
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import About from '../components/About';
import Footer from '../components/Footer';


function Home() {
  return (
    <div>
        <Navbar />
        <HomePage/>
        <About/>
        <Footer/>
    
   
  </div>
);
}
  

export default Home