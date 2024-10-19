import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import styles from "./ContactUs.module.css"; // Importing the CSS module

const ContactUs = () => {
  const [clientName, setName] = useState("");
  const [clientMessage, setMessage] = useState("");
  const [clientEmail, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    });
    
    if (res.status === 200) {
      setShow(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.iconContainer}>
        <lord-icon
          src="https://cdn.lordicon.com/zzcjjxew.json"
          trigger="hover"
          colors="primary:#001d6e,secondary:#cfe2ff"
          state="hover-spin"
          style={{ width: "200px", height: "200px" }}
        ></lord-icon>
      </div>
      <iframe
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
        width="90%"
        height="600"
        className={styles.mapFrame}
      />

      <form className={styles.contactForm}>
        <div className="container">
          <div className="row">
            <p>Open 7 days a week. Show ups are welcome. Contact us at anytime.</p>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <label className="form-label">Name & Number</label>
              <Input
                type="text"
                className="form-control"
                placeholder="John Doe - 1(444)-444-4444"
                name="clientName"
                value={clientName}
                handleInputChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <label className="form-label">Email address</label>
              <Input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                name="clientEmail"
                value={clientEmail}
                handleInputChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <label className="form-label">Message</label>
              <TextArea
                className="form-control"
                rows="3"
                placeholder="What would you like done?"
                name="clientMessage"
                value={clientMessage}
                handleInputChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <Button type="submit" onClick={handleSubmit} className={styles.submitButton}>
            Send Request
          </Button>

          {show ? (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>We Will Get Back To You ASAP!</Alert.Heading>
              Email Sent Successfully. Thank you for choosing Paint-R-Us.
            </Alert>
          ) : (
            <Alert variant="primary" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>We Will Work Fast To Contact You!</Alert.Heading>
              Please ensure you leave your <strong>Name</strong>, <strong>Number</strong>, <strong>Email</strong>, and <strong>Message</strong>: "services needed".
            </Alert>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactUs;
