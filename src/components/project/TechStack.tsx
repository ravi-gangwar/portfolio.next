type TechStackProps = {
  technologies: string[];
};

const TechStack = ({ technologies }: TechStackProps) => (
  <div className="mb-4 sm:mb-6 md:mb-8">
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">
      Technologies Used
    </h2>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-gray-800 text-white rounded-lg text-xs sm:text-sm hover:bg-gray-700 transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default TechStack;
