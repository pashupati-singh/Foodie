// import React from 'react'
// import {Routes,Route} from "react-router-dom"
// import { AddNewResturant } from '../pages/AddNewResturant'
// import { Login } from '../pages/Login'
// import { Signup } from '../pages/Signup'
// import { HomePage } from '../pages/HomePage'

// export const MainRouters = () => {
//   return (
//    <Routes>
//     <Route path='/resturant' element={<AddNewResturant />} />
//     <Route path= "/login" element={<Login />} />
//     <Route path='/sign' element={<Signup />} />
//     <Route path="/area/:text" component={<HomePage />} />
//    </Routes>
//   )
// }


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AddNewResturant } from '../pages/AddNewResturant';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { HomePage } from '../pages/HomePage';
import { Productpage } from '../pages/Productpage';
import { Singlepage } from '../pages/Singlepage';
import { CartPage } from '../pages/CartPage';

export const MainRouters = () => {
  return (
    <Routes>
      <Route path='/' element = {<HomePage />} />
      <Route path="/resturant" element={<AddNewResturant />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Signup />} />
      {/* <Route path='/product' element={<Productpage />} /> */}
      <Route path="/product/:text" element={<Singlepage />} />
      <Route path="/product/:text/:_id" element={<Productpage />} />
      <Route path='/cart' element={<CartPage />} />
    </Routes>
  );
};
