export type TExperience = {
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  skills: string[];
  projects: string[];
  achievements: string[];
};

export const experiences: TExperience[] = [
  {
    companyName: "Wyvate",
    role: "Software Developer",
    startDate: "May 2024",
    endDate: "Present",
    location: "Hybrid, Kanpur",
    description:
      "As a Software Developer at Wyvate, I developed both the customer website and the customer React Native app for Android and iOS platforms. My work involved full-stack development, ensuring seamless user experiences across multiple devices.",
    skills: ["React", "Next js", "React Native", "RTK", "RTK Query", "Re-aminmated", "Firabase cloud messaging", "Deep links", "Node.js", "Tailwind CSS", "TypeScript", "Google Maps API"],
    projects: ["Customer Website (Next.js).", "Customer Android & iOS App (React Native)."],
    achievements: [
      "Built a fully functinal customer website with Next.js.",
      "Developed a cross-platform mobile app for Android and iOS with React Native used by 10,000+ customers.",
      "Implemented a dynamic payment gateway solution for seamless transactions.",
    ],
  },
];