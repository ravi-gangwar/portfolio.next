import Image from "next/image";

type TCoverImage = {
  src: string;
  alt: string;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  priority?: boolean;
  width?: number;
  height?: number;
};

const CoverImage: React.FC<TCoverImage> = ({
  src,
  alt,
  className = "",
  objectFit = "cover",
  width,
  height,
}) => {
  return (
    <div className={`${className} relative`} style={{ width, height }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit }}
        className="rounded-lg"
      />
    </div>
  );
};

export default CoverImage;
