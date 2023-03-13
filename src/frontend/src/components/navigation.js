import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/App.scss";
import LoginModal from "./modal";

const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <nav>
      <h1>
        Game<span>Reviewz</span>
      </h1>
      <ul className="navItems">
        <li>
          <NavLink className="navitem" to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/games" activeClassName="active">
            Games
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/tech" activeClassName="active">
            Tech
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/community" activeClassName="active">
            Community
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <button className="loginButton" onClick={() => setModalShow(true)}>
          Login
        </button>
      </ul>
      {modalShow && <LoginModal show={setModalShow} />}
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
