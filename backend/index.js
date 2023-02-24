const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require('dotenv').config()
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Email API endpoint
app.post("/api/email", (req, res) => {
  const { username, useremail, message } = req.body;

  // Nodemailer transport configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email message configuration
  const mailOptions = {
    from: `"${username}" <${useremail}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `New Contact from ${useremail}`,
    text: message,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));