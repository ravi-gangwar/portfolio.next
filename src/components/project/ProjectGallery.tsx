type ProjectGalleryProps = {
  screenshots: string[];
};

const ProjectGallery = ({ screenshots }: ProjectGalleryProps) => (
  <div className="mt-6 sm:mt-8 md:mt-12 mb-4 sm:mb-6 md:mb-8">
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">
      Project Gallery
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
      {screenshots.map((src, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-lg group">
          <div className="aspect-video relative">
            <img
              src={src}
              alt={`Project Screenshot ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectGallery;
