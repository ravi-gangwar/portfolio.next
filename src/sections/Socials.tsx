import { socials } from "@/constant/socials";
import React from "react";

type SocialCardProps = {
  link: string;
  Icon: React.ElementType;
  name: string;
};

const getIconColor = (name: string) => {
  switch (name.toLowerCase()) {
    case "facebook":
      return "#1877F2"; // Hex color for Facebook
    case "twitter":
      return "#1DA1F2"; // Hex color for Twitter
    case "instagram":
      return "#E1306C"; // Hex color for Instagram
    case "linkedin":
      return "#0A66C2"; // Hex color for LinkedIn
    case "github":
      return "#333"; // Hex color for GitHub
    default:
      return "#3b5998"; // Default hex color
  }
};

const SocialCard: React.FC<SocialCardProps> = ({ link, Icon, name }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex mt-5 flex-col items-center justify-center w-24 h-24 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 hover:bg-opacity-80 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900"
    >
      <Icon
        color={getIconColor(name)} // Use the hex color from getIconColor
        className="text-4xl sm:text-6xl mb-3"
      />
      <span className="text-base sm:text-lg text-white font-medium">
        {name}
      </span>
    </a>
  );
};

const SocialsSection = () => {
  return (
    <section className="max-w-4xl mx-auto text-white mt-12 mb-6 border-t border-zinc-700 pt-6 px-6">
      <div className="flex flex-wrap justify-center gap-10 mt-10 p-10">
        {socials.map((social, index) => (
          <SocialCard key={index} {...social} />
        ))}
      </div>
    </section>
  );
};

export default SocialsSection;
