import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Homepage from "../../pages/Homepage/Homepage";
import EditPage from "../../pages/EditPage/EditPage";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AnimationProvider = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/edit-image" element={<EditPage />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
};

export default AnimationProvider;
