import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-3xl font-bold text-green-500'>Speedy Shopper</h1>
        <div className='justify-between'>
            <button className='bg-slate-200 text-2xl text-gray-600 px-4 py-2 mx-2 rounded-lg cursor-pointer'>Log In</button>
            <button className='bg-slate-200 text-2xl text-gray-600 px-4 py-2 rounded-lg cursor-pointer'>Register</button>
        </div>
    </div>
  )
}

export default Navbar