import React from "react";

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-sm-4" style={{ color: "#C4DDFF" }}>
              <h4>Hours Of Operation</h4>
              <p style={{ color: "#FEE2C5" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-sm-4" style={{ color: "#FEE2C5" }}>
              <h4 style={{ color: "#C4DDFF" }}>Quick Links </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
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
