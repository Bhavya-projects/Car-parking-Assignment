import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Parking from './components/Parking';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Parking/>}/>
    </Routes>
  );
}

export default App;
