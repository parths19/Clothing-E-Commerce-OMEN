import React, {useCallback, useContext, useState} from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {

    const [visible,setVisible] = useState(false);
    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-bold bg-black border-3 px-4 sm:px-8 lg:px-16'>

        <Link to = '/' ><img src={assets.logo} className='w-36' alt="" /></Link>
        <ul className='hidden sm:flex gap-10 text-xl text-[#FF49DB] font-extrabold uppercase'>

            <NavLink to = '/' className = 'flex flex-col items-center gap-1 hover:translate-x-1 hover:translate-y-1 transition-transform'>
                {({ isActive }) => (
                    <>
                        <p className={isActive ? 'text-white' : ''}>HOME</p>
                        <hr className={`w-2/4 border-none h-[3px] bg-white ${isActive ? 'block' : 'hidden'}`}/>
                    </>
                )}
            </NavLink>

            <NavLink to = '/collection' className = 'flex flex-col items-center gap-1 hover:translate-x-1 hover:translate-y-1 transition-transform'>
                {({ isActive }) => (
                    <>
                        <p className={isActive ? 'text-white' : ''}>COLLECTION</p>
                        <hr className={`w-2/4 border-none h-[3px] bg-white ${isActive ? 'block' : 'hidden'}`}/>
                    </>
                )}
            </NavLink>

            <NavLink to = '/about' className = 'flex flex-col items-center gap-1 hover:translate-x-1 hover:translate-y-1 transition-transform'>
                {({ isActive }) => (
                    <>
                        <p className={isActive ? 'text-white' : ''}>ABOUT</p>
                        <hr className={`w-2/4 border-none h-[3px] bg-white ${isActive ? 'block' : 'hidden'}`}/>
                    </>
                )}
            </NavLink>

            <NavLink to = '/contact' className = 'flex flex-col items-center gap-1 hover:translate-x-1 hover:translate-y-1 transition-transform'>
                {({ isActive }) => (
                    <>
                        <p className={isActive ? 'text-white' : ''}>CONTACT</p>
                        <hr className={`w-2/4 border-none h-[3px] bg-white ${isActive ? 'block' : 'hidden'}`}/>
                    </>
                )}
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <Link to={'/collection'}> <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='mt-1 w-8 cursor-pointer hover:translate-x-1 hover:translate-y-1 transition-transform' alt="" /> </Link>
            
            <div className='group relative'>
                <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className = 'mt-1 w-8 cursor-pointer hover:translate-x-1 hover:translate-y-1 transition-transform' alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    {/* { DROPDOWN MENU } */}
                    {token &&
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-yellow-400 text-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-3 border-black'>
                        <p onClick={() => navigate('/profile')} className='cursor-pointer hover:bg-cyan-400 p-2 rounded-sm transition font-bold' >My Profile</p>
                        {/* <p onClick={() => navigate('/orders')} className='cursor-pointer hover:bg-cyan-400 p-2 rounded-sm transition font-bold' >Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:bg-pink-500 p-2 rounded-sm transition font-bold' >Logout</p> */}
                    </div>
                    }
                </div>
            </div>

            <Link to = '/cart' className='relative'>
                <img src={assets.cart_icon} className='w-7 cursor-pointer min-w-7 hover:translate-x-1 hover:translate-y-1 transition-transform' alt="" />
                <p className=' absolute right-[-7px] bottom-[-7px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-sm text-[8px] font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'>
                    {getCartCount()}
                </p>
            </Link>

            <img onClick={() => setVisible(true)} src={assets.menu_icon} className='mt-1 w-6 cursor-pointer sm:hidden border-2 border-white hover:translate-x-1 hover:translate-y-1 transition-transform'  alt="" />
            
        </div>
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white border-l-3 border-black shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className=' flex flex-col text-black' >
                <div  onClick = {() => setVisible(false)} className = 'flex items-center gap-4 p-3 cursor-pointer hover:bg-yellow-400 transition-colors border-b-2 border-black'>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p className='font-bold'>Back</p>
                </div>

                <NavLink onClick={() => setVisible(false)} className= ' py-2 pl-6 border-b-2 border-black hover:bg-yellow-400 transition-colors font-bold' to= '/'>HOME</NavLink>
                <NavLink onClick={() => setVisible(false)} className= ' py-2 pl-6 border-b-2 border-black hover:bg-yellow-400 transition-colors font-bold' to= '/collection'>COLLECTION</NavLink>
                <NavLink onClick={() => setVisible(false)} className= ' py-2 pl-6 border-b-2 border-black hover:bg-yellow-400 transition-colors font-bold' to= '/about'>ABOUT</NavLink>
                <NavLink onClick={() => setVisible(false)} className= ' py-2 pl-6 border-b-2 border-black hover:bg-yellow-400 transition-colors font-bold' to= '/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar