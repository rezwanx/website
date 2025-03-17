import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, organization, email, phone, message } = req.body;

    if (!name || !email || !message || !phone) {
      return res
        .status(400)
        .json({ message: "Name, email, phone and message are required" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Everdots Contact Form" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #374151;
              background-color: #f9fafb;
              margin: 0;
              padding: 0;
            }
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            .email-header {
              background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
              padding: 30px;
              text-align: center;
            }
            .logo {
              width: 120px;
              height: auto;
            }
            .header-title {
              color: white;
              font-size: 22px;
              font-weight: 600;
              margin: 15px 0 0;
            }
            .email-body {
              padding: 30px;
            }
            .intro {
              margin-bottom: 25px;
              font-size: 16px;
            }
            .data-container {
              background-color: #f3f4f6;
              border-radius: 8px;
              padding: 20px;
              margin-bottom: 25px;
            }
            .data-row {
              display: flex;
              margin-bottom: 12px;
              border-bottom: 1px solid #e5e7eb;
              padding-bottom: 12px;
            }
            .data-row:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .data-label {
              flex: 0 0 120px;
              font-weight: 600;
              color: #4b5563;
            }
            .data-value {
              flex: 1;
              color: #111827;
            }
            .message-container {
              background-color: #f3f4f6;
              border-radius: 8px;
              padding: 20px;
            }
            .message-label {
              font-weight: 600;
              color: #4b5563;
              margin-bottom: 10px;
            }
            .message-content {
              white-space: pre-line;
              color: #111827;
            }
            .email-footer {
              background-color: #f9fafb;
              padding: 20px;
              text-align: center;
              font-size: 14px;
              color: #6b7280;
              border-top: 1px solid #e5e7eb;
            }
            .cta-button {
              display: inline-block;
              background-color: #2563eb;
              color: #ffffff !important;
              text-decoration: none;
              font-weight: 500;
              padding: 10px 20px;
              border-radius: 6px;
              margin: 20px 0;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <img src="https://i.ibb.co.com/fYN3p10C/logo.png" alt="EverDots Logo" class="logo">
              <h1 class="header-title">New Contact Form Submission</h1>
            </div>
            
            <div class="email-body">
              <p class="intro">You've received a new contact form submission from your website.</p>
              
              <div class="data-container">
                <div class="data-row">
                  <div class="data-label">Name:&nbsp;</div>
                  <div class="data-value">${name}</div>
                </div>
                <div class="data-row">
                  <div class="data-label">Organization:&nbsp;</div>
                  <div class="data-value">${
                    organization || "Not provided"
                  }</div>
                </div>
                <div class="data-row">
                  <div class="data-label">Email:&nbsp;</div>
                  <div class="data-value">${email}</div>
                </div>
                <div class="data-row">
                  <div class="data-label">Phone:&nbsp;</div>
                  <div class="data-value">${phone}</div>
                </div>
              </div>
              
              <div class="message-container">
                <div class="message-label">Message: </div>
                <div class="message-content">${message}</div>
              </div>
              
              <a href="mailto:${email}" class="cta-button">Reply to ${name}</a>
            </div>
            
            <div class="email-footer">
              <p>This email was sent from your contact form at everdots.com</p>
              <p>&copy; ${new Date().getFullYear()} EverDots. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message:
        "Your message has been sent successfully. We will contact you soon!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      message: "Failed to send message. Please try again later.",
      error: error.message,
    });
  }
}
