import { socials } from "@/constant/socials";
import React from "react";

type SocialCardProps = {
  link: string;
  Icon: React.ElementType;
};

const SocialCard: React.FC<SocialCardProps> = ({ link, Icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center w-15 h-15 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-opacity-80"
    >
        <Icon className="text-blue-400 text-2xl sm:text-4xl" />
    </a>
  );
};

const SocialsSection = () => {


  return (
    <div className="max-w-4xl mx-auto text-white mt-5       ">
      <div className="flex flex-wrap justify-center gap-6">
        {socials.map((social, index) => (
          <SocialCard key={index} {...social} />
        ))}
      </div>
    </div>
  );
};

export default SocialsSection;
