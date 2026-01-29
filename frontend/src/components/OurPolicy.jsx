import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 sm:text-sm md:text-base text-black bg-[#6fd526] border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-4 sm:px-8 lg:px-16'>

        <div className='border-2 border-black p-4 bg-cyan-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform'>
            <img src={assets.exchange_icon} className='w-20 m-auto mb-2' alt="" />
            <p className='font-black text-lg'>Easy Exchange Policy</p>
            <p className='text-black font-bold'>We offer hassle free exchange policy</p>
        </div>

        <div className='border-2 border-black p-4 bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform'>
            <img src={assets.quality_icon} className='w-20 m-auto mb-2 ' alt="" />
            <p className='font-black text-lg'>7 Days Return Policy</p>
            <p className='text-black font-bold'>We provide 7 Days free return policy</p>
        </div>

        <div className='border-2 border-black p-4 bg-pink-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform'>
            <img src={assets.support_img} className='w-20 m-auto mb-2 ' alt="" />
            <p className='font-black text-lg'>Best Customer Support</p>
            <p className='text-black font-bold'>We provide 24/7 customer support</p>
        </div>

    </div>
  )
}

export default OurPolicy