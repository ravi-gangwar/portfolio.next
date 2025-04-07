"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import Icon from "./Icon";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY === 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { id: "menu", icon: IoMdMenu },
    { id: "home", icon: AiFillHome },
    { id: "back", icon: FaArrowLeftLong },
  ];

  const ctx = useAppContext();
  const handleClick = (id: string) => {
    if (id === "menu") {
      ctx.toggleModal();
    } else if (id === "home") {
      router.push("/");
    } else {
      router.back();
    }
    return;
  };

  return (
    <div
      className={` z-50 fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] lg:max-w-[35vw] h-14 flex justify-around items-center rounded-2xl 
      backdrop-blur-md shadow-lg border border-zinc-700 transition-all duration-500
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
    >
      {tabs.map(({ id, icon }) => (
        <button
          key={id}
          onClick={() => handleClick(id)}
          className="p-3 rounded-full transition-all duration-300 flex items-center justify-center"
        >
          <Icon IconButton={icon} color="white" size="20" />
        </button>
      ))}
    </div>
  );
};

export default Nav;
