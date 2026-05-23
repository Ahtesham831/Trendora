import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-4 px-[4%] justify-between'>
        <div className='flex items-baseline gap-2'>
            <span className='text-2xl font-extrabold tracking-widest text-gray-900'>TRENDORA</span>
            <span className='text-[10px] font-semibold tracking-wider text-white px-2 py-0.5 bg-black rounded-md'>ADMIN</span>
        </div>
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar