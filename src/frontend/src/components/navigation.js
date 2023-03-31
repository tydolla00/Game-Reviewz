import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  DoorClosed,
  Gear,
  Moon,
  PersonCircle,
} from "react-bootstrap-icons";
import UserService from "../services/UserService";
import { NavLink } from "react-router-dom";
import "../styles/App.scss";
import Modal from "./modal";

const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const toggleDropdown = () => {
    let dropdown = document.getElementById("showdropdown");
    dropdown.classlist.remove("openmenu");
  };

  return (
    <nav id="nav">
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
            &nbsp;Games
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/tech">
            &nbsp;Tech
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/about">
            &nbsp;About
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/community">
            &nbsp;Community
          </NavLink>
        </li>
        <li>
          <NavLink className="navitem" to="/contact">
            &nbsp;Contact
          </NavLink>
        </li>
      </ul>
      {user ? (
        <Profile />
      ) : (
        <button className="loginButton" onClick={() => setModalShow(true)}>
          Login
        </button>
      )}
      {modalShow && <Modal show={setModalShow} />}
      {/* <form>
        {SearchBar()}
        <button type="submit">Search</button>
      </form> */}
    </nav>
  );
};
export default Navbar;

const Profile = () => {
  const user = UserService.userInfo();
  const toggledropdown = () => {
    let toggleDropdown = document.getElementById("showdropdown");
    toggleDropdown.classList.add("openmenu");
  };
  const toggleHideDropdown = () => {
    let toggleDropdown = document.getElementById("showdropdown");
    toggleDropdown.classList.toggle("openmenu");
  };
  return (
    <>
      <div
        className="profileside"
        onMouseOver={toggledropdown}
        // onMouseOut={toggleHideDropdown}
        onClick={toggleHideDropdown}
      >
        <PersonCircle className="personcircle" />
        <div>My Profile</div>
      </div>
      <div
        className="dropdown"
        id="showdropdown"
        onMouseLeave={toggleHideDropdown}
      >
        <div className="profiletab">
          <PersonCircle />
          <div>{user ? user.username : "Profile Name:"}</div>
        </div>
        <hr />
        <div className="dropdowntab">
          <div>
            <PersonCircle />
            <div>Edit Profile</div>
          </div>
          <ArrowRight className="arrowdropdown" />
        </div>
        <div className="dropdowntab">
          <div>
            <Gear />
            <div>Settings</div>
          </div>
          <ArrowRight className="arrowdropdown" />
        </div>
        <div className="dropdowntab">
          <div>
            <Moon />
            <div>Dark Mode</div>
          </div>
          <ArrowRight className="arrowdropdown" />
        </div>
        <div className="dropdowntab">
          <div>
            <DoorClosed />
            <div>Logout</div>
          </div>
          <ArrowRight className="arrowdropdown" />
        </div>
      </div>
    </>
  );
};

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
