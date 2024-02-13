import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import ColorLogo from "../../assets/colorlogo.png";

const Header = () => {
  const navigate = useNavigate();

  const editPage = () => {
    navigate("/edit-image");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.8 }}
      className="header-section"
    >
      <div>
        <img src={ColorLogo} className="mobile-logo" alt="" />
      </div>
      <div>
        <h2 className="trns-text">
          Become a modern Picasso by using our platform and share it to the
          world
        </h2>
      </div>

      <div>
        <Button text="Try a free edit now" onClick={editPage} />
      </div>
    </motion.div>
  );
};

export default Header;
