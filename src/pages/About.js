import React from "react";
import "../styles/home.css"; // Assuming you're using the same CSS

const About = () => {
  return (
    <div className="about-page">
      {/* About Us Section */}
      <section className="about-us">
        <div className="about-image">
          <img
            src="/images/about_us_image_1.jpg"
            alt="Customer enjoying meal"
          />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to Indian café, where every cup tells a story and every bite
            brings you closer to the heart of India. Our café blends traditional
            Indian flavors with a cozy, modern ambiance — perfect for chai
            lovers, coffee connoisseurs, and foodies alike.
          </p>
          <p>
            From hand-brewed masala chai to aromatic filter coffee and regional
            snacks, we take pride in serving authentic taste with a twist.
            Whether you're here for a quick break, a friendly chat, or a quiet
            moment, our café is your warm corner of India in the city.
          </p>
        </div>
      </section>

      {/* Meet the Chef Section */}
      <section className="meet-the-chef-section">
        <div className="meet-the-chef-header">
          <h2>Meet The Chef</h2>
          <p>The Master Behind The Menu</p>
        </div>
        <div className="chef-cards-container">
          <div className="chef-card">
            <img src="/images/meet_the_chef_1.jpg" alt="Chef 1" />
          </div>
          <div className="chef-card">
            <img src="/images/meet_the_chef_2.jpg" alt="Chef 2" />
          </div>
          <div className="chef-card">
            <img src="/images/meet_the_chef_3.png" alt="Chef 3" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-wrapper">
          <button className="gallery-arrow left">&lt;</button>
          <div className="gallery-images">
            <img
              src="/images/gallery_1.jpg"
              alt="Gallery Left"
              className="gallery-img left"
            />
            <img
              src="/images/gallery_2.jpg"
              alt="Gallery Center"
              className="gallery-img center"
            />
            <img
              src="/images/gallery_3.jpg"
              alt="Gallery Right"
              className="gallery-img right"
            />
          </div>
          <button className="gallery-arrow right">&gt;</button>
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
          <div id="contact-us">
          <div className="contact-info-container">
            <div className="contact-info">
              <h3>
                <strong>Have any questions?</strong>
              </h3>
              <p>Contact us we will Answer your question</p>

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

              <div className="footer-nav">
                <span>Home</span>
                <span>Menu</span>
                <span>Reservation</span>
                <span>Our Service</span>
                <span>Contact Us</span>
              </div>

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

            <div className="map-placeholder">
              <img src="/images/map_pic.png" alt="Map" />
            </div>
          </div>

          <footer className="footer-bottom">
            <p>© 2000-2030 all Reserved Rights</p>
          </footer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
