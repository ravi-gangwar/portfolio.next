import React from "react";
import ProjectCard from "./ProjectsCard";
import { projectsData } from "@/constant/projects";

const Projects = () => {
  return (
    <div className="px-4 flex flex-col space-y-8">
      {projectsData.map((category, index) => (
        <div key={index}>
          <Heading name={category.title} />
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-4">
            {category.projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                id={project.id}
                appleStoreLink={project.appleStoreLink}
                playStoreLink={project.playStoreLink}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                image={project.image}
                name={project.name}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Heading = ({ name }: { name: string }) => {
  return (
    <div className="w-full px-2 py-2 mb-2">
      <h2 className="text-white text-base sm:text-lg font-bold tracking-wide mb-1">
        {name}
      </h2>
      <div className="h-0.5 w-10 bg-zinc-700 rounded-full" />
    </div>
  );
};

export default Projects;
