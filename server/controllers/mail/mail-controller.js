// const express = require("express");
import transporter from "../../config/mail-config.js";

const sendFAQMail = async (req, res) => {
  
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Email options
    const mailOptions = {
      from: `"FAQ Inquiry" <${process.env.MAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New FAQ Query from ${name}`,
      html: `
        <h2>New FAQ Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Mail send error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};


export {sendFAQMail};