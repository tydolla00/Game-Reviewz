import React, { useState } from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/App.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
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
      </ul>
      <form className="searchbar">
        {SearchBar()}
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};
export default Navbar;

// export function NavigationBar() {
//   return (
//     <Navbar variant="dark" expand="lg" sticky="top">
//       <Container className="">
//         <Navbar.Brand href="/">Game Reviewz</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse>
//           <Nav className="">
//             <NavLink to="/" activeClassName="active">
//               Home
//             </NavLink>
//             <NavLink to="/games" activeClassName="active">
//               Games
//             </NavLink>
//             <NavLink to="/tech" activeClassName="active">
//               Tech
//             </NavLink>
//             <NavLink to="/about" activeClassName="active">
//               About
//             </NavLink>
//             <NavLink to="/community" activeClassName="active">
//               Community
//             </NavLink>
//             <NavLink to="/contact" activeClassName="active">
//               Contact
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continen: "Asia" },
  ];
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    countries.filter((country) => {
      return country.name.match(searchInput);
    });
  }
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
