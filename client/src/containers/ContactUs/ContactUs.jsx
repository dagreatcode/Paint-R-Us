import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

import Button from "react-bootstrap/Button";

const ContactUs = () => {
  //   const Notify = require('app-notify');
  // const cfg = {...};
  // const notify = new Notify(cfg);

  const [clientName, setName] = useState("");
  const [clientMessage, setMessage] = useState("");
  const [clientEmail, setEmail] = useState("");
  // const sendEmail = require("send-email");
  // console.log(sendEmail)
  const handleSubmit = (e) => {
    e.preventDefault();
    // const cfg = {};

    // //setup smtp server
    // cfg.smtp = {
    //     host: xxx,
    //     user: user,
    //     pass: pass,
    //     port: port
    // };

    // //setup email headers
    // cfg.email = {
    //     to: 'user@example.com',
    //     from: 'sender@example.com'
    // };

    // const Notify = require('app-notify');
    // const notify = new Notify(cfg);

    // //sends both
    // notify.send({
    //     subject: 'This is a test',
    //     message: 'Hello world'
    // });

    // //disable email
    // notify.cfg.email.disabled = true;

    // //sends only sms
    // notify.send({
    //     message: 'Hello world',
    // });
    // const sgMail = require("@sendgrid/mail");
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // const msg = {
    //   to: "dagreatcode@gmail.com.com", // Change to your recipient
    //   from: "dagreatcode@gmail.com", // Change to your verified sender
    //   subject: "Sending with SendGrid is Fun",
    //   text: "and easy to do anywhere, even with Node.js",
    //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    // };
    // sgMail
    //   .send(msg)
    //   .then(() => {
    //     console.log("Email sent");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <>
      <form>
        <div className="container">
          <div className="row">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Name
                </label>
                <Input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John Doe"
                  name="clientName"
                  value={clientName}
                  handleInputChange={(e) => {
                    setName(e.target.value);
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
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Email address
                </label>
                <Input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="name@example.com"
                  name="clientEmail"
                  value={clientEmail}
                  handleInputChange={(e) => {
                    setEmail(e.target.value);
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
                <TextArea
                  className="form-control"
                  id="exampleFormControlTextarea3"
                  rows="3"
                  placeholder="What would you like done?"
                  value={clientMessage}
                  handleInputChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <Button onClick={handleSubmit} style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}>go</Button>
        </div>
      </form>
    </>
  );
};

export default ContactUs;
