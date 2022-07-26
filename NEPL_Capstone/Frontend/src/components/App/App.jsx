import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

//Components
import Landing from '../Landing/Landing'
import Login from '../Login/Login'
import Register from "../Register/Register"
import UserDashboard from '../UserDashboard/UserDashboard'
import ModulePage from '../ModulePage/ModulePage'
//Contexts
import { AuthContextProvider } from "../../contexts/auth"
import { useAuthContext } from "../../contexts/auth"

function App({}) {
  return (
    <AuthContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/UserDashboard/" element={<UserDashboard />} />
            <Route path="/ModulePage" element={<ModulePage /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App
