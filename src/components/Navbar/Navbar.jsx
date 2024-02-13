import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import WhiteLogo from "../../assets/blacklogo.png";
import ColorLogo from "../../assets/colorlogo.png";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ toggleTheme, setLightMode, setDarkMode }) => {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

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
          <img src={ColorLogo} className="vividlylogo" alt="" />
        </Link>
        <div className="nav-link-box">
          <NavLink
            to="/edit-image"
            className={({ isActive }) =>
              isActive ? "linkstyle active" : "nav-linktext linkstyle"
            }
          >
            Try free edit
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "linkstyle active" : "nav-linktext linkstyle"
            }
          >
            About
          </NavLink>
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
                <motion.span {...framerText(0)}>
                  <IoMdClose
                    className="mobile-menuicon"
                    onClick={() => setToggle(false)}
                  />
                </motion.span>
              </div>

              <div className="mobile-navlistcontent">
                <ul className="mobile-ordered">
                  <motion.li
                    className="mobile-navlist"
                    {...framerText(2)}
                    onClick={mobilehome}
                  >
                    Home
                  </motion.li>
                  <motion.li
                    className="mobile-navlist"
                    {...framerText(4)}
                    onClick={mobileedit}
                  >
                    Edit images for free
                  </motion.li>
                  <motion.li
                    className="mobile-navlist"
                    {...framerText(6)}
                    onClick={mobileabout}
                  >
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
