import React from "react";
import { FaExternalLinkAlt, FaGithub, FaApple, FaGooglePlay } from "react-icons/fa";
import CoverImage from "./CustomImage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

interface ProjectCardProps {
  image: string;
  name: string;
  liveLink?: string;
  githubLink?: string;
  appleStoreLink?: string;
  playStoreLink?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, liveLink, githubLink, appleStoreLink, playStoreLink, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full backdrop-blur-lg border border-zinc-700 cursor-pointer ${inter.className}`}
    >
      <div className="relative w-full h-28 overflow-hidden rounded-md">
        <CoverImage src={image} alt={name} objectFit="contain" className="w-full h-full rounded-md" />
      </div>
      <h3 className="text-white text-base font-semibold mt-3">{name}</h3>

      {/* Icons Section */}
      <div className="flex gap-4 mt-3">
        {appleStoreLink && (
          <a href={appleStoreLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-transform transform hover:scale-110">
            <FaApple size={20} />
          </a>
        )}
        {playStoreLink && (
          <a href={playStoreLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white transition-transform transform hover:scale-110">
            <FaGooglePlay size={18} />
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-110">
            <FaGithub size={18} />
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-transform transform hover:scale-110">
            <FaExternalLinkAlt size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;