import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Community from './pages/Community/Community';
import Header from './pages/Home/Header';
import Participation from './pages/Participation/Participation';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />}></Route>
        <Route path="/flombing" element={<Participation />}></Route>
      </Routes>
    </>
  );
}

export default App;
