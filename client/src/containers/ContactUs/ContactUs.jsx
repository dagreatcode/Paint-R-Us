import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const ContactUs = () => {
  const [clientName, setName] = useState("");
  const [clientMessage, setMessage] = useState("");
  const [clientEmail, setEmail] = useState("");

  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello from react");

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
  };
  return (
    <>
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
      <div style={{ textAlign: "center" }}>
        {" "}
        <lord-icon
          src="https://cdn.lordicon.com/zzcjjxew.json"
          trigger="hover"
          colors="primary:#001d6e,secondary:#cfe2ff"
          state="hover-spin"
          style={{
            width: "200px",
            height: "200px",
          }}
        ></lord-icon>
      </div>
      <iframe
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
        // frameBorder="0"
        width="90%"
        height="600"
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
      <form>
        <div className="container">
          <div className="row">
            <p>
              Open 7 days a week. Show ups are welcome. Contact us at anytime.
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
          {show ? (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>We Will Get Back To You ASAP!</Alert.Heading>
              Email Sent Successfully. Thank you for choosing Paint-R-Us.
            </Alert>
          ) : (
            <Alert variant="primary" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>
                We Will Work Fast To Contact You! If we do not get in contact
                with you with in 2 days, Please call Us or Come Visit Us.
              </Alert.Heading>
              Please make sure you leave your <strong>Name</strong> &{" "}
              <strong>Number</strong>, your <strong>Email</strong> and{" "}
              <strong>Message:</strong>
              "services needed".
            </Alert>
          )}
          <br />
          <br />
          {/* <div style={{ margin: "20px" }} className="row">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div> */}
        </div>
      </form>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ContactUs;
