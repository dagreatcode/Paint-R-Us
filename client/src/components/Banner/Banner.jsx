import React from "react";
import CarBanner from "./img/banner.png";

function Banner() {
  return (
    <>
      <div style={{ position: "relative" }} className="container">
        <div className="row">
          <img
            style={{ textAlign: "center" }}
            src={CarBanner}
            alt="this is car banner"
          />
          <div style={{ fontFamily: "Cursive",   fontStyle: "italic", fontSize: "40px"
,textAlign: "center", position: "absolute", top: "15%" }}>PAINT R US</div>
          <div style={{ textAlign: "center", position: "absolute", top: "60%" }}>
            <a
              href="tel:(1)(4708540470)"
              className="btn btn-dark"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Contact
            </a>
            <a
              href="/"
              className="btn btn-dark"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Appointment
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
