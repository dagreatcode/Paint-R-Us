import React from "react";
import bodyWork from "./Auto-body.png";

function AboutUs() {
  return (
    <>
      <div className="container" style={{ textAlign: "center" }}>
        <h1>About Us</h1>
        <div class="card mb-3">
          <div class="card text-bg-dark">
            <img
              style={{  margin: "auto", width: "75%", border: "3px solid blue", padding: "10px" }}
              src={bodyWork}
              class="card-img"
              alt="..."
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <p className="container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          Our Paint-R-Us Certified Centers are the "best of the best." These
          Centers are distinguished for their quality of work in both auto
          painting and body repairs. Certified Centers have to pass a rigorous
          certification process annually that is a comprehensive review of their
          business and repair services.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          Our Paint-R-Us Certified Centers are the "best of the best." These
          Centers are distinguished for their quality of work in both auto
          painting and body repairs. Certified Centers have to pass a rigorous
          certification process annually that is a comprehensive review of their
          business and repair services.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          Our Paint-R-Us Certified Centers are the "best of the best." These
          Centers are distinguished for their quality of work in both auto
          painting and body repairs. Certified Centers have to pass a rigorous
          certification process annually that is a comprehensive review of their
          business and repair services.
        </p>
      </div>
    </>
  );
}

export default AboutUs;
