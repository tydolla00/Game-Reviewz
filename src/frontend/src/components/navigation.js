import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/App.scss";
import Modal from "./modal";

const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <nav>
      <h1>
        Game<span>Reviewz</span>
      </h1>
      <ul className="navItems">
        <li>
          {/* activeClassName */}
          <NavLink className="navitem" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/games">
            Games
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/tech">
            Tech
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/community">
            Community
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/contact">
            Contact
          </NavLink>
        </li>
        <button className="loginButton" onClick={() => setModalShow(true)}>
          Login
        </button>
      </ul>
      {modalShow && <Modal show={setModalShow} />}
      <form>
        {SearchBar()}
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};
export default Navbar;

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        className="searchinput"
        placeholder="Search..."
        onChange={handleChange}
        value={searchInput}
      />
    </>
  );
};
