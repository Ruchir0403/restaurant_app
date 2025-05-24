import React from "react";
import "../styles/home.css"; // Reuse the same CSS as Home if applicable

const Menu = () => {
  return (
    <div className="menu-page">

      {/* Our Menu Section */}
      <section className="menu-section">
        <h2>Our Menu</h2>
        <div className="menu-cards">
          <div className="menu-card">
            <img src="/images/our_menu_image_1.jpg" alt="Food" />
            <div className="menu-card-content">
              <h3>Food</h3>
              <button>Explore</button>
            </div>
          </div>
          <div className="menu-card">
            <img src="/images/our_menu_image_2.jpg" alt="Drink" />
            <div className="menu-card-content">
              <h3>Drink</h3>
              <button>Explore</button>
            </div>
          </div>
          <div className="menu-card">
            <img src="/images/our_menu_image_3.jpg" alt="Dessert" />
            <div className="menu-card-content">
              <h3>Dessert</h3>
              <button>Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialty Section */}
      <section className="specialty">
        <h2 className="specialty-heading">Our Specialty</h2>
        <div className="specialty-image">
          <img
            src="/images/our_speciality_image.jpg"
            alt="Traditional Indian Dishes"
          />
        </div>
        <div className="specialty-text">
          <p>
            At India Café, we specialize in bringing authentic Indian flavors to
            your plate. Our menu is crafted with traditional recipes, rich
            spices, and fresh ingredients to give you a true taste of India.
          </p>
        </div>
      </section>

      {/* Today's Special Offer Section */}
      <section className="special-offer">
        <h2>Today's Special Offer</h2>
        <div className="special-offer-cards">
          <div className="offer-card left">
            <img src="/images/special_offer_image_1.jpg" alt="Veg Dum Biryani" />
            <div className="offer-details">
              <h4>Veg Dum Biryani</h4>
              <p>₹ 110</p>
              <button>Order Now</button>
            </div>
          </div>
          <div className="offer-card featured">
            <img src="/images/special_offer_image_2.jpg" alt="Chicken Kali" />
            <div className="offer-details">
              <h4>Chicken Kali</h4>
              <p>₹ 210</p>
              <button>Order Now</button>
            </div>
          </div>
          <div className="offer-card right">
            <img src="/images/special_offer_image_3.jpg" alt="Mushroom Tandoori" />
            <div className="offer-details">
              <h4>Mushroom Tandoori</h4>
              <p>₹ 199</p>
              <button>Order Now</button>
            </div>
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

export default Menu;
