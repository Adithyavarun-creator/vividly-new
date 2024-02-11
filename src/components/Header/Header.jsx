import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import BlackGlobe from "../../assets/blackglobe.png";
import Button from "../Button/Button";
import { motion } from "framer-motion";

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
        <h2 className="trns-text">
          Become a modern Picasso by using our platform and share it to the
          world
        </h2>
      </div>
      {/* <div>
        <img src={BlackGlobe} className="header-globe-img" alt="" />
      </div> */}
      <div>
        {/* <button className="header-main-btn" onClick={editPage}>
          Edit your images
        </button> */}
        <Button text="Try a free edit now" onClick={editPage} />
      </div>
    </motion.div>
  );
};

export default Header;
