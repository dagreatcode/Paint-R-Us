import React, { useState } from "react";
import Input from "./Input";
import Button from "react-bootstrap/Button";

const ContactUs = () => {
  const [clientName, setName] = useState("");
  const [clientMessage, setMessage] = useState("");
  const [clientEmail, setEmail] = useState("");

  const dotenv = require("dotenv");
  dotenv.config();

  // https://www.npmjs.com/package/send-email
  const sendEmail = require("send-email");

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      to: "dagreatcode@gmail.com",
      subject: `${clientName}`,
      text: "hello world!",
      html: `${clientMessage}`,
      from: `${clientEmail}`,
    };
    sendEmail(payload).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <Input
                type="text"
                placeholder="John Doe"
                name="clientName"
                value={clientName}
                handleInputChange={(e) => {
                  setName({ clientName: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
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
                name="email"
                value={clientEmail}
                handleInputChange={(e) => {
                  setEmail({ clientEmail: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
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
                type="text"
                className="form-control"
                id="exampleFormControlTextarea3"
                rows="3"
                placeholder="What would you like done?"
                name="clientMessage"
                value={clientMessage}
                handleInputChange={(e) => {
                  setMessage({ clientMessage: e.target.value });
                }}
              ></textarea>
            </div>
          </div>
        </div>
        <Button onClick={handleSubmit}>go</Button>
      </div>
    </>
  );
};

export default ContactUs;
