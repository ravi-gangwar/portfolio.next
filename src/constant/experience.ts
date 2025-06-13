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
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "Redux Persist",
      "RTK Query",
      "Reanimated",
      "Firestore",
      "Firebase Cloud Messaging",
      "Deep Linking",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "PostgreSQL",
      "Google Maps API",
      "Geolocation",
      "Notifications",
      "OpenAI APIs",
      "MCP Servers",
      "PhonePe SDK",
      "HDFC SDK",
      "WebSockets",
      "React Query",
      "Vision Camera",
      "QR Scanner",
      "PDF Generation",
      "Voice Input",
      "Jest",
      "React Native Testing Library",
      "Tailwind CSS",
      "TypeScript"
    ],
    projects: ["Customer Website (Next.js)", "Customer Android & iOS App (React Native)"],
    achievements: [
      "Developed Wyvate's customer platform for Web, Android, and iOS using Next.js and React Native.",
      "Enhanced backend with Node.js and Express; built RESTful APIs and optimized PostgreSQL queries.",
      "Integrated Google Maps APIs, geolocation, deep linking, and push/in-app/time-based notifications.",
      "Engineered dynamic cart logic using Redux Toolkit for offers, add-ons, and pricing calculations.",
      "Built AI-powered chatbot using OpenAI APIs and MCP servers for natural language interactions.",
      "Implemented secure payments via PhonePe, HDFC SDKs, and real-time updates with WebSockets.",
      "Used re-animated, React Query, Firestore, and Redux Persist for caching and seamless data sync.",
      "Integrated native modules: vision camera, QR scanner, PDF generation, and voice input.",
      "Followed clean architecture principles and tested using Jest and React Native Testing Library.",
      "Published Wyvate App on Play Store and App Store, achieving 500+ downloads on Android and 100+ on iOS."
    ],
  },
];