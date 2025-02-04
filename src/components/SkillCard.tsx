import React from "react";
import CoverImage from "./CustomImage";

interface SkillCardProps {
  name: string;
  image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, image }) => {
  return (
    <div className="relative w-full h-36 sm:h-40 md:h-44 lg:h-48 bg-zinc-900/50 border border-zinc-700 
                    backdrop-blur-lg rounded-lg flex flex-col items-center justify-center p-4">
      {/* Skill Image */}
      <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
        <CoverImage src={image} alt={name} className="w-full h-full object-contain" />
      </div>

      {/* Skill Name */}
      <p className="mt-2 text-white text-sm md:text-base font-semibold">{name}</p>
    </div>
  );
};

export default SkillCard;
