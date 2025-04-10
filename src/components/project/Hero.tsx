import KeywordHighlight from "@/components/KeywordHighlight";
import CustomCarousel from "@/components/ui/CustomCarousel";

type HeroProps = {
  name: string;
  tagline: string;
  coverImages: string[];
  keywords: string[];
};

const Hero = ({ name, tagline, coverImages, keywords }: HeroProps) => {
  return (
    <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] mb-4 sm:mb-6 md:mb-8 rounded-lg overflow-hidden">
      <CustomCarousel images={coverImages} name={name} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 p-2 xs:p-3 sm:p-4 md:p-6 z-10 w-full">
        <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 xs:mb-2">
          {name}
        </h1>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-200 line-clamp-2 md:line-clamp-none">
          <KeywordHighlight text={tagline} keywords={keywords} />
        </p>
      </div>
    </div>
  );
};

export default Hero;
