type FeatureCardProps = {
  feature: {
    title: string;
    description: string;
    icon: string;
  };
};

const FeatureCard = ({ feature }: FeatureCardProps) => (
  <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 hover:bg-gray-800/60 transition-all duration-300 border border-gray-700/50">
    <div className="flex items-start gap-2 xs:gap-3 sm:gap-4 md:gap-5">
      <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl flex-shrink-0">
        {feature.icon}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 xs:mb-2 sm:mb-3 md:mb-4">
          {feature.title}
        </h3>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed line-clamp-2 xs:line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
          {feature.description}
        </p>
      </div>
    </div>
  </div>
);

export default FeatureCard;
