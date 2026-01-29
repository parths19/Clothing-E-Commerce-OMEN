import React from 'react'

const Home = () => {
    return (
        <div>

            {/* --- WELCOME HEADER SECTION --- */}
            <div className='px-[max(5vw,25px)] pt-10 pb-6'>
                <div className='border-[8px] border-black bg-[#A3E635] p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
                    <h1 className='text-6xl font-black uppercase tracking-tighter text-black mb-12'>
                        Fashion Admin <span className='text-white' style={{ WebkitTextStroke: '2px black' }}>HQ</span>
                    </h1>
                    <p className='text-xl font-bold text-black max-w-2xl leading-tight'>
                        Welcome back, Trendsetter. This is your command center to manage inventory,
                        track global orders, and curate the next season's viral drops.
                    </p>
                </div>

                {/* --- QUICK STATS / DESCRIPTION CARDS --- */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
                    <div className='border-[3px] border-black bg-white p-10 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]'>
                        <h3 className='font-black uppercase text-lg mb-2'>Live Inventory</h3>
                        <p className='font-medium'>Monitor stock levels across all categories from streetwear to luxury accessories.</p>
                    </div>

                    <div className='border-[3px] border-black bg-[#FF6B6B] p-10 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-white'>
                        <h3 className='font-black uppercase text-lg mb-2'>Order Flow</h3>
                        <p className='font-medium'>Real-time tracking of customer purchases and fulfillment status.</p>
                    </div>

                    <div className='border-[3px] border-black bg-[#5D5DFF] p-10 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-white'>
                        <h3 className='font-black uppercase text-lg mb-2'>Curation</h3>
                        <p className='font-medium'>Add new styles and update your catalog to keep the storefront fresh.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home