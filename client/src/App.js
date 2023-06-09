import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./containers/Login/Login";
import ContactUs from "./containers/ContactUs/ContactUs";
import AboutUs from "./containers/AboutUs/AboutUs";
import Portfolio from "./containers/Portfolio/Portfolio";
import Admin from "./containers/Admin/Admin";

function App() {
  return (
    <div style={{color: "#001D6E", backgroundColor: "#7FB5FF"}}>   
        <div className="page-container">
          <div className="content-wrap">
            <Router>
              <NavBar />
              <Routes>
                <Route exact path="/AboutUs" element={<AboutUs />} />
                <Route exact path="/ContactUs" element={<ContactUs />} />
                <Route exact path="/Portfolio" element={<Portfolio />} />
                <Route exact path="/Admin" element={<Admin />} />
                <Route exact path="/Login" element={<Login />} /> 
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </Router>
          </div>
        </div>
    </div>
  );
}

export default App;
