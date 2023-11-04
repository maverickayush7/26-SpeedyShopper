// import { Router } from "express"
// import Navbar from "./Components/navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import LoginPage from "./Components/LoginPage"
import RegisterPage from "./Components/RegisterPage"
import Cart from "./Components/Cart"



function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
