"use client";
import React, { useState, Suspense } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import ExperienceList from "./ExperienceSection";
import { FaProjectDiagram, FaUserTie, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const Tabs: React.FC = () => {
  const names = ["projects", "experience", "skills"];
  const [activeTab, setActiveTab] = useState(names[0]);

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-5">
      <div className="flex justify-evenly border-b border-zinc-700 pb-2">
        {names.map((tabName) => (
          <button
            key={tabName}
            className={`relative flex items-center gap-2 justify-center px-4 py-2 text-sm md:text-lg font-medium transition-all duration-300 rounded-md 
              ${
                activeTab === tabName
                  ? "text-white shadow-md scale-105"
                  : "text-gray-400 hover:text-white hover:bg-gradient-to-br from-gray-900 to-black"
              }`}
            onClick={() => handleTabChange(tabName)}
          >
            {tabName === "projects" && <FaProjectDiagram size={18} />}
            {tabName === "experience" && <FaUserTie size={18} />}
            {tabName === "skills" && <FaTools size={18} />}
            {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
            {activeTab === tabName && (
              <motion.span
                className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-white rounded-md"
                layoutId="underline"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              ></motion.span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <Suspense fallback={<div>Loading...</div>}>
        <motion.div
          className="mt-6 text-center text-white text-xl border-b border-zinc-700 pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {activeTab === "projects" && <Projects />}
          {activeTab === "experience" && <ExperienceList />}
          {activeTab === "skills" && <Skills />}
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Tabs;
