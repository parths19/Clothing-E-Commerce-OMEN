import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row bg-cyan-400 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'>
            {/* Hero Left side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-black'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[4px] bg-black'></p>
                        <p className=' font-extrabold text-lg md:text-xl uppercase'> OUR BESTSELLERS</p>
                    </div>
                    <h1 className=' font-black text-4xl sm:py-3 lg:text-7xl leading-relaxed text-black drop-shadow-[0_4px_0px_rgba(255,255,255,1)]'>Latest Arrivals</h1>
                    <Link to = '/collection'><div className='flex items-center gap-2'>
                        <p className='font-extrabold text-lg md:text-xl uppercase bg-yellow-400 px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform cursor-pointer'> SHOP NOW </p>
                        <p className='w-8 md:w-11 h-[4px] bg-black'></p>
                    </div></Link>
                </div>

            </div>

            {/* Hero Right Side */}
            
            <img className='w-full sm:w-1/2 border-l-3 border-black' src={assets.hero_img} alt="" />
            
        </div>
    )
}

export default Hero