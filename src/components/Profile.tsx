import React from "react";
import CustomImage from "./CustomImage";
import { coverURL } from "@/constant/other";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <CoverImageWithProfile />
      <Introduction />
    </div>
  );
};

const CoverImageWithProfile = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Cover Image Container */}
      <div className="relative w-[90%] rounded-3xl overflow-hidden shadow-lg">
        <CustomImage
          src={coverURL}
          alt="Cover Photo"
          className="h-64 md:h-80 lg:h-96 w-full object-cover"
        />
      </div>

      {/* Profile Image */}
      <div className="relative -mt-14 w-32 h-32 rounded-full overflow-hidden border-4 shadow-md border-animated">
        <CustomImage
          objectFit="cover"
          src={"/image.png"}
          alt="Profile Picture"
          className="h-full w-full object-cover rounded-full"
        />
      </div>
    </section>
  );
};

const Introduction = () => {
  return (
    <div className="text-center mt-4">
      <h1 className="text-3xl font-bold">Ravi Gangwar</h1>
      <p className="text-lg text-gray-300">Full Stack & DevOps Engineer</p>
      <p className="text-md text-gray-400">
        B.Tech 2026 - Information Technology
      </p>
    </div>
  );
};

export default Profile;
