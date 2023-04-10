import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="message">
          <h1>JOIN OUR COMMUNITY</h1>
          <span>
            Subscribe to receive Urban Apparel emails and get the latest on new
            arrivals, sales, exclusive content, events and more!
          </span>
        </div>

        <div className="mail">
          <input type="email" placeholder="Enter your email..." />

          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
