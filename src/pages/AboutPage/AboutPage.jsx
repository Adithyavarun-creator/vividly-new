import React from "react";
import "./AboutPage.css";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      key="page"
      initial={{ x: "20%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-20%", opacity: 0, transition: { duration: 0.5 } }}
      transition={{ delay: 0, duration: 0.8 }}
    >
      AboutPage
    </motion.div>
  );
};

export default AboutPage;
