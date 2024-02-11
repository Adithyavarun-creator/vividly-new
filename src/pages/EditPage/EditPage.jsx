import React from "react";
import "./EditPage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Image from "../../components/Image/Image";
import { motion } from "framer-motion";

const EditPage = () => {
  return (
    <motion.div
      key="page"
      initial={{ x: "20%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-20%", opacity: 0, transition: { duration: 0.5 } }}
      transition={{ delay: 0, duration: 0.8 }}
      className="edit-section"
    >
      <div className="edit-sidebar">
        <Sidebar />
      </div>
      <div className="edit-content">
        <Image />
      </div>
    </motion.div>
  );
};

export default EditPage;
