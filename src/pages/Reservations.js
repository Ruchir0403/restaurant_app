import React from "react";
import "../styles/home.css";

const Reservations = () => {
  return (
    <div>
      {/* Reservation Section */}
      <section className="reservation-form">
        <h2>Reserve A Table</h2>
        <div className="reservation-text">
          <h6>Dine With US - Reserve Now</h6>
        </div>

        <div className="reservation-container">
          <form className="reservation-inputs">
            <div className="row">
              <label>
                <span>Name</span>
                <input type="text" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" />
              </label>
            </div>
            <div className="row">
              <label>
                <span>Mobile No</span>
                <input type="text" />
              </label>
              <label>
                <span>No of Guest</span>
                <input type="number" />
              </label>
            </div>
            <div className="row">
              <label>
                <span>Date Of Reservation</span>
                <input type="date" />
              </label>
              <label>
                <span>Time of Reservation</span>
                <input type="time" />
              </label>
            </div>
            <div className="row full-width">
              <label>
                <span>Special Request</span>
                <textarea></textarea>
              </label>
            </div>
            <button type="submit">Book Table</button>
          </form>
          <div className="reservation-info">
            <p>
              <strong>Address</strong>
              <br />
              <span>815 Wayne Ave, Chambersburg, PA 17201</span>
            </p>
            <p>
              <strong>Contact</strong>
              <br />
              <span>310-437-2766</span>
            </p>
            <p>
              <strong>Open Time</strong>
              <br />
              <span>
                Open: 11:00 AM – 12:00 PM
                <br />
                Close: 10:00 PM – 11:30 PM
              </span>
            </p>
            <p>
              <strong>Stay connected</strong>
            </p>
            <div className="social-icons">
              <img src="/images/facebook_logo.png" alt="Facebook" />
              <img src="/images/instagram_logo.jpg" alt="Instagram" />
              <img src="/images/youtube_logo.png" alt="YouTube" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
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
        </section>
      </div>
    </div>
  );
};

export default Reservations;
