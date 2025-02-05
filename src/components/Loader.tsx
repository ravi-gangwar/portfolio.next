import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-3 w-3 border-2 border-zinc-100 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
