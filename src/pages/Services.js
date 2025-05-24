import React from 'react';
import "../styles/home.css";

const Services = () => {
  return (
    <div className="services-page">
      {/* Our Services Section */}
      <section className="our-service">
        <h2>Our service</h2>
        <div className="service-top">
          <p className="service-description">
            We provide excellent service, delicious food, and a welcoming
            atmosphere. Our friendly staff ensures a great dining experience
            every time. Your satisfaction is our priority!
          </p>
          <div className="service-top-images">
            <div className="service-item">
              <img src="/images/our_service_image_1.jpg" alt="Customer Care" />
              <span>Customer Care</span>
            </div>
            <div className="service-item">
              <img src="/images/our_service_image_2.jpg" alt="Offers" />
              <span>Offers</span>
            </div>
          </div>
        </div>

        <div className="service-bottom">
          <div className="service-item">
            <img src="/images/our_service_image_3.jpg" alt="Catering" />
            <span>Catering</span>
          </div>
          <div className="service-item">
            <img src="/images/our_service_image_4.jpg" alt="Delivery" />
            <span>Delivery</span>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <div id="contact-us">
        <section className="contact-section">
          {/* Newsletter */}
          <div className="newsletter-bar">
            <p className="newsletter-text">
              Newsletter
              <br />
              <span>
                Be the first one to know about discounts, offers and events
              </span>
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Contact Info and Map */}
          <div className="contact-info-container">
            <div className="contact-info">
              <h3>
                <strong>Have any questions?</strong>
              </h3>
              <p>Contact us we will Answer your question</p>

              {/* Contact Row: Tel, Mail, Address */}
              <div className="contact-row">
                <div className="contact-block">
                  <p className="label">Tel</p>
                  <p className="value">310-437-2766</p>
                </div>
                <div className="contact-block">
                  <p className="label">Mail</p>
                  <p className="value">IndiaCafe456@gmail.com</p>
                </div>
                <div className="contact-block">
                  <p className="label">Address</p>
                  <p className="values">815 Wayne Ave, Chambersburg, PA 17201</p>
                </div>
              </div>

              {/* Footer Navigation Tabs */}
              <div className="footer-nav">
                <span>Home</span>
                <span>Menu</span>
                <span>Reservation</span>
                <span>Our Service</span>
                <span>Contact Us</span>
              </div>

              {/* Footer Links */}
              <div className="footer-links">
                <div>
                  <h4>Home</h4>
                  <p>Where Flavor Meets Tradition</p>
                  <p>Explore Our Menu</p>
                  <p>Order Online</p>
                  <p>Book A Table</p>
                  <p>Follow Us On Social Media</p>
                  <p>Customer Review</p>
                </div>
                <div>
                  <h4>Menu</h4>
                  <p>India Cafe veg Special</p>
                  <p>India Cafe Non veg Special</p>
                  <p>Traditional Desserts</p>
                  <p>Drinks</p>
                </div>
                <div>
                  <h4>Our Services</h4>
                  <p>Customer service</p>
                  <p>Offers</p>
                  <p>Catering</p>
                  <p>Delivery</p>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div className="map-placeholder">
              <img src="/images/map_pic.png" alt="Map" />
            </div>
          </div>

          {/* Footer Bottom */}
          <footer className="footer-bottom">
            <p>© 2000-2030 all Reserved Rights</p>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Services;
