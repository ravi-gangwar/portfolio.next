"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

const ButtonResume = () => {
  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <motion.button
      onClick={handleResumeClick}
      className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-green-500 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200 ease-in-out focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <FaFileDownload className="mr-2 text-lg" />
      Resume
    </motion.button>
  );
};

export default ButtonResume;
