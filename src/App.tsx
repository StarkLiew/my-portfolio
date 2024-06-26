import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Game from './Pages/Game'

const App: React.FC = () => {
  document.title = "Stark L Developer";
  
  return (
    <Router>

      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/game" element={< Game />} />
      </Routes>


    </Router>

  );
}

export default App;
