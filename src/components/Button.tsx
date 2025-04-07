"use client";
import React from "react";
import { motion } from "framer-motion";

type TButton = {
  title: string;
  href: string;
};

const ButtonConnect: React.FC<TButton> = ({ title, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-[#2563EB] to-[#1E40AF] group-hover:from-[#1D4ED8] group-hover:to-[#1E3A8A] focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-800"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#3B82F6] dark:bg-[#1E40AF] rounded-md group-hover:bg-opacity-0">
        {title}
      </span>
    </motion.a>
  );
};

export default ButtonConnect;
