import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Components/Home'
import Cart from '../Components/Cart'
import UsersLike from '../Components/UsersLike'


const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/UsersLike' element={<UsersLike/>} />

    </Routes>
  )
}

export default Router