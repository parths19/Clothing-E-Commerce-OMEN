import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div className='space-y-0'>
      <Hero />
      <div className='border-b-4 border-black'></div>
      <LatestCollection/>
      <div className='border-b-4 border-black'></div>
      <BestSeller/>
      <div className='border-b-4 border-black'></div>
      <OurPolicy/>
      <div className='border-b-4 border-black'></div>
      <div className='-mt-8'>
        <NewsletterBox/>
      </div>
    </div>
  )
}

export default Home