import React, { useState } from "react";
import "./Navbar.css";
import WhiteLogo from "../../assets/blacklogo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const framerSidebarPanel = {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: { duration: 0.3 },
  };

  const framerText = (delay) => {
    return {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: {
        delay: 0.5 + delay / 10,
      },
    };
  };

  const mobilehome = () => {
    navigate("/");
    setToggle(false);
  };

  const mobileabout = () => {
    navigate("/about");
    setToggle(false);
  };

  const mobileedit = () => {
    navigate("/edit-image");
    setToggle(false);
  };

  return (
    <>
      <nav className="nav-container">
        <Link to="/" className="linkstyle nav-img-box">
          <img src={WhiteLogo} className="vividlylogo" alt="" />
        </Link>
        <div className="nav-link-box">
          <Link to="/edit-image" className="nav-linktext linkstyle">
            Try free edit
          </Link>
          <Link to="/about" className="nav-linktext linkstyle">
            About
          </Link>
        </div>
      </nav>

      <nav className="mobile-navsection">
        <div className="mobile-menubox">
          <IoMdMenu
            className="mobile-menuicon"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {toggle && (
            <motion.div {...framerSidebarPanel} className="mobile-sidebar">
              <div className="mobile-navsection mobile-menubox">
                <IoMdClose
                  className="mobile-menuicon"
                  onClick={() => setToggle(false)}
                />
              </div>

              <div className="mobile-navlistcontent">
                <ul className="mobile-ordered">
                  <motion.li {...framerText(0)} onClick={mobilehome}>
                    Home
                  </motion.li>
                  <motion.li {...framerText(0)} onClick={mobileedit}>
                    Edit images for free
                  </motion.li>
                  <motion.li {...framerText(1)} onClick={mobileabout}>
                    About
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
