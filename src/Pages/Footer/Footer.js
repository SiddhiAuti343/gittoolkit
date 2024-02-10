import React from 'react';
import './Footer.css'; 
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="container foot">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-12 ft-1">
            <h3 id="el"><span>Entrepreneur's</span> Toolkit</h3>
            <p>Your go-to toolkit for success in business and innovation. Navigate the world of entrepreneurship with our comprehensive toolkit at your fingertips.</p>
            <div className="footer-icons">
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h3 id="ql"><span>Quick Links</span></h3>
            <ul>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-3">
            <h5 id="cu">Contact Us</h5>
            <p><i className="fa-solid fa-phone"></i>9769521161</p>
            <p><i className="fa-solid fa-envelope"></i>siddhiauti123@gmail.com</p>
            <p><i className="fa-solid fa-location-dot"></i>Mumbai</p>
          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-4">
            <h3>Business Forums</h3>
            <ul>
              <li><a href="https://www.reddit.com/r/Entrepreneur/">Entrepreneur Subreddit</a></li>
              <li><a href="https://www.smallbusinessforums.org/">Small Business Forums</a></li>
              <li><a href="https://www.warriorforum.com/">Warrior Forum</a></li>
              {/* Add more forum links as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
