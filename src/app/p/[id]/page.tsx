"use client";
import CoverImage from "@/components/CustomImage";
import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import KeywordHighlight from "@/components/KeywordHighlight";
import { projectData } from "@/constant/projectDetails";

const FeatureCard = ({ feature }) => (
  <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-gray-800/60 transition-all duration-300 border border-gray-700/50">
    <div className="flex items-start gap-3 md:gap-4">
      <span className="text-2xl md:text-4xl flex-shrink-0">{feature.icon}</span>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
          {feature.title}
        </h3>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed line-clamp-3 md:line-clamp-none">
          {feature.description}
        </p>
      </div>
    </div>
  </div>
);

const ProjectDetails = () => {
  const project = projectData["greenEarth"];

  if (!project) {
    return (
      <div className="text-center text-red-500 text-xl">Project Not Found</div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-black p-2 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Slider */}
        <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] mb-4 sm:mb-6 md:mb-8 rounded-lg overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="w-full h-full"
          >
            {project.coverImages.map((image, index) => (
              <SwiperSlide key={index}>
                <CoverImage
                  src={image}
                  alt={`${project.name} - Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 z-10 w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
              {project.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 line-clamp-2 md:line-clamp-none">
              <KeywordHighlight
                text={project.tagline}
                keywords={project.keywords}
              />
            </p>
          </div>
        </div>

        {/* Project Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white font-semibold transition-colors text-sm sm:text-base"
          >
            <FaGlobe className="text-base sm:text-lg md:text-xl" />
            <span>Live Demo</span>
          </a>
          <a
            href={project.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-colors text-sm sm:text-base"
          >
            <FaYoutube className="text-base sm:text-lg md:text-xl" />
            <span>Watch Demo</span>
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold transition-colors text-sm sm:text-base"
          >
            <FaGithub className="text-base sm:text-lg md:text-xl" />
            <span>Source Code</span>
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-gray-800 text-white rounded-lg text-xs sm:text-sm hover:bg-gray-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {project.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-6 sm:mt-8 md:mt-12 mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {project.screenshots.map((src, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg group"
              >
                <div className="aspect-video relative">
                  <img
                    src={src}
                    alt={`Project Screenshot ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
