import React from "react";
import { Lavishly_Yours } from "next/font/google";

const lavishlyYours = Lavishly_Yours({ subsets: ["latin"], weight: "400" });

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center py-4 w-full border-b border-zinc-700 shadow-md">
      <h3 className={`${lavishlyYours.className} text-2xl text-white tracking-wider drop-shadow-lg`}>
        Ravi Gangwar
      </h3>
    </header>
  );
};

export default Header;
