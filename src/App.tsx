import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'

const App: React.FC = () => {

  return (
    <Router>

      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
      </Routes>


    </Router>

  );
}

export default App;
