import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__copyright">
            © 2025 Your SkillWave Platform. All rights reserved. 
            <span className="footer__credit">Made with ❤️ by Karthick S</span>
          </div>
          
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <AiFillFacebook />
            </a>
            <a href="#" className="footer__social-link" aria-label="Twitter">
              <AiFillTwitterSquare />
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;