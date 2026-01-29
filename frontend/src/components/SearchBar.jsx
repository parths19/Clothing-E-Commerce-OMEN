import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    },[location])

    // Show search bar logic in return statement with both bieng true
    return showSearch && visible ? (
        <div className='border-t-3 border-b-3 border-black bg-yellow-400 text-center py-4 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]'>
            <div className='inline-flex items-center justify-center border-3 border-black px-5 py-2 my-5 mx-3 rounded-sm w-3/4 sm:w-1/2 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none text-sm font-bold' />
                <img className='w-4' src={assets.search_icon} alt="" />
            </div>
            <img onClick={() => setShowSearch(false)}  src={assets.cross_icon} alt="" className='inline w-5 cursor-pointer' />

        </div>
    ) : null
}

export default SearchBar