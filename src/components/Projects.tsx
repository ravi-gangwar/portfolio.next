import React from 'react';
import ProjectCard from './ProjectsCard';

// Define the type for a project
type Project = {
  githubLink: string;
  liveLink: string;
  image: string;
  name: string;
};

// Define the type for the projects category
type ProjectsCategory = {
  title: string;
  projects: Project[];
};

// Store project data in a TypeScript object
const projectsData: ProjectsCategory[] = [
  {
    title: '🚀 Personal Projects',
    projects: [
      {
        githubLink: 'https://github.com/ravi-gangwar/greenEarth',
        liveLink: 'https://greenearth1.vercel.app/',
        image: 'https://greenearth2.vercel.app/greenearth.svg',
        name: 'greenEarth 1.0',
      },
      {
        githubLink: 'https://github.com/ravi-gangwar/greenEarth2.0',
        liveLink: 'https://greenearth2.vercel.app/',
        image: 'https://greenearth2.vercel.app/greenearth.svg',
        name: 'greenEarth 2.0',
      },
      {
        githubLink: 'https://github.com/ravi-gangwar/greenEarth2.0',
        liveLink: 'https://greenearth2.vercel.app/',
        image: 'https://greenearth2.vercel.app/greenearth.svg',
        name: 'greenEarth 2.0',
      },
      {
        githubLink: 'https://github.com/ravi-gangwar/greenEarth2.0',
        liveLink: 'https://greenearth2.vercel.app/',
        image: 'https://greenearth2.vercel.app/greenearth.svg',
        name: 'greenEarth 2.0',
      },
    ],
  },
  {
    title: '💼 Internship Projects',
    projects: [
      {
        githubLink: 'https://github.com/ravi-gangwar/greenEarth',
        liveLink: 'https://greenearth1.vercel.app/',
        image: 'https://greenearth2.vercel.app/greenearth.svg',
        name: 'greenEarth 1.0',
      },
      {
        githubLink: 'https://github.com/ravi-gangwar/greenEarth2.0',
        liveLink: 'https://greenearth2.vercel.app/',
        image: 'https://greenearth2.vercel.app/greenearth.svg',
        name: 'greenEarth 2.0',
      },
      {
        githubLink: 'https://github.com/ravi-gangwar/greenEarth2.0',
        liveLink: 'https://greenearth2.vercel.app/',
        image: 'https://greenearth2.vercel.app/greenearth.svg',
        name: 'greenEarth 2.0',
      },
      {
        githubLink: 'https://github.com/ravi-gangwar/greenEarth2.0',
        liveLink: 'https://greenearth2.vercel.app/',
        image: 'https://greenearth2.vercel.app/greenearth.svg',
        name: 'greenEarth 2.0',
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="px-4 flex flex-col space-y-8">
      {projectsData.map((category, index) => (
        <div key={index}>
          <Heading name={category.title} />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {category.projects.map((project, idx) => (
              <ProjectCard
                key={idx}
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