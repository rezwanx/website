import React, { useState } from "react";
import { validateForm } from "@/utils/validation";

function ContactForm() {
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
                  <div className="invalid-feedback">{formErrors.name}</div>
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
                  <div className="invalid-feedback">{formErrors.email}</div>
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
                  <div className="invalid-feedback">{formErrors.phone}</div>
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
                  <div className="invalid-feedback">{formErrors.message}</div>
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
                submitStatus.success ? "alert-success" : "alert-danger"
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
  );
}

export default ContactForm;
