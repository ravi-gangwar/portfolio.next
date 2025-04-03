import CoverImage from "@/components/CustomImage";
import React from "react";

const projectData = {
  greenEarth: {
    id: "greenearth2",
    name: "GreenEarth",
    tagline: "Sustainable solutions for a greener planet",
    coverImage: "/assets/greenearth-cover.jpg",
    techStack: ["Next.js", "Tailwind CSS", "Firebase", "Node.js"],
    description: "GreenEarth is a platform promoting sustainability...",
    features: [
      "Eco-friendly product marketplace",
      "Carbon footprint calculator",
    ],
    screenshots: ["/assets/ss1.jpg", "/assets/ss2.jpg"],
    liveDemo: "https://greenearth.com",
    github: "https://github.com/yourrepo",
  },
};

const ProjectDetails = () => {
  const project = projectData["greenEarth"];

  if (!project) {
    return (
      <div className="text-center text-red-500 text-xl">Project Not Found</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Hero Section */}
      <div className="relative w-full h-72 mb-6 rounded-lg overflow-hidden">
        <CoverImage
          src={project.coverImage}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold text-white mb-2">{project.name}</h1>
      <p className="text-lg text-gray-300 mb-4">{project.tagline}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 my-4">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-800 text-white rounded-lg text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-lg leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Features */}
      <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {/* Screenshots */}
      <h2 className="text-2xl font-semibold text-white mt-6 mb-4">
        Screenshots
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {project.screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            className="rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex gap-4">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 rounded-lg text-white"
          >
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 rounded-lg text-white"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
