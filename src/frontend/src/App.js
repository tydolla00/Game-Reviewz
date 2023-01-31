import React from 'react';
import Navbar from './components/navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Games from './pages/games';
import Tech from './pages/tech';
import Community from './pages/community';
import './App.css';
import logo from "./assets/smashultimate.jpeg";

// Navbar will be sticky and will contain links to Games, Tech, About, Community - Top Reviewers, 
// Moderators |, Login, and a Search Bar.

const App = () => {
  return (
    <Router>
      <img src={logo} className="img" alt="Header"/>
      <Navbar />
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="/games" element={< Games />} />
        <Route path="/tech" element={< Tech />} />
        <Route path="/about" element={< About />} />
        <Route path="/community" element={< Community />} />
        <Route path="/contact" element={< Contact />} />
      </Routes>
    </Router>
  );
};
export default App;