import React from 'react';
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className='navbar'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/tech">Tech</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}; export default Navbar;

// function Navbar() {
//   return (
//     <Router>
//       <div id='container'>
//         <Breadcrumb id="nav">
//           <Breadcrumb.Item>
//             <Link to="/">Home</Link>
//           </Breadcrumb.Item>
//           <Breadcrumb.Item>
//             <Link to="/about">About Us</Link>
//           </Breadcrumb.Item>
//           <Breadcrumb.Item>
//             <Link to="/contact">Contact Us</Link>
//           </Breadcrumb.Item>
//         </Breadcrumb>
//       </div>
//       <Routes>
//         <Route exact path='/' element={< Home />}></Route>
//         <Route exact path='/about' element={< About />}></Route>
//         <Route exact path='/contact' element={< Contact />}></Route>
//       </Routes>
//     </Router>
//   );
// } export default Navbar;