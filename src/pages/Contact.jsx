import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">📞 Contact & Company Information</h1>

      <p className="contact-paragraph">
        Welcome to <strong>E-Mart Sales</strong>! 🛒  
        We are a leading e-commerce company providing a wide range of products including mobiles, laptops, headphones, and more.  
        Our mission is to deliver high-quality products with excellent customer service. We are located at <strong>123 Market Street, Chennai, Tamil Nadu, India</strong> 📍 and our working hours are <strong>Monday to Friday, 9:00 AM to 6:00 PM</strong> ⏰.
      </p>

      <p className="contact-paragraph">
        For any inquiries, you can reach us via phone at <strong>+91 98765 43210</strong> 📱 or email us at <strong>contact@emartsales.com</strong> 📧.  
        Visit our website for more details: <strong>www.emartsales.com</strong> 🌐.  
        We pride ourselves on providing fast, secure, and reliable service to our customers across India.
      </p>

      <p className="contact-paragraph">
        Stay connected with us through our social media channels for the latest offers and updates:  
      </p>

      <div className="social-icons">
        <a href="#" title="Facebook"><img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook"/></a>
        <a href="#" title="Twitter"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter"/></a>
        <a href="#" title="Instagram"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="Instagram"/></a>
        <a href="#" title="LinkedIn"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"/></a>
      </div>

      <p className="contact-paragraph">
        We welcome your feedback and suggestions. Our goal is to continually improve our services and ensure the best shopping experience for all our customers. Thank you for choosing <strong>E-Mart Sales</strong>! 💚
      </p>
    </div>
  );
}
