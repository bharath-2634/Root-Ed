const nodemailer = require("nodemailer");

// Submit contact form and send email
const submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields (name, email, subject, message)",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // Check if email is configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || 
        process.env.EMAIL_USER === "your-email@gmail.com" || 
        process.env.EMAIL_PASS === "your-gmail-app-password") {
      
      // For development: Just log and return success without sending email
      console.log("📧 Contact Form Submission (Email not configured):");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone || "Not provided"}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("⚠️  To enable email sending, configure EMAIL_USER and EMAIL_PASS in .env file");
      
      return res.status(200).json({
        success: true,
        message: "Thank you for contacting us! We'll get back to you soon.",
      });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content to send to admin/receiver
    const mailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: process.env.RECEIVER_EMAIL || "admin@rooted.com", // Receiver email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #6EC59B; border-bottom: 2px solid #6EC59B; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #131D2D;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #131D2D;">Email:</strong> <a href="mailto:${email}" style="color: #6EC59B;">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #131D2D;">Phone:</strong> ${phone || "Not provided"}</p>
            <p style="margin: 10px 0;"><strong style="color: #131D2D;">Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong style="color: #131D2D;">Message:</strong></p>
            <p style="margin: 10px 0; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>This email was sent from the Root-Ed contact form on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Auto-reply email to user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: email,
      subject: "Thank you for contacting Root-Ed!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #6EC59B;">Thank You for Reaching Out!</h2>
          
          <p style="line-height: 1.6;">Hi ${name},</p>
          
          <p style="line-height: 1.6;">Thank you for contacting Root-Ed. We have received your message and our team will get back to you as soon as possible.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Your Message Summary:</strong></p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong> ${message}</p>
          </div>
          
          <p style="line-height: 1.6;">If you have any urgent concerns, please feel free to call us directly.</p>
          
          <p style="line-height: 1.6;">Best regards,<br><strong>The Root-Ed Team</strong></p>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    };

    // Send email to admin/receiver
    await transporter.sendMail(mailOptions);
    
    // Send auto-reply to user
    await transporter.sendMail(autoReplyOptions);

    return res.status(200).json({
      success: true,
      message: "Thank you for contacting us! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact email error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
      error: error.message,
    });
  }
};

module.exports = {
  submitContact,
};
