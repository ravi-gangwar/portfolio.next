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
    <h2 className="text-xl w-full text-left sm:text-2xl font-bold text-white">
      {name}
    </h2>
  );
};

export default Projects;
