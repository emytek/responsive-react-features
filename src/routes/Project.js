import React from 'react'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS" text="Some of my most recent works" />
      <WorkCard />
      <Pricing /> 
      <Footer />
    </div>
  )
}

export default Project