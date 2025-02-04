import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import CoverImage from "./CustomImage";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

interface ProjectCardProps {
  image: string;
  name: string;
  liveLink?: string;
  githubLink?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, liveLink, githubLink, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-[48%] md:w-[30%] lg:w-[23%] xl:w-[18%] backdrop-blur-lg border border-zinc-700 cursor-pointer ${inter.className}`}
    >
      <div className="relative w-full h-36 sm:h-40 md:h-48 overflow-hidden rounded-md">
        <CoverImage
          src={image}
          alt={name}
          objectFit="cover"
          className="w-full h-full rounded-md"
        />
      </div>
      <h3 className="text-white text-base font-semibold mt-3">{name}</h3>
      <div className="flex gap-4 mt-3">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm transition-transform transform hover:scale-110"
          >
            <FaExternalLinkAlt size={16} />
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm transition-transform transform hover:scale-110"
          >
            <FaGithub size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
