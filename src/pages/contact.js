import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React from "react";

import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  loading: () => <p>Loading Form...</p>,
});

function ContactPage() {
  return (
    <Layout>
      <Breadcrumb pageList="Contact" title="For Any Query" pageName="CONTACT" />
      <div className="contact-page-wrap sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-6">
              <div className="contact-content">
                <span>CONTACT WITH US</span>
                <h2>LET'S WORK TOGETHER?</h2>
                <p>
                  Our dedicated support team is available to assist you via live
                  chat, email, and other channels. We guarantee a response to
                  any issue within 24 hours and strive to provide world-class
                  support to ensure your complete satisfaction.
                </p>
                <div className="informations">
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <p>9th Floor, House: 5 Road: 11, Block G Banani</p>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="info">
                      <a href="tel:05661111985">+880 566 1111 985</a>
                      <a href="tel:06571111576">+880 657 1111 576</a>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <a href="mailto: info@everdots.com">info@everdots.com</a>
                    </div>
                  </div>
                </div>
                <div className="follow-area">
                  <h5 className="blog-widget-title">Follow Us</h5>
                  <p className="para">Follow us on Social Network</p>
                  <div className="blog-widget-body">
                    <ul className="follow-list d-flex flex-row align-items-start gap-4">
                      <li>
                        <a href="https://www.facebook.com/everdots">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/xeverdots">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            className="bi bi-twitter-x"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/xeverdots/">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ContactPage;
