import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Page/Home.jsx';
import TicTacToe from './Page/TicTacToe.jsx';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </>
  );
}

export default App;
