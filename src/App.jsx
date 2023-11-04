// import { Router } from "express"
import Navbar from "./Components/navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </>
  )
}

export default App