import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        style={{
          // height: "200px",
          margin: "0",
          position: "absolute",
          //   position: "fixed",
          left: "0",
          verticalAlign: "baseline",
          //   bottom: "0%",
          width: "100%",
          backgroundColor: "#001D6E",
          //   color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#FEE2C5" }}>Paint R Us</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-4" style={{ color: "#C4DDFF" }}>
              <h4>Address</h4>
              <p style={{ color: "#FEE2C5" }}>
                3490 Lorem rd ipsum dolor 30930 
              </p>
            </div>
            <div className="col-sm-4" style={{ color: "#C4DDFF" }}>
              <h4>Hours Of Operation</h4>
              <p style={{ color: "#FEE2C5" }}>
                Sunday - Saturday, we are open all day.
              </p>
            </div>
            <div className="col-sm-4" style={{ color: "#FEE2C5" }}>
              <h4 style={{ color: "#C4DDFF" }}>Quick Links </h4>
              <Link to="/" style={{ color: "#C4DDFF" }}>
                Home
              </Link>
              <br />
              <Link to="/aboutus" style={{ color: "#C4DDFF" }}>
                About Us
              </Link>
              <br />
              <Link to="/contactus" style={{ color: "#C4DDFF" }}>
                Contact Us
              </Link>
              <br />
              <Link to="/portfolio" style={{ color: "#C4DDFF" }}>
                Portfolio
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h6 style={{ color: "white" }}>
                © Copyright 2022 Powered By DaGreatCode LLC
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
