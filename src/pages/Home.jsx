import React from 'react'
import MainBanner from '../Components/MainBanner'
import Navbar from '../Components/navbar'
import RowSlider from '../Components/RowSlider'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <MainBanner/>
        <h1 className='font-bold text-slate-500 text-center text-2xl'>Groceries</h1>
        <RowSlider/>
    </div>
  )
}

export default Home