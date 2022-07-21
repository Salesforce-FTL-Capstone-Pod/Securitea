import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

//Components
import Landing from '../Landing/Landing'
import Login from '../Login/Login'
import Register from "../Register/Register"
//Contexts
import { AuthContextProvider } from "../../contexts/auth"

function App() {
  return (
    <AuthContextProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
    )
}

export default App
