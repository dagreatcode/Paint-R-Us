import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const ContactUs = () => {
  //   const Notify = require('app-notify');
  // const cfg = {...};
  // const notify = new Notify(cfg);

  const [clientName, setName] = useState("");
  const [clientMessage, setMessage] = useState("");
  const [clientEmail, setEmail] = useState("");

  const [show, setShow] = useState(false);

  // const sendEmail = require("send-email");
  // console.log(sendEmail)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const cfg = {};
    console.log("Hello from react");

    //  try{
    // console.log("hello");
    //  }catch(error){
    //   console.log(error)
    //  }
    const res = await axios("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        clientName,
        clientMessage,
        clientEmail,
      },
      body: { clientName, clientMessage, clientEmail },
    });
    console.log("res:", res);
    setShow(true);
    // const data = await res.json();

    // if (data.status === 401 || !data) {
    //   console.log("error");
    // } else {
    //   console.log("Email Sent");
    //   setShow(true);
    //   setEmail("");
    // }
    // axios.get(`/api/mail/${clientName},${clientMessage},${clientEmail}`, {
    //   method: "GET",
    // });

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
      {show ? (
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>We Will Get Back To You ASAP!</Alert.Heading>
          Email Sent Successfully. Thank you for choosing Paint-R-Us.
        </Alert>
      ) : (
        <Alert variant="dander" onClose={() => setShow(false)} dismissible>
          <Alert.Heading> We Will Work Fast To Contact You!</Alert.Heading>
          Please make sure you leave your Name & Number, your Email and Message:
          "services needed".
        </Alert>
      )}
      <h1
        style={{
          padding: "30px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Contact Us
      </h1>
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
          <br />
          <br />
          <br />
          <br />
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
                  Name & Number
                </label>
                <Input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John Doe - 1(444)-444-4444"
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
                  type="text"
                  className="form-control"
                  id="exampleFormControlTextarea3"
                  rows="3"
                  placeholder="What would you like done?"
                  name="clientMessage"
                  value={clientMessage}
                  handleInputChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            onClick={handleSubmit}
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Send Request
          </Button>
          <br />
          <br />
          <br />
          <br />
          <div style={{ margin: "20px" }} className="row">
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
        </div>
      </form>
      <iframe
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
        // frameBorder="0"
        width="500"
        height="450"
        style={{
          padding: "0",
          border: "0",
          margin: "auto",
          allowFullScreen: "",
          ariaHidden: "false",
          tabIndex: "0",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ContactUs;
