import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaYoutube,
  FaExternalLinkAlt,
  FaAppStore,
  FaGooglePlay,
} from "react-icons/fa";

type ProjectLinksProps = {
  links: {
    live?: string;
    github?: string;
    youtube?: string;
    appStore?: string;
    playStore?: string;
  };
  appStoreIcons?: {
    appStore?: string;
    playStore?: string;
  };
};

const ProjectLinks = ({ links, appStoreIcons }: ProjectLinksProps) => {
  const { live, github, youtube, appStore, playStore } = links;

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs sm:text-sm transition-colors"
        >
          <FaExternalLinkAlt className="text-xs sm:text-sm" />
          <span>Live Demo</span>
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-800 hover:bg-gray-900 text-white rounded-md text-xs sm:text-sm transition-colors"
        >
          <FaGithub className="text-xs sm:text-sm" />
          <span>GitHub</span>
        </a>
      )}
      {youtube && (
        <a
          href={youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md text-xs sm:text-sm transition-colors"
        >
          <FaYoutube className="text-xs sm:text-sm" />
          <span>YouTube</span>
        </a>
      )}
      {appStore && (
        <a
          href={appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-black hover:bg-gray-900 text-white rounded-md text-xs sm:text-sm transition-colors"
        >
          {appStoreIcons?.appStore ? (
            <div className="relative h-5 sm:h-6 w-auto">
              <Image
                src={appStoreIcons.appStore}
                alt="Download on the App Store"
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <>
              <FaAppStore className="text-xs sm:text-sm" />
              <span>App Store</span>
            </>
          )}
        </a>
      )}
      {playStore && (
        <a
          href={playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md text-xs sm:text-sm transition-colors"
        >
          {appStoreIcons?.playStore ? (
            <div className="relative h-5 sm:h-6 w-auto">
              <Image
                src={appStoreIcons.playStore}
                alt="Get it on Google Play"
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <>
              <FaGooglePlay className="text-xs sm:text-sm" />
              <span>Play Store</span>
            </>
          )}
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
