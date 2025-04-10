type FeatureCardProps = {
  feature: {
    title: string;
    description: string;
    icon: string;
  };
};

const FeatureCard = ({ feature }: FeatureCardProps) => (
  <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 hover:bg-gray-800/60 transition-all duration-300 border border-gray-700/50">
    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
      <span className="text-xl sm:text-2xl md:text-4xl flex-shrink-0">
        {feature.icon}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
          {feature.title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed line-clamp-3 md:line-clamp-none">
          {feature.description}
        </p>
      </div>
    </div>
  </div>
);

export default FeatureCard;
