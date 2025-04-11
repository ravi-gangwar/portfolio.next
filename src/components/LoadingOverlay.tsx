import React from "react";
import { motion } from "framer-motion";

interface LoadingOverlayProps {
  isVisible: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center rounded-xl z-10"
    >
      <div className="flex flex-col items-center gap-2">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-12 h-12 border-4 border-white border-t-transparent rounded-full"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-sm font-medium"
        >
          Opening...
        </motion.span>
      </div>
    </motion.div>
  );
};

export default LoadingOverlay;
