import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Article from './Pages/Article'
import Project from './Pages/Project'
import Contact from './Pages/Contact'

const App: React.FC = () => {
  document.title = "Stark L Developer";
  
  return (
    <Router>

      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/article" element={< Article />} />
        <Route path="/project" element={< Project />} />
        <Route path="/contact" element={< Contact />} />
      </Routes>


    </Router>

  );
}

export default App;
