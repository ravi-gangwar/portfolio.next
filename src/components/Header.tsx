"use client";
import React from "react";
import { Lavishly_Yours } from "next/font/google";
import { FaUserFriends } from "react-icons/fa";
import useUniqueUserRegister from "@/hooks/useUniqueUserRegister";
import Loader from "./Loader";

const lavishlyYours = Lavishly_Yours({ subsets: ["latin"], weight: "400" });

const Header: React.FC = () => {
  const {isLoading, visitorCount} = useUniqueUserRegister();
  
  return (
    <header className="relative flex items-center justify-center py-4 w-full border-b border-zinc-700 shadow-md">
      {/* Name in the center */}
      <h3 className={`${lavishlyYours.className} text-2xl text-white tracking-wider drop-shadow-lg`}>
        Ravi Gangwar
      </h3>

      {/* Views aligned to the right */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
        <FaUserFriends color="white" size={18} />
        {
          isLoading ? <Loader/> :
          <p className="text-white text-center text-sm">{visitorCount}</p>
          }
      </div>
    </header>
  );
};

export default Header;
