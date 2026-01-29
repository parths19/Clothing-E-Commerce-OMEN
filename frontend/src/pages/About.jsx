import React from 'react'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div className='bg-white'>
      <div className='text-center pt-8 border-t-4 border-black'>
        <h1 className='text-6xl font-black uppercase border-b-4 border-black mb-4 pb-4'> <span className='drop-shadow-[0_4px_0px_rgba(236,72,153,1)]'> ABOUT </span> <span className='text-pink-500 drop-shadow-[0_4px_0px_rgba(0,0,0,1)]'>US</span></h1>
      </div>

      <div className='my-16 flex flex-col md:flex-row gap-16 px-4 sm:px-8 lg:px-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px] border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'/>
        <div className='flex flex-col justify-center gap-6 text-black md:w-2/4 px-4 py-8'>
          <p className='font-bold text-lg'>Welcome to our fashion-forward e-commerce platform, where style meets convenience. We are passionate about curating the latest trends and timeless pieces to help you express your unique personality through fashion.</p>
          <p className='font-bold text-lg'>Our journey started with a simple idea: to make high-quality, affordable fashion accessible to everyone, no matter where you are.</p>
          <b className='text-black font-black text-2xl'>OUR MISSION</b>
          <p className='font-bold text-base'>Our mission is to empower individuals with stylish, sustainable clothing that boosts confidence and celebrates diversity in fashion.</p>
        </div>
      </div>

      <hr className='border-4 border-black mx-4 sm:mx-8 lg:mx-16' />

      <div className='text-center py-8'>
        <h1 className='text-5xl font-black uppercase border-b-4 border-black mb-4 pb-4'>WHY <span className='text-cyan-500'>CHOOSE US</span></h1>
      </div>

      <div className='text-sm flex flex-col mb-20 md:flex-row px-4 sm:px-8 lg:px-16 gap-8'>
        <div className='flex flex-col gap-5 border-2 border-black px-12 py-10 md:px-20 sm:py-24 bg-green-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform'>
          <b className='text-black font-black text-lg'>Quality Assurance: </b>
          <p className='text-black font-bold'>We rigorously test every product to ensure it meets the highest standards of quality, comfort, and longevity.</p>
        </div>
        <div className='flex flex-col gap-5 border-2 border-black px-12 py-10 md:px-20 sm:py-24 bg-cyan-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform'>
          <b className='text-black font-black text-lg'>Convenience: </b>
          <p className='text-black font-bold'>Enjoy seamless shopping with fast shipping, easy returns, and a user-friendly platform designed for your convenience.</p>
        </div>
        <div className='flex flex-col gap-5 border-2 border-black px-12 py-10 md:px-20 sm:py-24 bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform'>
          <b className='text-black font-black text-lg'>Exceptional Customer Service: </b>
          <p className='text-black font-bold'>Our dedicated support team is always ready to assist, ensuring a smooth and satisfying experience from order to delivery.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>

  )
}

export default About