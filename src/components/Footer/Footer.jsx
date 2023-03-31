import React from 'react';
import './Footer.scss';

// Material UI icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Account</h1>
          <span>Register</span>
          <span>Order Status</span>
          <span>Membership Program</span>
        </div>

        <div className="item">
          <h1>Support</h1>
          <span>Help Center</span>
          <span>Return Policy</span>
          <span>Shipping Info</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>Our Story</span>
          <span>Stores</span>
          <span>Careers</span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>Live Chat</span>
          <span>Email Sign Up</span>
          <span>
            <div className="icons">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <img src="/img/payment.png" alt="Payment methods" />
        </div>

        <div className="right">
          <span className="copyright">
            © 2023 Urban Apparel All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
