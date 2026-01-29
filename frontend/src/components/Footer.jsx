import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black border-t-3 border-black shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm px-4 sm:px-8 lg:px-16'>

            <div>
                <Link to='/'> <img src={assets.logo} className = 'mb-5 w-32 ' alt="" /> </Link>
                <p className='w-full md:w-2/3 text-white font-bold'>
                    Your ultimate destination for trendy fashion and accessories. We bring you curated collections with unbeatable style and service.
                </p>
            </div>

            <div className='border-2 border-white p-4 bg-yellow-400 shadow-[5px_5px_0px_0px_rgba(220,38,38,1)]'>
                <p className='text-2xl font-black mb-5 uppercase'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-black font-bold'>
                    <Link to ='/' className='hover:bg-cyan-400 px-2 py-1 rounded-sm transition-colors'><li>Home</li></Link>
                    <Link to = '/about' className='hover:bg-cyan-400 px-2 py-1 rounded-sm transition-colors'> <li>About Us</li> </Link>
                    <Link to = '/orders' className='hover:bg-cyan-400 px-2 py-1 rounded-sm transition-colors'> <li>Delivery</li> </Link>
                    <Link to = '/contact' className='hover:bg-cyan-400 px-2 py-1 rounded-sm transition-colors'> <li>Privacy Policy</li> </Link>
                </ul>
            </div>

            <div className='border-2 border-white p-4 bg-yellow-400 shadow-[5px_5px_0px_0px_rgba(220,38,38,1)]'>
                <p className='text-2xl font-black mb-5 uppercase'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-black font-bold'>
                    <li>+91 9998887777</li>
                    <li>omen@gmail.com</li>
                </ul>
            </div>
        </div>

        <div className='border-t-2 border-white'>
            <hr className='border-white' />
            <p className='py-5 text-sm text-center font-bold text-white'> Copyright 2025@ omen.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer