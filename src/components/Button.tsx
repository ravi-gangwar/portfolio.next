import React from 'react';

type TButton =  {
    title: string;
    onClick?: () => void;
}

const Button : React.FC<TButton>= ({title}) => {
  return (
    <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-[#2563EB] to-[#1E40AF] group-hover:from-[#1D4ED8] group-hover:to-[#1E3A8A] focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#3B82F6] dark:bg-[#1E40AF] rounded-md group-hover:bg-opacity-0">
        {title}
      </span>
    </button>

  );
};

export default Button;