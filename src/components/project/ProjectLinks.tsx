import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";

type ProjectLinksProps = {
  links: {
    live: string;
    youtube: string;
    github: string;
  };
};

const ProjectLinks = ({ links }: ProjectLinksProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
    <a
      href={links.live}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white font-semibold transition-colors text-sm sm:text-base"
    >
      <FaGlobe className="text-base sm:text-lg md:text-xl" />
      <span>Live Demo</span>
    </a>
    <a
      href={links.youtube}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-colors text-sm sm:text-base"
    >
      <FaYoutube className="text-base sm:text-lg md:text-xl" />
      <span>Watch Demo</span>
    </a>
    <a
      href={links.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold transition-colors text-sm sm:text-base"
    >
      <FaGithub className="text-base sm:text-lg md:text-xl" />
      <span>Source Code</span>
    </a>
  </div>
);

export default ProjectLinks;
