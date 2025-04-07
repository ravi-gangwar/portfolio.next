import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CoverImage from "@/components/CustomImage";
import KeywordHighlight from "@/components/KeywordHighlight";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

type HeroProps = {
  name: string;
  tagline: string;
  coverImages: string[];
  keywords: string[];
};

const Hero = ({ name, tagline, coverImages, keywords }: HeroProps) => (
  <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] mb-4 sm:mb-6 md:mb-8 rounded-lg overflow-hidden">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="w-full h-full"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      }}
    >
      {coverImages.map((image, index) => (
        <SwiperSlide key={index}>
          <CoverImage
            src={image}
            alt={`${name} - Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 z-10 w-full">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
        {name}
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-200 line-clamp-2 md:line-clamp-none">
        <KeywordHighlight text={tagline} keywords={keywords} />
      </p>
    </div>
  </div>
);

export default Hero;
