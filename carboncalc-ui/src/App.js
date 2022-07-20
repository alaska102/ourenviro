// import { useState, useRef } from 'react';
// import Loading from './Pages/Loading/Loading';
// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Flex,
//   HStack,
//   IconButton,
//   Input,
//   Text,
// } from '@chakra-ui/react'
import * as React from 'react';
import Maptool from './Pages/Maptool/Maptool';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Vehicles from './Pages/Vehicles/Vehicles';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  const milesPerGallon= 20;
  const carName="Hailey's Car";

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Footer />

        <div className='content'>
          <Routes>
          <Route path="/" element={
            <Home />
          }
          >
          </Route>

          <Route path="/map" element={
            <Maptool />
          }
          >
          </Route>

          <Route path="/about" element={
            <Home />
          } >
          </Route>

          <Route path="/vehicles" element={
            <Vehicles 
            carName={carName}
            milesPerGallon={milesPerGallon}  
            />
          }>
          </Route>

          <Route path="/signin" element={
            <SignIn />
          } >
          </Route>

          <Route path="/signup" element={
            <SignUp />
          } >
          </Route>
          </Routes>


        </div>

      </div>
    </BrowserRouter>
  );
}
