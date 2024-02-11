import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import EditPage from "./pages/EditPage/EditPage";
import Footer from "./components/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import AnimationProvider from "./components/AnimationProvider/AnimationProvider";

const App = () => {
  return (
    <div className="golos">
      <BrowserRouter>
        <AnimationProvider />
      </BrowserRouter>
    </div>
  );
};

export default App;
