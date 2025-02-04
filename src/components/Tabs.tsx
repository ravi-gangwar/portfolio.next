"use client";
import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Projects from "./Projects";
import Skills from "./Skills";
import ExperienceList from "./ExperienceSection";
import { FaProjectDiagram, FaUserTie, FaTools } from "react-icons/fa";

const Tabs: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const names = ["projects", "experience", "skills"];
  const activeTab = searchParams.get("tab") || names[0];

  const handleTabChange = (tabName: string) => {
    router.push(`?tab=${tabName}`);
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
              <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-white rounded-md"></span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mt-6 text-center text-white text-xl border-b border-zinc-700 pb-2">
          {activeTab === "projects" && <Projects />}
          {activeTab === "experience" && <ExperienceList />}
          {activeTab === "skills" && <Skills/>}
        </div>
      </Suspense>
    </div>
  );
};

export default Tabs;
