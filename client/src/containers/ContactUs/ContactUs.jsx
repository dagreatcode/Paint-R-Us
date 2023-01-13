import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container">
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
