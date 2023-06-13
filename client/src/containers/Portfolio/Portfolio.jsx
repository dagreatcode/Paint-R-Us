import React from "react";
import Before from "./Img/Before.jpg";
import Process from "./Img/Process.jpg";
import After from "./Img/After.jpg";
import After2 from "./Img/After2.jpg";
import After3 from "./Img/After3.jpg";

function Portfolio() {
  return (
    <>
      <h1
        style={{
          padding: "50px",
          textAlign: "center",
          justifyContent: "center",
          margin: "100px 20p",
        }}
      >
        Portfolio
      </h1>
      <div style={{textAlign: "center"}}>
        {" "}
        <lord-icon
          src="https://cdn.lordicon.com/vixtkkbk.json"
          trigger="hover"
          colors="primary:#001d6e,secondary:#cfe2ff"
          style={{ width: "200px", height: "200px" }}
        ></lord-icon>
      </div>

      <div className="container" style={{ textAlign: "center" }}>
        <div className="row">
          <div className="col-sm-6">
            <h5>Before</h5>
            <img
              src={Before}
              alt="Bootstrap"
              width="350"

              // style={{ width: "30", height: "24" }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-sm-6">
            <h5>Process</h5>
            <img
              src={Process}
              alt="Bootstrap"
              width="350"

              // style={{ width: "30", height: "24" }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h5>After</h5>
            <img
              src={After}
              alt="Bootstrap"
              width="300"
              // style={{ width: "30", height: "24" }}
            />
            <img
              src={After2}
              alt="Bootstrap"
              width="300"
              // height= "auto"
              // style={{ width: "30", height: "24" }}
            />
            <img
              src={After3}
              alt="Bootstrap"
              width="300"
              // style={{ width: "30", height: "24" }}
            />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h3>Our proccess</h3>
        <br />
        <br />
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

export default Portfolio;
