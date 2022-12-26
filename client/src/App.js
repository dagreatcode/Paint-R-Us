import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

import NavBar from "./containers/NavBar/NavBar";
import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";
import Login from "./containers/Login/Login";
import ContactUs from "./containers/ContactUs/ContactUs";
import AboutUs from "./containers/AboutUs/AboutUs";
import Portfolio from "./containers/Portfolio/Portfolio";

function App() {
  return (
    <div>
        <div className="page-container">
          <div className="content-wrap">
            <Router>
              <NavBar />
              <Routes>
                <Route exact path="/AboutUs" element={<AboutUs />} />
                <Route exact path="/ContactUs" element={<ContactUs />} />
                <Route exact path="/Portfolio" element={<Portfolio />} />
                <Route exact path="/Login" element={<Login />} /> 
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              {/* <Footer /> */}
            </Router>
          </div>
        </div>
    </div>
  );
}

export default App;
