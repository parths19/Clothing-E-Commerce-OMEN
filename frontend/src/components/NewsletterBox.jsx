import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center bg-pink-500 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] py-10 px-4 sm:px-8 lg:px-16'>
        <p className='text-4xl font-black text-black uppercase'>
            Subscribe now & get 20% off
        </p>
        <p className='mt-3 text-black font-bold'>
          Stay ahead of the trends with exclusive offers, style tips, and early access to new arrivals. Join our fashion community today!
        </p>

        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border-3 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
            <input className='w-full sm:flex-1 outline-none border-2 border-black px-2 py-1 font-bold' type="text" placeholder='Enter your Email' required/>
            <button type='submit' className='bg-yellow-400 text-black text-lg px-6 py-2 font-black uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform'> Subscribe </button>
        </form>
    </div>
  )
}

export default NewsletterBox