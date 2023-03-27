import React from "react";
import Navbar from "./components/navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Games from "./pages/games";
import Tech from "./pages/tech";
import Community from "./pages/community";
import Article from "./pages/article";
import "./styles/App.scss";
import logo from "./assets/smashultimate.jpeg";

// Navbar will be sticky and will contain links to Games, Tech, About, Community - Top Reviewers,
// Moderators |, Login, and a Search Bar.
const headerFunction = () => {
  return <img src={logo} className="img" alt="Header" />;
};

// Contains the Routing for the layout of the website.
// If app acts up with CORS, whitelabel error, switch to HashRouter.
const App = () => {
  return (
    <Router>
      {/* {headerFunction()} */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/games" element={<Games />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
export default App;
