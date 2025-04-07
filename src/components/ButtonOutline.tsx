"use client";
import { mymail } from "@/constant/other";
import React from "react";
import { HiMail } from "react-icons/hi"; // Import mail icon
import { motion } from "framer-motion";

type ButtonOutlineProps = {
  title: string;
};

const ButtonOutline: React.FC<ButtonOutlineProps> = ({ title }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${mymail}`;
  };

  return (
    <motion.button
      onClick={handleEmailClick}
      className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <HiMail className="mr-2 text-lg" />
      {title}
    </motion.button>
  );
};

export default ButtonOutline;
