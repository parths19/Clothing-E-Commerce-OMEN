import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem'


const Profile = () => {

    const currentPoints = 35;
    const navigate = useNavigate();
    const { products, backendUrl, token, setToken } = useContext(ShopContext)
    const [stash, setStash] = useState([]);
    const [userData, setUserData] = useState({});

    const navLinks = [
        { name: 'Orders', path: '/orders' },
        { name: 'Settings', path: '/settings' },
        { name: 'Logout', path: '/login' },
    ];

    const fetchUserData = async () => {
        try {

            if (!token) {
                return navigate('/login')
            }

            const response = await axios.get(backendUrl + '/api/user/profile', { headers: { token } })

            if (response.data.success) {
                setUserData(response.data.user);
            }
        } catch (error) {
            console.error("DATA RETRIEVAL FAILED!", error);
        }
    }

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    useEffect(() => {
        fetchUserData()
    }, [token])

    useEffect(() => {
        setStash(products.slice(0, 3))
    }, [products])
    return (
        <div className="min-h-screen bg-white text-black p-4 font-black tracking-tight selection:bg-pink-500">
            {/* 1. HALFTONE BACKGROUND EFFECT (Global) */}
            <div className="fixed inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

            <div className="relative max-w-6xl mx-auto border-[6px] border-black bg-white p-8 drop-shadow-[12px_12px_0px_rgba(0,0,0,1)]">

                {/* HEADER SECTION */}
                <header className="relative mb-12 border-b-[6px] border-black pb-6">
                    <span className="absolute -top-12 -right-4 bg-black text-white px-4 py-1 rotate-3 text-xl uppercase italic">WHOOSH!</span>
                    <h1 className="text-7xl lg:text-9xl uppercase italic leading-none drop-shadow-[4px_4px_0px_rgba(236,72,153,1)]">
                        MY ACCOUNT
                    </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN: NAVIGATION (THE "STAIRCASE" LOOK) */}
                    <aside className="lg:col-span-3 space-y-4">
                        {navLinks.map((item, idx) => (
                            <div
                                key={item.name}
                                onClick={() => {
                                    if (item.name === 'Logout') {
                                        logout();
                                    }
                                    else { navigate(item.path) }
                                }} // <--- NAVIGATION TRIGGER
                                className={`group cursor-pointer border-4 border-black p-4 bg-white hover:bg-pink-500 hover:-translate-y-1 transition-all
                                drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] active:drop-shadow-none active:translate-x-[6px] active:translate-y-[6px]
                                ${idx % 2 === 0 ? '-rotate-2' : 'rotate-1'}`}>

                                <span className="text-2xl uppercase italic group-hover:text-white">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </aside>

                    {/* CENTER COLUMN: IDENTITY & STATS */}
                    <main className="lg:col-span-9 space-y-10">

                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Profile Card */}
                            <div className="border-4 border-black p-6 relative bg-cyan-400">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-24 h-24 border-4 border-black rounded-full overflow-hidden bg-pink-100 flex-shrink-0">
                                        <img className='hover:scale-110 transition ease-in-out' src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl uppercase">{userData.name}</h2>
                                        <span className="bg-pink-500 text-white px-2 py-0.5 text-xs border-2 border-black">LEVEL: SNEAKERHEAD</span>
                                    </div>
                                </div>
                                <div className="bg-yellow-300 border-4 border-black p-2 -rotate-1 text-center font-bold text-sm">
                                    READY TO SHOP!
                                </div>
                            </div>

                            <section className="border-4 border-black bg-white relative drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden">
                                {/* The "Authenticity" Stripe - Diagonal Background */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 -mr-16 -mt-16 rotate-45 border-b-4 border-black z-0"></div>

                                <div className="relative z-10 p-6">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-3xl font-black uppercase italic leading-none tracking-tighter">
                                            RECRUIT <br /> <span className="text-pink-500">DOSSIER</span>
                                        </h3>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black uppercase opacity-40 leading-none">Status</p>
                                            <p className="text-sm font-black text-green-500 uppercase italic">Verified_Hype</p>
                                        </div>
                                    </div>

                                    {/* Reputation Stats Grid */}
                                    <div className="space-y-4">
                                        {/* Stat 1: Influence */}
                                        <div className="group border-t-2 border-black border-dashed">
                                            <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                                                <span>Influence Level</span>
                                                <span className="group-hover:text-pink-500 transition-colors">10%</span>
                                            </div>
                                            <div className="h-3 border-2 border-black bg-gray-100 p-0.5">
                                                <div className="h-full bg-black w-[10%] group-hover:bg-pink-500 transition-all duration-500"></div>
                                            </div>
                                        </div>

                                        {/* Stat 2: Collection Rarity */}
                                        <div className="flex gap-4">
                                            <div className="flex-1 border-2 border-black p-2 bg-cyan-100 italic">
                                                <p className="text-[9px] font-black uppercase opacity-60">Collection Rank</p>
                                                <p className="text-xl font-black uppercase tracking-tighter">S-Tier</p>
                                            </div>
                                            <div className="flex-1 border-2 border-black p-2 bg-white italic">
                                                <p className="text-[9px] font-black uppercase opacity-60">Avg. Resale</p>
                                                <p className="text-xl font-black uppercase tracking-tighter">+24%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>



                        {/* LOWER SECTION: THE "SECRET STASH" GRID */}
                        <section className="border-[6px] border-black p-6 bg-green-500">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-4xl uppercase italic">SECRET STASH</h3>
                                <span className="text-pink-500 text-3xl">BLAM!</span>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {stash.map((item, index) => (
                                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                                ))}
                            </div>
                        </section>

                        <section className="mt-12 border-[6px] border-black p-8 bg-white drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                            {/* Background Action Lines */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none italic font-black text-6xl select-none leading-none">
                                POWER POWER POWER POWER POWER POWER POWER POWER POWER
                            </div>

                            <div className="relative">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <h3 className="text-3xl font-black uppercase italic leading-none">Level: Style Titan</h3>
                                        <p className="text-sm font-bold uppercase tracking-widest text-pink-600">Next Unlock: Free Limited Drop</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-5xl font-black italic">{currentPoints}</span>
                                        <span className="text-xl font-bold uppercase">/100 XP</span>
                                    </div>
                                </div>

                                {/* THE GAUGE */}
                                <div className="h-12 border-4 border-black bg-gray-100 p-1 relative">
                                    {/* Progress Fill */}
                                    <div
                                        className="h-full bg-pink-500 border-r-4 border-black transition-all duration-1000 ease-out relative overflow-hidden"
                                        style={{ width: `${currentPoints}%` }}
                                    >
                                        {/* Animated Glow / Shine */}
                                        <div className="absolute inset-0 bg-white/30 skew-x-[-20deg] translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                                    </div>

                                    {/* Segments for that Retro UI look */}
                                    <div className="absolute inset-0 flex justify-between px-4 pointer-events-none">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-1 h-full bg-black/20"></div>
                                        ))}
                                    </div>
                                </div>

                                {/* REWARD MILESTONES */}
                                <div className="flex justify-between mt-2 text-[10px] font-black uppercase">
                                    <span className="bg-black text-white px-1">Novice</span>
                                    <span className="opacity-40">Hypebeast</span>
                                    <span className="opacity-40 text-pink-500">Legendary</span>
                                </div>
                            </div>

                            {/* FLOATING ACTION TAG */}
                            <div className="absolute -bottom-2 -right-2 bg-yellow-300 border-4 border-black px-4 py-2 rotate-3 hover:rotate-0 transition-transform cursor-help group">
                                <span className="font-black uppercase group-hover:hidden text-sm">How to Level Up?</span>
                                <span className="font-black uppercase hidden group-hover:block text-sm underline">Shop the new Drop!</span>
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    )
}

export default Profile

