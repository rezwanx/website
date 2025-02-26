import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React from "react";

function Contactpage() {
  return (
    <Layout>
      <Breadcrumb pageList="Contact" title="For Any Query" pageName="CONTACT" />
      <div className="contact-page-wrap sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-6">
              <div className="contact-content">
                <span>CONTACT WITH US</span>
                <h2>LET’S WORK TOGETHER?</h2>
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
                      {/* <a href="mailto: info@support.com">info@support.com</a> */}
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
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/xeverdots/">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      {/* <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-pinterest" />
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>Make a Free Consulting</h5>
                </div>
                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>first name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="form-inner">
                          <label>Last name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Company/Organization</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Email</label>
                          <input type="email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Phone</label>
                          <input type="email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Message</label>
                          <textarea defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contactpage;
