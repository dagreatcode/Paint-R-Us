import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound/NotFound";

function App() {
  return (
    <div>
        <div className="page-container">
          <div className="content-wrap">
            <Router>
              {/* <NavBar /> */}
              <Routes>
                {/* <Route exact path="/About" element={<About />} />
                <Route exact path="/Profile" element={<Profile />} />
                <Route exact path="/Contact" element={<Contact />} /> */}
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
