import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-4xl font-black text-black uppercase drop-shadow-[0_4px_0px_rgba(255,255,255,1)]'>{text1} <span className='text-black'>{text2}</span> </p>
        {/* <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p> */}

    </div>
  )
}

export default Title