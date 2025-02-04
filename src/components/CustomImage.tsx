import React from "react";
import Image from "next/image";

type TCoverImage = {
  src: string;
  alt: string;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  priority?: boolean;
};

const CoverImage: React.FC<TCoverImage> = ({
  src,
  alt,
  className = "",
  objectFit = "cover",
  priority = false,
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        layout="fill" // Makes the image span the entire container
        objectFit={objectFit} // Ensures the image fills the area correctly
        priority={priority}
        className="rounded-lg"
      />
    </div>
  );
};

export default CoverImage;
