import React from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink } from 'react-router-dom'


const Navbar = ( {setToken} ) => {
  return (
    <div className='flex justify-between items-center py-4 px-[4%] bg-white'>
        <Link to = '/'> <img src={assets.logo} className='w-[max(15%,80px)]' alt="" /></Link>
        <button onClick={() => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full  text-xs sm:text-sm ' >Logout</button>
    </div>
  )
}

export default Navbar