import { TExperience, experiences } from '@/constant/experience';
import React from 'react';

const ExperienceSection: React.FC<TExperience> = ({
  companyName,
  role,
  startDate,
  endDate,
  location,
  description,
  skills,
  projects,
  achievements,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 text-white shadow-2xl rounded-2xl mb-8 transform transition-all">
      <div className="flex flex-col mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white mb-1">{role}</h2>
          <p className="text-lg text-gray-400 font-medium">{companyName}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            {startDate} - {endDate}
          </p>
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm text-left text-gray-300 leading-relaxed">{description}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Key Achievements</h3>
        <ul className="space-y-3">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-3">•</span>
              <p className="text-gray-300 text-left text-sm">{achievement}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Skills & Technologies</h3>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <li key={index} className="bg-blue-600 text-blue-100 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-all">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-4">Projects</h3>
        <ul className="space-y-3">
          {projects.map((project, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-3">•</span>
              <p className="text-gray-300 text-sm">{project}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const ExperienceList: React.FC = () => {
  return (
    <div>
      {experiences.map((experience, index) => (
        <ExperienceSection key={index} {...experience} />
      ))}
    </div>
  );
};

export default ExperienceList;
