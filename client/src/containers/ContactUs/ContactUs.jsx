import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="row" style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="John Doe"
              />
            </div>
          </div>
        </div>
        <div className="row" style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="name@example.com"
              />
            </div>
          </div>
        </div>
        <div className="row" style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
          <div className="col-sm-8">
            {" "}
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea3"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea3"
                rows="3"
                placeholder="What would you like done?"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
