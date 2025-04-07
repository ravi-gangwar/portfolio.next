import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CoverImage from "@/components/CustomImage";
import KeywordHighlight from "@/components/KeywordHighlight";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

type HeroProps = {
  name: string;
  tagline: string;
  coverImages: string[];
  keywords: string[];
};

const MobileSlider = ({ images, name }: { images: string[]; name: string }) => (
  <div className="relative w-full h-full">
    <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      {images.map((image, index) => (
        <div key={index} className="flex-none w-full snap-center">
          <CoverImage
            src={image}
            alt={`${name} - Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
);

const DesktopSlider = ({
  images,
  name,
}: {
  images: string[];
  name: string;
}) => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }}
    className="w-full h-full rounded-lg overflow-hidden"
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    }}
  >
    {images.map((image, index) => (
      <SwiperSlide key={index}>
        <CoverImage
          src={image}
          alt={`${name} - Slide ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

const Hero = ({ name, tagline, coverImages, keywords }: HeroProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] mb-4 sm:mb-6 md:mb-8 rounded-lg overflow-hidden">
      {isMobile ? (
        <MobileSlider images={coverImages} name={name} />
      ) : (
        <DesktopSlider images={coverImages} name={name} />
      )}
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
