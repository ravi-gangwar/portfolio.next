"use client";
import { useAppContext } from "@/context/AppContext";
import {
  FaHome,
  FaProjectDiagram,
  FaUserTie,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const MenuModal = () => {
  const ctx = useAppContext();
  const router = useRouter();
  if (!ctx.isOpen) return null;

  const handleNavigation = (href: string) => {
    if (href.startsWith("?tag=")) {
      router.push(href);
    } else if (href.startsWith("https://wa.me/")) {
      window.location.href = href;
    } else {
      router.push(href);
    }
    ctx.toggleModal();
  };

  return (
    <motion.div
      className="fixed top-0 inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-full h-full flex flex-col items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={ctx.toggleModal}
          className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition"
        >
          ✕
        </button>
        <nav className="flex flex-col items-center space-y-6 text-white text-lg font-medium">
          {[
            { name: "Home", icon: <FaHome />, href: "/" },
            {
              name: "Projects",
              icon: <FaProjectDiagram />,
              href: "?tab=projects",
            },
            {
              name: "Experience",
              icon: <FaUserTie />,
              href: "?tab=experience",
            },
            { name: "Skills", icon: <FaTools />, href: "?tab=skills" },
            {
              name: "Connect",
              icon: <FaEnvelope />,
              href: "https://wa.me/9389968605",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.href);
              }}
              className="flex items-center gap-4 text-xl px-6 py-3 rounded-xl bg-[#0F172A]/50 hover:bg-[#1E293B]/70 transition-all duration-300 shadow-md backdrop-blur-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon} {item.name}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default MenuModal;
