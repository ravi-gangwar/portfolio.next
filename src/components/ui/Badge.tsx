import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "yellow" | "red" | "blue" | "green";
  className?: string;
};

const Badge = ({
  children,
  variant = "yellow",
  className = "",
}: BadgeProps) => {
  const variantClasses = {
    yellow: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    red: "bg-red-500/20 text-red-300 border-red-500/30",
    blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    green: "bg-green-500/20 text-green-300 border-green-500/30",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-sm font-medium border ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
