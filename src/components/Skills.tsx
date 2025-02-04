import React from "react";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/constant/skills";
import Heading from "./Heading";

const Skills = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4">
      {skills.map((category, index) => (
        <div key={index} className="mb-12">
          {/* Category Heading */}
          <Heading name={category.category.charAt(0).toUpperCase() + category.category.slice(1)}/>

          {/* Skill Cards */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 w-full">
            {category.skills.map((skill, skillIndex) => (
              <SkillCard key={skillIndex} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
