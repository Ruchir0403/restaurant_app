import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <img
          src="/images/home_bg_image.jpg"
          alt="Cafe Background"
          className="hero-background"
        />
        <div className="hero-overlay">
          <input type="text" className="search-bar" placeholder="Search" />
          <h1>Indian Cafe</h1>
          <p>
            Brewing Stories, One Cup at a Time,
            <br />
            Flavors of India in Every Sip.
            <br />
            Coffee, Chai, and Conversations.
          </p>
          <div className="hero-buttons">
            <button>Order Online</button>
            <button>Reservation Table</button>
            <button>Track Order</button>
          </div>
        </div>
      </section>

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

      <section className="special-offer">
        <h2>Today's Special Offer</h2>
        <div className="special-offer-cards">
          <div className="offer-card left">
            <img
              src="/images/special_offer_image_1.jpg"
              alt="Veg Dum Biryani"
            />
            <div className="offer-details">
              <h4>Veg Dum Biryani</h4>
              <p>₹ 110</p>
              <button>Order Now</button>
            </div>
          </div>
          <div className="offer-card featured">
            <img src="/images/special_offer_image_2.jpg" alt="Chicken Kari" />
            <div className="offer-details">
              <h4>Chicken Kari</h4>
              <p>₹ 210</p>
              <button>Order Now</button>
            </div>
          </div>
          <div className="offer-card right">
            <img
              src="/images/special_offer_image_3.jpg"
              alt="Mushroom Tandoori"
            />
            <div className="offer-details">
              <h4>Mushroom Tandoori</h4>
              <p>₹ 199</p>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="recommendation">
        <h2>Recommendation</h2>
        <div className="recommendation-layout">
          <div className="recommendation-images-collage">
            <img
              src="/images/recommendation_image_1.jpg"
              className="img1"
              alt="Dish 1"
            />
            <img
              src="/images/recommendation_image_2.jpg"
              className="img2"
              alt="Dish 2"
            />
            <img
              src="/images/recommendation_image_3.jpg"
              className="img3"
              alt="Dish 3"
            />
            <img
              src="/images/recommendation_image_4.jpg"
              className="img4"
              alt="Drink"
            />
          </div>
          <div className="recommendation-text">
            <ul>
              <li>Most Popular meal for Vegetarian</li>
              <li>India Cafe Special Non veg Special</li>
              <li>Traditional Desserts</li>
              <li>Drinks</li>
            </ul>
            <button className="button-text">Order Now</button>
          </div>
        </div>
      </section>

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

      <section className="testimonial-section">
        <div className="testimonial-header">
          <h2>Over 1000+ people trust us</h2>
          <p>
            India cafe brings you the best of Indian cuisine. From rich curries
            to sizzling tandoori, every dish is made with passion. Come taste
            the tradition!
          </p>
        </div>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src="/images/review_1.png" alt="Review 1" />
            <p className="review">
              "Delicious meals, cozy atmosphere. Highly recommend!"
            </p>
            <p className="reviewer">kshitija Shinde</p>
          </div>
          <div className="testimonial-card">
            <img src="/images/review_2.jpg" alt="Review 2" />
            <p className="review">
              Good value for money. Cozy place with friendly staff."
            </p>
            <p className="reviewer">Pooja Shinde</p>
          </div>
          <div className="testimonial-card">
            <img src="/images/review_3.jpg" alt="Review 3" />
            <p className="review">
              "Loved everything! Tasty dishes, excellent hospitality, and a
              beautiful setting."
            </p>
            <p className="reviewer">Mrunal vase</p>
          </div>
        </div>
      </section>

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

export default Home;
