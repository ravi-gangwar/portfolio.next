"use client";
import React from "react";
import { projectData } from "@/constant/projectDetails";
import Hero from "@/components/project/Hero";
import ProjectLinks from "@/components/project/ProjectLinks";
import TechStack from "@/components/project/TechStack";
import ProjectGallery from "@/components/project/ProjectGallery";
import FeatureCard from "@/components/project/FeatureCard";

const ProjectDetails = () => {
  const project = projectData["greenEarth"];

  if (!project) {
    return (
      <div className="text-center text-red-500 text-xl">Project Not Found</div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-black p-2 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto lg:max-w-[40vw] xl:max-w-[40vw]">
        <Hero
          name={project.name}
          tagline={project.tagline}
          coverImages={project.coverImages}
          keywords={project.keywords}
        />

        <ProjectLinks links={project.links} />

        <TechStack technologies={project.techStack} />

        {/* Description */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">
            About the Project
          </h2>
          <div className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-2 sm:space-y-3 md:space-y-4">
            {project.description.split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {project.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>

        <ProjectGallery screenshots={project.screenshots} />
      </div>
    </div>
  );
};

export default ProjectDetails;
