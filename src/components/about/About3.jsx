import { useRouter } from "next/router";
import React from "react";

function About3() {
  const currentRoute = useRouter().pathname;
  return (
    <div
      className={`home3-about-section ${
        currentRoute === "/about" ? "sec-mar" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-9">
            <div
              className="section-title-3 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <h2>Our Approach</h2>
              <p>
                At Everdots, we adopt a strategic and client-centric approach to
                delivering innovative IT solutions tailored to meet the evolving
                needs of modern businesses. Our expertise spans a wide range of
                services, ensuring scalability, efficiency, and reliability for
                organizations of all sizes.
              </p>
            </div>
            <div className="about-left">
              <div
                className="about-img  wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <img
                  className="img-fluid magnetic-item"
                  src="assets/img/home-3/potential.png"
                  alt=""
                />
              </div>
              <div
                className="about-content wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <h2>Unlock the potential of your business.</h2>
                <p>
                  We believe in delivering tailored solutions that are designed
                  to address your unique requirements. We take the time to
                  understand your business and provide personalized services
                  that align with your goals.
                </p>
                <div className="devider" />
                <ul className="about-feature">
                  <li>
                    <h5>Customized Solutions</h5>
                    <p>Expert solutions tailored to your needs.</p>
                  </li>
                  <li>
                    <h5>Quality Reliability</h5>
                    <p>Smooth, efficient business operations.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-right">
              <div
                className="about-img wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <img
                  className="img-fluid magnetic-item"
                  src="assets/img/home-3/approach.png"
                  alt=""
                />
              </div>
              <div
                className="about-exprience d-flex align-items-center justify-content-center wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="exp-text">
                  <img src="assets/img/home-3/rotate-text.png" alt="" />
                </div>
                <div className="years">
                  <h2>
                    02
                    <br />
                    <span>Years</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About3;
