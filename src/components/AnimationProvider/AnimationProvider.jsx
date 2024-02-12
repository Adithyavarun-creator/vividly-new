import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "../../pages/Homepage/Homepage";
import EditPage from "../../pages/EditPage/EditPage";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AboutPage from "../../pages/AboutPage/AboutPage";

const AnimationProvider = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/edit-image" element={<EditPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
};

export default AnimationProvider;
