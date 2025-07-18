import React, { useState } from "react";
import { FaGithub, FaApple, FaGooglePlay } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

import CoverImage from "./CustomImage";
import LoadingOverlay from "./LoadingOverlay";

interface ProjectCardProps {
  image: string;
  name: string;
  liveLink?: string;
  id: string;
  githubLink?: string;
  appleStoreLink?: string;
  playStoreLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  name,
  liveLink,
  githubLink,
  id,
  appleStoreLink,
  playStoreLink,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.closest("a")) return;
    setIsLoading(true);
  };

  return (
    <div className="relative">
      <Link href={`/p/${id}`} passHref>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative rounded-xl p-4 shadow-lg w-full min-h-[200px] h-[240px] backdrop-blur-lg border border-zinc-700 cursor-pointer"
          onClick={handleCardClick}
        >
          <div className="relative w-full h-28 overflow-hidden rounded-md">
            <CoverImage
              src={image}
              alt={name}
              objectFit="contain"
              className="w-full h-full rounded-md"
            />
          </div>
          <h3 className="text-white text-base font-semibold mt-3">{name}</h3>

          <div className="absolute top-0 left-0 bg-zinc-800 text-white text-sm p-2 rounded-md opacity-0 pointer-events-none">
            Click me
          </div>

          <LoadingOverlay isVisible={isLoading} />
        </motion.div>
      </Link>

      <div className="flex gap-4 mt-3 px-4">
        {appleStoreLink && (
          <a
            href={appleStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaApple size={20} />
          </a>
        )}
        {playStoreLink && (
          <a
            href={playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-white"
          >
            <FaGooglePlay size={18} />
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub size={18} />
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            <FaEarthAsia size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
