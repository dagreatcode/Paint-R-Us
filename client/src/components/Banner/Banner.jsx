import React from "react";
import CarBanner from "./img/banner3.png";
import { Link } from "react-router-dom";
import logoTag from "./img/Component 1.png";
function Banner() {
  return (
    <>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <img
          style={{ textAlign: "center" }}
          src={CarBanner}
          alt="this is a car banner"
        />
        <div
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontStyle: "italic",
            fontSize: "20px",
            textAlign: "center",
            position: "absolute",
            top: "10%",
          }}
        >
          <img src={logoTag} alt="logo" />
        </div>
        <div style={{ textAlign: "center", position: "absolute", top: "50%" }}>
          <a
            href="tel:(1)(4708540470)"
            className="btn btn-dark btn-sm"
            tabindex="-1"
            role="button"
            aria-disabled="true"
          >
            Call
          </a>
          <Link
            to="/ContactUs"
            className="btn btn-dark btn-sm"
            tabindex="-1"
            role="button"
            aria-disabled="true"
          >
            Appointment
          </Link>
        </div>
      </div>
    </>
  );
}

export default Banner;
