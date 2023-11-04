import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-3xl font-bold text-green-500'>Speedy Shopper</h1>
        <div>
          <button className='bg-slate-200 text-2xl py-2 px-4 rounded-lg hover:bg-slate-300'>Search</button>
        </div>
        <div className='justify-between'>

          {/*Button to Login and register page  */}
          <Link to={"/login"}  className='bg-slate-200 text-2xl text-gray-600 px-4 py-2 mx-2 rounded-lg cursor-pointer hover:bg-slate-300'>
            Log In
          </Link>

          <Link to={"/register"} className='bg-slate-200 text-2xl text-gray-600 px-4 py-2 mx-2 rounded-lg cursor-pointer hover:bg-slate-300'>
            Register
          </Link>

          <Link to={"/cart"} className='bg-lime-400 text-2xl text-gray-600 px-4 py-2 mx-2 rounded-lg cursor-pointer hover:bg-lime-500'>
            MyCart
          </Link>
        </div>
    </div>
  )
}

export default Navbar