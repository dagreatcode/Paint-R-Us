import React from "react";
import Before from "./Img/Before.jpg";
import Process from "./Img/Process.jpg";
import After from "./Img/After.jpg";
import After2 from "./Img/After2.jpg";
import After3 from "./Img/After3.jpg";

function Portfolio() {
  return (
    <>
      <h1 style={{padding: "50px", textAlign: "center", justifyContent: "center", margin: "100px 20p"}}>Portfolio</h1>

      <div className="container" style={{ textAlign: "center" }}>
        <div className="row">
          <div className="col-sm-6">
            <h5>Before</h5>
            <img
              src={Before}
              alt="Bootstrap"
              style={{ width: "30", height: "24" }}
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
              style={{ width: "30", height: "24" }}
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
              style={{ width: "30", height: "24" }}
            />
            <img
              src={After2}
              alt="Bootstrap"
              style={{ width: "30", height: "24" }}
            />
            <img
              src={After3}
              alt="Bootstrap"
              style={{ width: "30", height: "24" }}
            />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
