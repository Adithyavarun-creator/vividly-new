import React from "react";
import "./Footer.css";
import BlackLogo from "../../assets/blacklogo.png";
import X from "../../assets/socialimages/x.png";
import Facebook from "../../assets/socialimages/facebook.png";
import Gmail from "../../assets/socialimages/gmail.png";
import Whatsapp from "../../assets/socialimages/whatsapp.png";
import Github from "../../assets/socialimages/github.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div>
          <img src={BlackLogo} className="footer-logoimg" alt="" />
        </div>
        <div className="footer-links">
          <span className="footer-linkheading">What we Promote</span>
          <div className="footerorder">
            <span className="footerlist">Corporate</span>
            <span className="footerlist">Promoters</span>
            <span className="footerlist">PicsArt</span>
            <span className="footerlist">AI enabled</span>
            <span className="footerlist">Chats Support</span>
            <span className="footerlist">Web techs</span>
          </div>
        </div>
        <div className="footer-sociallinks">
          <div>
            <a href="whatsapp://send?text=Hello World!&phone=+917358315322">
              <img
                src={Whatsapp}
                className="footer-sociallinkimg"
                alt=""
                title="Whatsapp"
              />
            </a>
          </div>
          <div>
            <a href="mailto:adithyavarun95@gmail.com">
              <img
                src={Gmail}
                className="footer-sociallinkimg"
                title="Gmail"
                alt=""
              />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://github.com/Adithyavarun-creator?tab=repositories"
              title="Github"
            >
              <img src={Github} className="footer-sociallinkimg" alt="" />
            </a>
          </div>
          <div>
            <img src={X} title="X" className="footer-sociallinkimg" alt="" />
          </div>
          <div>
            <img
              src={Facebook}
              title="Facebook"
              className="footer-sociallinkimg"
              alt=""
            />
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
