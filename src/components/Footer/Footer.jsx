import React from "react";
import "./Footer.css";
import BlackLogo from "../../assets/blacklogo.png";
import X from "../../assets/socialimages/x.png";
import Facebook from "../../assets/socialimages/facebook.png";
import Gmail from "../../assets/socialimages/gmail.png";
import Whatsapp from "../../assets/socialimages/whatsapp.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div>
          <img src={BlackLogo} className="footer-logoimg" alt="" />
        </div>
        <div className="footer-links">
          <span className="footer-linkheading">What we Promote</span>
          <ul>
            <li>Corporate</li>
            <li>Promoters</li>
            <li>PicsArt</li>
            <li>AI enabled</li>
            <li>Chats Support</li>
            <li>Web techs</li>
          </ul>
        </div>
        <div className="footer-sociallinks">
          <div>
            <img src={Whatsapp} className="footer-sociallinkimg" alt="" />
          </div>
          <div>
            <img src={X} className="footer-sociallinkimg" alt="" />
          </div>
          <div>
            <img src={Facebook} className="footer-sociallinkimg" alt="" />
          </div>
          <div>
            <img src={Gmail} className="footer-sociallinkimg" alt="" />
          </div>
        </div>
      </div>

      <div className="footer-copyrightbox">
        <span className="footer-copyrights">
          &copy; Copyrights by Vividly team
        </span>
      </div>
    </footer>
  );
};

export default Footer;
