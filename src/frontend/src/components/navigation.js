import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import Home from '../pages/home';
import Contact from '../pages/contact';
import About from '../pages/about';


function Navbar() {
  return (
    <Router>
      <div id='container'>
        <Breadcrumb id="nav">
          <Breadcrumb.Item>
            <Link to="/">Home </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/about">About Us</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/contact">Contact Us</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
      </Routes>
    </Router>
  );
} export default Navbar;