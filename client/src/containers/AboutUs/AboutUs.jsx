import React from "react";
import bodyWork from "./Auto-body.png";

function AboutUs() {
  return (
    <>
      <div className="container">
        <h1 style={{ padding: "50px", textAlign: "center" }}>About Us</h1>
        <div style={{ textAlign: "center" }}>
          <lord-icon
            src="https://cdn.lordicon.com/waumjsnp.json"
            trigger="hover"
            colors="primary:#001d6e,secondary:#cfe2ff"
            style={{ width: "200px", height: "200px" }}
          ></lord-icon>
        </div>
        <div className="row">
          <p>
            Chipped paint or sun damage can spoil your car’s look and resale
            value, but our auto body and car paint repair can restore that new
            car finish. Our expert technicians use state-of-the art equipment
            and will repair your vehicle’s paint damage and get you back on your
            way with a like-new finish. Our limited lifetime warranty gives you
            peace of mind that it was done right the first time.
            <br />
            Our Paint-R-Us Certified Centers are the "best of the best." These
            Centers are distinguished for their quality of work in both auto
            painting and body repairs. Certified Centers have to pass a rigorous
            certification process annually that is a comprehensive review of
            their business and repair services.
            <br />
          </p>
        </div>

        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <img
            style={{
              // margin: "auto",
              border: "10px solid #001d6e",
              // width: "50%",
              // height: "70%",
              padding: "10px",
            }}
            src={bodyWork}
            className="card-img"
            alt="..."
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <p>
              Restoring the Rhythm of Your Life® means helping you every step of
              the way to get you back on the road safely. Our work and our
              limited lifetime warranty give you peace of mind when you get
              behind the wheel of your vehicle. We will communicate with you
              throughout the repair process, so you know exactly what is
              happening with your vehicle.
              <br />
              We've focused on providing the best services with the highest
              standards in mind. We restore cars to pre-collision condition and
              we back every single repair with a written limited lifetime
              warranty.
              {/* <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. */}
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-stretch">
            <p>
              We're driven to change the image of the automotive service
              experience and committed to Restoring the Rhythm of Your Life®.
              It’s the purpose behind each thing we do and in the hearts of
              every teammate. We are here to provide exceptional service,
              removing the hassle and stress of car care. That means you can
              rest easy knowing your car is in the hands of our skilled
              technicians whose training goes above and beyond industry
              standards. Caliber will not only get you safely back on the road
              but back to what matters most.
              <br />
              Our expert mechanics put in the hours, so you don’t have to. We
              provide our teammates annually with, continuous industry-leading
              training, state-of-the-art equipment and multiple auto industry
              certifications.
              {/* <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. */}
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default AboutUs;
