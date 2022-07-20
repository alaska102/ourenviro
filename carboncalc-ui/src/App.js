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

export default function App() {
  const milesPerGallon= 20;
  const carName="Hailey's Car";
  return (
    <Vehicles
    carName={carName}
    milesPerGallon={milesPerGallon}
    />
  );
}