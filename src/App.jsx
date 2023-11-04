// import { Router } from "express"
import Navbar from "./Components/navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import LoginPage from "./Components/LoginPage"
import RegisterPage from "./Components/RegisterPage"



function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
