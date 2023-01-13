import React from "react";
import CarBanner from "./img/banner.png";

function Banner() {
  return (
    <>
      <div className="container">
        <div className="row">
          <img
            style={{ textAlign: "center" }}
            src={CarBanner}
            alt="this is car banner"
          />
          <div style={{ textAlign: "center" }}>
            <a
              href="tel:(1)(4043371206)"
              className="btn btn-primary"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Contact
            </a>
            <a
              href="/"
              className="btn btn-primary"
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
