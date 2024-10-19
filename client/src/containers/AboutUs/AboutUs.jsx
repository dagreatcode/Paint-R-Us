import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import bodyWork from "./Auto-body.png";
import styles from "./AboutUs.module.css"; // Importing the CSS module

function AboutUs() {
  return (
    <div className={`container ${styles.aboutContainer}`}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.iconContainer}>
        <lord-icon
          src="https://cdn.lordicon.com/waumjsnp.json"
          trigger="hover"
          colors="primary:#001d6e,secondary:#cfe2ff"
          style={{ width: "200px", height: "200px" }}
        ></lord-icon>
      </div>

      <div className={`row ${styles.description}`}>
        <p>
          Chipped paint or sun damage can spoil your car’s look and resale
          value, but our auto body and car paint repair can restore that new car
          finish. Our expert technicians use state-of-the-art equipment and will
          repair your vehicle’s paint damage and get you back on your way with a
          like-new finish. Our limited lifetime warranty gives you peace of mind
          that it was done right the first time.
          <br />
          Our Paint-R-Us Certified Centers are the "best of the best." These
          Centers are distinguished for their quality of work in both auto
          painting and body repairs. Certified Centers have to pass a rigorous
          certification process annually that is a comprehensive review of their
          business and repair services.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <img src={bodyWork} className={styles.bodyImage} alt="Auto Body Work" />
      </div>

      <div className={`row ${styles.serviceDetails}`}>
        <div className="col-md-6">
          <p>
            Restoring the Rhythm of Your Life® means helping you every step of
            the way to get you back on the road safely. Our work and our limited
            lifetime warranty give you peace of mind when you get behind the
            wheel of your vehicle. We will communicate with you throughout the
            repair process, so you know exactly what is happening with your
            vehicle.
            <br />
            We've focused on providing the best services with the highest
            standards in mind. We restore cars to pre-collision condition and we
            back every single repair with a written limited lifetime warranty.
          </p>
        </div>
        <div className="col-md-6">
          <p>
            We're driven to change the image of the automotive service
            experience and committed to Restoring the Rhythm of Your Life®. It’s
            the purpose behind each thing we do and in the hearts of every
            teammate. We are here to provide exceptional service, removing the
            hassle and stress of car care. That means you can rest easy knowing
            your car is in the hands of our skilled technicians whose training
            goes above and beyond industry standards. Caliber will not only get
            you safely back on the road but back to what matters most.
            <br />
            Our expert mechanics put in the hours, so you don’t have to. We
            provide our teammates annually with continuous industry-leading
            training, state-of-the-art equipment, and multiple auto industry
            certifications.
          </p>
        </div>
      </div>

      {/* New Section: Customer Testimonials */}
      <div className={styles.testimonialContainer}>
        <h2 className={styles.testimonialTitle}>What Our Customers Say</h2>
        <div className={styles.testimonial}>
          <p>"Absolutely fantastic service! My car looks brand new!"</p>
          <p>- Jane D.</p>
        </div>
        <div className={styles.testimonial}>
          <p>"Professional and friendly staff. Highly recommend!"</p>
          <p>- Mark S.</p>
        </div>
        <div className={styles.testimonial}>
          <p>"Quick and reliable service. Will definitely return!"</p>
          <p>- Emily R.</p>
        </div>
      </div>

      {/* New Section: Call to Action */}
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
        <p>Contact us today to schedule your auto body repair service and experience our exceptional service firsthand!</p>
        <Link to="/ContactUs">
          <button className={`btn btn-primary ${styles.ctaButton}`}>Get a Free Quote</button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
