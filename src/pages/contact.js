import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { validateForm } from "@/utils/validation";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const clearStatusMessage = () => {
    setSubmitStatus({
      success: false,
      message: "",
    });
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = validateForm(formData);

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({
          name: "",
          organization: "",
          email: "",
          phone: "",
          message: "",
        });
        setFormErrors({});
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>Contact Us</h5>
                </div>
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12 mb-20">
                        <div className="form-inner">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={formErrors.name ? "is-invalid" : ""}
                          />
                          {formErrors.name && (
                            <div className="invalid-feedback">
                              {formErrors.name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label htmlFor="organization">Organization</label>
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={formErrors.email ? "is-invalid" : ""}
                          />
                          {formErrors.email && (
                            <div className="invalid-feedback">
                              {formErrors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label htmlFor="phone">Phone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={formErrors.phone ? "is-invalid" : ""}
                          />
                          {formErrors.phone && (
                            <div className="invalid-feedback">
                              {formErrors.phone}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label htmlFor="message">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={formErrors.message ? "is-invalid" : ""}
                          />
                          {formErrors.message && (
                            <div className="invalid-feedback">
                              {formErrors.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button
                            className="primary-btn3"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>

                  {submitStatus.message && (
                    <div className="mt-4">
                      <div
                        className={`alert ${
                          submitStatus.success
                            ? "alert-success"
                            : "alert-danger"
                        } d-flex justify-content-between align-items-center`}
                        role="alert"
                      >
                        <span>{submitStatus.message}</span>
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={clearStatusMessage}
                        ></button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
