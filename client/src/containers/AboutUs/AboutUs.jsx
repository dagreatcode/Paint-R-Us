import React from "react";
import bodyWork from "./Auto-body.png";

function AboutUs() {
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>About Us</h1>
        <div className="row">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            Our Paint-R-Us Certified Centers are the "best of the best." These
            Centers are distinguished for their quality of work in both auto
            painting and body repairs. Certified Centers have to pass a rigorous
            certification process annually that is a comprehensive review of
            their business and repair services.
            <br />
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            style={{
              margin: "auto",
              border: "10px solid #001d6e",
              width: "50%",
              height: "70%",
              padding: "10px"
            }}
            src={bodyWork}
            className="card-img"
            alt="..."
          />
        </div>
        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              Our Paint-R-Us Certified Centers are the "best of the best." These
              Centers are distinguished for their quality of work in both auto
              painting and body repairs. Certified Centers have to pass a
              rigorous certification process annually that is a comprehensive
              review of their business and repair services.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              Our Paint-R-Us Certified Centers are the "best of the best." These
              Centers are distinguished for their quality of work in both auto
              painting and body repairs. Certified Centers have to pass a
              rigorous certification process annually that is a comprehensive
              review of their business and repair services.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
