import React, {useEffect, useState} from 'react';
import './App.css';

//FIREBASE
//import { db } from './firebase/firebaseConfig';
//import { collection, query, getDocs } from "firebase/firestore";

//REACT ROUTER DOM
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ItemDetailContainer from './pages/ItemDetailContainer';

//COMPONENTS
import NavBar from "./components/NavBar/NavBar"; 
//import { useEffect, useState } from 'react';
import Carrito from "./components/Carrito/Carrito";

const App = () => {

  return(
    <Router>
      <div className='App'>
        <NavBar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />  
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </div>
    </Router>
  )   
}

export default App;