import React from 'react'
import Header from './Header'
import Hero from './Hero'
import CompanyLogos from './CompanyLogos'
import Discover from './Discover'

function HomeLayout() {
  return (
    <div className='w-full'>
      <Header />
      <div className='mt-0 sm:mt-2 lg:mt-24'>
      <Hero />
      <CompanyLogos />
      <Discover />
      </div>
    </div>
  )
}

export default HomeLayout