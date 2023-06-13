import React from "react";
import Banner from "../../components/Banner/Banner";
import BodyW from "./img/body-work-600.png";
import PaintR from "./img/paint-room-600w.png";
import Painter from "./img/painter-600w.png";
// import SprayG from "./img/spray-gun-600w.png";
import Polishing from "./img/polishing-machine-600w.png";
import ServiceMan from "./img/serviceman-600w.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="row">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              margin: "100px 20p",
            }}
          >
            <div
              className="card mb-3"
              style={{
                top: "50px",
                backgroundColor: "#C4DDFF",
                maxWidth: "840px",
                borderStyle: "outset",
                padding: "10px",
                boxShadow: " 5px 10px #FEE2C5",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={ServiceMan}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body" style={{}}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
        <div
          className="row"
          style={
            {
              // padding: "50px",
              // display: "flex",
              // justifyContent: "center",
              // textAlign: "center",
            }
          }
        >
          <Container>
            <Row>
              <Col
                style={{
                  // backgroundColor: "#001d6e",
                  textShadow: "2px 2px 4px #000000",
                  padding: "30px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <h1 style={{ color: "#FEE2C5" }}>Our Promise</h1>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Row>
                  <lord-icon
                    src="https://cdn.lordicon.com/iltqorsz.json"
                    trigger="hover"
                    colors="primary:#001d6e,secondary:#cfe2ff"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "150px",
                      height: "150px",
                      // display: "flex",
                      // justifyContent: "center",
                      textAlign: "center",
                    }}
                  ></lord-icon>
                </Row>
                <Row>
                  <h1
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Bulls Eye
                  </h1>
                </Row>
                <Row>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Get Your Money's Worth
                  </p>
                </Row>
              </Col>
              <Col sm={4}>
                <Row>
                  <lord-icon
                    src="https://cdn.lordicon.com/sbiheqdr.json"
                    trigger="hover"
                    colors="primary:#001d6e,secondary:#cfe2ff"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "150px",
                      height: "150px",
                      // display: "flex",
                      // justifyContent: "center",
                      textAlign: "center",
                    }}
                  ></lord-icon>
                </Row>
                <Row>
                  <h1
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Mechanic
                  </h1>
                </Row>
                <Row>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Great Work
                  </p>
                </Row>
              </Col>
              <Col sm={4}>
                <Row>
                  <lord-icon
                    src="https://cdn.lordicon.com/zpxybbhl.json"
                    trigger="hover"
                    colors="primary:#001d6e,secondary:#cfe2ff"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "140px",
                      height: "150px",
                      // display: "flex",
                      // justifyContent: "center",
                      textAlign: "center",
                    }}
                  ></lord-icon>
                </Row>
                <Row>
                  <h1
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Consultation
                  </h1>
                </Row>
                <Row>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Free Estimate
                  </p>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="row">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div
                className="card"
                style={{
                  backgroundColor: "#C4DDFF",
                  maxWidth: "840px",
                  borderStyle: "outset",
                  padding: "10px",
                  boxShadow: " 5px 10px #FEE2C5",
                  margin: "20px",
                }}
              >
                <img src={BodyW} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{
                  backgroundColor: "#C4DDFF",
                  maxWidth: "840px",
                  borderStyle: "outset",
                  padding: "10px",
                  boxShadow: " 5px 10px #FEE2C5",
                  margin: "20px",
                }}
              >
                <img src={PaintR} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{
                  backgroundColor: "#C4DDFF",
                  maxWidth: "840px",
                  borderStyle: "outset",
                  padding: "10px",
                  boxShadow: " 5px 10px #FEE2C5",
                  margin: "20px",
                }}
              >
                <img src={Painter} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{
                  backgroundColor: "#C4DDFF",
                  maxWidth: "840px",
                  borderStyle: "outset",
                  padding: "10px",
                  boxShadow: " 5px 10px #FEE2C5",
                  margin: "20px",
                }}
              >
                <img src={Polishing} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <iframe
        title="maps"
        width="450"
        height="250"
        frameborder="0"
        style={{ border: 0 }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDRtTXAuQaLIOTSrmPjGhFInKWwLvg_AnI
    &q=Space+Needle,Seattle+WA"
        allowfullscreen
      /> */}
    </>
  );
};

export default Home;
