import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import BodyW from "./img/body-work-600.png";
import PaintR from "./img/paint-room-600w.png";
import Painter from "./img/painter-600w.png";
import Polishing from "./img/polishing-machine-600w.png";
import ServiceMan from "./img/serviceman-600w.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Home.module.css"; // Import CSS module for animations
import Spray from "./img/sosa1.png";

const services = [
  {
    title: "Auto Body Shop",
    description: "We restore your vehicle's safety features, including airbags and crumple zones.",
    image: ServiceMan,
  },
  {
    title: "Collision Repair",
    description: "Collision repair, bumper repair, and paintless dent repair.",
    image: BodyW,
  },
  {
    title: "Priming",
    description: "Affordable paint packages to make your car look new again.",
    image: PaintR,
  },
  {
    title: "Laying the Paint",
    description: "First-class technicians to lay down an even coat.",
    image: Painter,
  },
  {
    title: "2 Coats",
    description: "Glossy clear coat for a factory-fresh finish.",
    image: Polishing,
  },
];

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentService, setCurrentService] = useState(services[0]);

  return (
    <>
      <Banner />
      <div className="container">
        {/* Current Service Card */}
        <div className="row" style={{ justifyContent: "center", textAlign: "center", margin: "50px 0" }}>
          <div className="card mb-3" style={cardStyle}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={ServiceMan} className="img-fluid rounded-start" alt="Auto Body Shop" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Auto Body Shop</h5>
                  <p className="card-text">We restore your vehicle's safety features, including airbags and crumple zones.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Promise Section */}
        <Container>
          <Row>
            <Col style={{ textShadow: "2px 2px 4px #000000", padding: "30px", textAlign: "center" }}>
              <h1 style={{ color: "#FEE2C5" }}>Our Promise</h1>
            </Col>
          </Row>
          {/* <Row>
            {services.map((service, index) => (
              <Col sm={4} key={index}>
                <div 
                  className="text-center" 
                  onClick={() => setCurrentService(service)} 
                  style={{ cursor: "pointer", transition: "transform 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <lord-icon
                    src={`https://cdn.lordicon.com/icon-${index}.json`}
                    trigger="hover"
                    colors="primary:#001d6e,secondary:#cfe2ff"
                    style={{ margin: "auto", width: "150px", height: "150px" }}
                  />
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </Col>
            ))}
          </Row> */}
        </Container>

        {/* Service Cards Section */}
        <Row className="row-cols-1 row-cols-md-2 g-4" style={{ marginTop: "40px" }}>
          {services.slice(1).map((service, index) => (
            <Col key={index}>
              <div className="card" style={cardStyle}>
                <img src={service.image} className="card-img-top" alt={service.title} />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                  <button onClick={() => setCurrentService(service)} className="btn btn-primary">Select</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Car Animation */}
        <div className={styles.carAnimation} style={{ marginTop: "50px", textAlign: "center" }}>
          <img src={Spray} alt="Car Animation" />
        </div>
      </div>
    </>
  );
};

const cardStyle = {
  backgroundColor: "#C4DDFF",
  maxWidth: "840px",
  borderStyle: "outset",
  padding: "10px",
  boxShadow: "5px 10px #FEE2C5",
  margin: "20px auto",
};

export default Home;
