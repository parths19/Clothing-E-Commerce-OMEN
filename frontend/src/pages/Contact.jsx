import React from 'react'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className='bg-black min-h-screen'>

      <div className='text-center pt-10 border-t-4 border-white'>
        <h1 className='text-8xl font-black uppercase text-[#FF49DB] drop-shadow-[0_4px_0px_rgba(255,255,255,1)]'>CONTACT <span className='text-white'>US</span></h1>
      </div>

      <div className='flex justify-center my-16 px-4 sm:px-8 lg:px-16 '>
        <div className='bg-yellow-400 border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] p-12 flex flex-col md:flex-row gap-10 max-w-6xl w-full'>
          <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px] border-3 border-black shadow-[6px_6px_0px_0px_#FF49DB]'/>
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-black text-2xl text-black uppercase'>OUR STORE</p>
            <p className='text-black font-bold'>Greater Noida <br /> Uttar Pradesh, INDIA</p>
            <p className='text-black font-bold'>Tel: (+91) 9998887777 <br /> Email: omen@gmail.com</p>
            <hr className='border-4 border-black w-full' />
            <p className='font-black text-2xl text-black uppercase'>CAREERS AT OMEN</p>
            <p className='text-black font-bold'>Learn more about our teams and Job openings</p>
            <button className='bg-white border-3 border-black px-8 py-4 text-sm font-bold uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all'>Explore Jobs</button>
          </div>
        </div>
      </div>
      <div className='border-20 border-t-white'>
        <NewsletterBox/>
      </div>
    </div>
  )
}

export default Contact