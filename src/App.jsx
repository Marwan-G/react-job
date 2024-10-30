import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import Car from './components/Car';

function App() {
  return (

    <>
      <Navbar />
      <Hero title="test " subtitle="test job site" />
      <HomeCards />
      <JobListings />


    </>
  )
}

export default App
