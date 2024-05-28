import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

import { Register } from './pages/Register'
import Notfound from './pages/Notfound'
import { Layout } from './components/ui/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='*' element={<Notfound />}></Route>
          <Route path='contact' element={<Contact />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App