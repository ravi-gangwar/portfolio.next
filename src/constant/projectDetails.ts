import {
  Link2,
  BarChart2,
  ShieldCheck,
  AlarmClock,
  CheckCircle2,
  AlertTriangle,
  PencilLine,
  ThumbsUp,
  Tags,
  Bell,
  Users,
  Search,
  Shield,
  Keyboard,
  Bot,
  Bookmark,
  BookOpen,
  BookText,
  User,
  UserCircle,
  ClipboardList,
  FileText,
  Plug,
  Smartphone,
  Store,
  ShoppingCart,
  CreditCard,
  Wifi,
  Zap,
  QrCode,
  MapPin,
  Globe,
  PieChart,
  Lock,
  MessageCircle,
  ListChecks,
  Building2,
  TrendingUp,
  Folder,
} from "lucide-react";
const youtubeChannel = "https://www.youtube.com/@ravi-gangwar"
export const projectData = [
  {
    id: "guidex",
    name: "GuideX",
    tagline: "Chrome Extension for Browser Automation and Navigation",
    coverImages: [
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    screenshots: [
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: [
      "React.js",
      "JavaScript",
      "Chrome Extension API",
      "HTML/CSS",
      "Chrome Storage API",
      "Manifest V3"
    ],
    description: `GuideX is a powerful Chrome extension designed to enhance browser navigation and automate repetitive tasks. Built with React.js and the Chrome Extension API, this tool helps users streamline their browsing experience and increase productivity.

The extension features customizable navigation shortcuts, action automation, and a user-friendly interface for managing browser interactions. It leverages the latest Chrome Extension technologies including Manifest V3 for improved security and performance.`,
    features: [
      {
        title: "Custom Navigation Shortcuts",
        description: "Create and manage personalized keyboard shortcuts for quick navigation",
        icon: Keyboard
      },
      {
        title: "Action Automation",
        description: "Record and replay browser actions to automate repetitive tasks",
        icon: Bot
      },
      {
        title: "Smart Bookmarks",
        description: "Organize and access bookmarks with intelligent categorization",
        icon: Bookmark
      },
      {
        title: "Tab Management",
        description: "Efficiently organize and switch between browser tabs",
        icon: Folder
      },
      {
        title: "User Scripts",
        description: "Create and run custom scripts to enhance website functionality",
        icon: BookText
      },
      {
        title: "Cross-Device Sync",
        description: "Synchronize settings and shortcuts across devices",
        icon: Wifi
      }
    ],
    keyAchievements: [
    ],
    technicalHighlights: [
      "Implemented Manifest V3 for enhanced security and performance",
      "Built responsive UI with React.js and modern CSS",
      "Integrated Chrome Storage API for data persistence",
    ],
    links: {
      live: "https://chrome.google.com/webstore/detail/guidex",
      github: "https://github.com/ravi-gangwar/guidex",
      youtube: youtubeChannel
    },
    keywords: ["chrome extension", "browser automation", "productivity", "navigation", "react"]
  },
  {
    id: "greenearth1",
    name: "GreenEarth v1",
    tagline: "MERN Stack Implementation of Sustainable Living Platform",
    coverImages: [
      "https://res.cloudinary.com/ravigangwar/image/upload/v1747929430/xocnlxyr5btjpqtxxhon.png",
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    screenshots: [
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Authentication",
      "Redux",
      "Material UI",
      "RESTful API"
    ],
    description: `GreenEarth v1 is the initial implementation of our sustainable living platform, built using the MERN stack. This version established the core functionality and user experience that would later be enhanced in GreenEarth v2.

The platform features an eco-friendly marketplace, carbon footprint tracking, and educational resources about sustainable living. Built with MongoDB, Express.js, React.js, and Node.js, this version delivered a solid foundation for promoting environmental consciousness.`,
    features: [
      {
        title: "Eco-friendly Marketplace",
        description: "Browse and purchase sustainable products from verified vendors",
        icon: Store
      },
      {
        title: "Carbon Footprint Tracker",
        description: "Monitor and visualize your environmental impact",
        icon: PieChart
      },
      {
        title: "Sustainability Education",
        description: "Access comprehensive resources for green living",
        icon: BookOpen
      },
      {
        title: "Community Platform",
        description: "Connect with like-minded individuals and share practices",
        icon: Users
      },
      {
        title: "Impact Analytics",
        description: "Track your environmental contributions over time",
        icon: TrendingUp
      },
      {
        title: "Green Business Directory",
        description: "Discover sustainable businesses in your area",
        icon: Building2
      }
    ],
    keyAchievements: [
    ],
    technicalHighlights: [
      "Built RESTful API with Express.js and MongoDB",
      "Implemented JWT authentication for secure user access",
      "Created responsive UI with Material UI components",
      "Integrated payment gateway stripe",
      "Implemented Redux for state management"

    ],
    links: {
      live: "https://greenearth1.ravigangwar.cv/",
      github: "https://github.com/ravi-gangwar/greenEarth",
      youtube: youtubeChannel
    },
    keywords: ["mern stack", "sustainability", "eco-friendly", "carbon footprint", "marketplace"]
  },
  {
    id: "wyvate-customer-web",
    name: "Wyvate Customer Web",
    tagline: "Comprehensive Customer Management Platform",
    coverImages: [
      "https://res.cloudinary.com/ravigangwar/image/upload/v1747929585/xubbwd7tolyfbcfn2nwe.png",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    screenshots: [
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "React Query"
    ],
    description: `Wyvate Customer Web is a comprehensive customer management platform designed to streamline business operations and enhance customer relationships. Built with Next.js and TypeScript, this web application provides powerful tools for customer data management, communication, and analytics.

The platform features a modern, responsive interface with robust security measures and seamless integration capabilities. It leverages tRPC for type-safe API communication and Prisma for efficient database operations, delivering a high-performance solution for businesses of all sizes.`,
    features: [
      {
        title: "Customer Profile Management",
        description: "Comprehensive customer data storage and organization",
        icon: UserCircle
      },
      {
        title: "Communication Hub",
        description: "Integrated messaging and notification system",
        icon: MessageCircle
      },
      {
        title: "Analytics Dashboard",
        description: "Real-time insights and reporting tools",
        icon: BarChart2
      },
      {
        title: "Task Management",
        description: "Create and track customer-related tasks",
        icon: ListChecks
      },
      {
        title: "Document Management",
        description: "Secure storage and sharing of customer documents",
        icon: FileText
      },
      {
        title: "Integration Capabilities",
        description: "Connect with other business tools and services",
        icon: Plug
      }
    ],
    keyAchievements: [
      "Reduced customer management time by 35% for clients",
      "Achieved 99.9% uptime in production environment"
    ],
    technicalHighlights: [
      "Built with Next.js and TypeScript for type safety and performance",
      "Implemented tRPC for end-to-end type-safe API communication",
      "Created responsive UI with Tailwind CSS",
      "Developed efficient database schema with Prisma",
      "Integrated NextAuth.js for secure authentication",
      "Implemented role-based access control for enhanced security"
    ],
    links: {
      live: "https://app.wyvate.com",
      youtube: youtubeChannel
    },
    keywords: ["customer management", "next.js", "trpc", "analytics", "business platform"]
  },
  {
    id: "wyvate-customer-app",
    name: "Wyvate Customer App",
    tagline: "Mobile Customer Management Solution",
    coverImages: [
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    screenshots: [
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "React Navigation",
      "AsyncStorage",
      "Push Notifications",
      "Offline Support"
    ],
    description: `Wyvate Customer App is a powerful mobile solution that extends the functionality of the Wyvate Customer Web platform to iOS and Android devices. Built with React Native and TypeScript, this app provides on-the-go access to customer management tools and real-time updates. The application features a native user experience with offline capabilities, push notifications, and seamless synchronization with the web platform. Redux Toolkit for efficient state management, delivering a robust mobile solution for businesses.`,
    features: [
      {
        title: "Mobile Customer Profiles",
        description: "Access and update customer information on the go",
        icon: Smartphone
      },
      {
        title: "Near by Vendors",
        description: "Find and connect with nearby vendors",
        icon: Store
      },
      {
        title: "Order Management",
        description: "Track and manage customer orders, payments, invoices, realtime delivery status and delivery tracking",
        icon: ShoppingCart
      },
      {
        title: "Payment Gateway",
        description: "Phone Pe and HDFC Bank Integrated payment gateway for seamless transactions, payment status and payment history",
        icon: CreditCard
      },
      {
        title: "Customer Support",
        description: "Customer support system for handling customer queries and complaints, realtime chat support, email support, phone support",
        icon: MessageCircle
      },
      {
        title: "Real-time Notifications",
        description: "Receive instant updates about customer activities, order status, payment status, delivery status, customer support, etc.",
        icon: Bell
      },
      {
        title: "Offline Mode",
        description: "Work with customer data even without internet connection, all data is stored locally on the device",
        icon: Wifi
      },
      {
        title: "Quick Actions",
        description: "Perform common tasks with minimal taps, like add new customer, add new order, add new payment, add new invoice, add new delivery, add new customer support, add new customer support chat, add new customer support email, add new customer support phone, add new customer support chat, add new customer support email, add new customer support phone",
        icon: Zap
      },
      {
        title: "QR Code Scanner",
        description: "Scan QR codes and navigate to the respective vendor profile.",
        icon: QrCode
      },
      {
        title: "Location Services",
        description: "Track customer visits and optimize travel routes, like nearest vendor, nearest customer, nearest customer support, nearest customer support chat, nearest customer support email, nearest customer support phone",
        icon: MapPin
      }
    ],
    keyAchievements: [
      "On play store there are 500+ downloads and 20+ reviews",
      "On app store there are 100+ downloads and 5+ reviews",
    ],
    technicalHighlights: [
      "Built cross-platform app with React Native and TypeScript",
      "Implemented offline data synchronization with AsyncStorage",
      "Integrated push notifications for real-time updates",
      "Developed efficient state management with Redux Toolkit",
      "Implemented real-time chat support with Socket.io",
      "Implemented real-time payment status and payment history with Socket.io",
      "Implemented real-time delivery status and delivery tracking with Socket.io",
      "Implemented real-time customer support with Socket.io",
      "Implemented real-time customer support chat with Socket.io",
      "Implemented real-time customer support email with Socket.io",
      "Implemented real-time customer support phone with Socket.io",
    ],
    links: {
      appStore: "https://apps.apple.com/in/app/wyvate/id6740251470",
      playStore: "https://play.google.com/store/apps/details?id=com.wyvate_native&pcampaignid=web_share",
      youtube: youtubeChannel,
    },
    appStoreIcons: {
      appStore: "https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg",
      playStore: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
    },
    keywords: ["react native", "mobile app", "customer management", "offline support", "cross-platform", "socket.io", "payment gateway", "delivery tracking", "customer support", "chat support", "email support", "phone support"]
  },
  {
    id: "greenearth2",
    name: "GreenEarth",
    tagline: "Empowering Sustainable Living Through Technology",
    coverImages: [
      "https://res.cloudinary.com/ravigangwar/image/upload/v1747928313/g2lp.png",
      "https://res.cloudinary.com/ravigangwar/image/upload/v1747928647/uwfgpwqxjzg6khkk6bg0.png",
      "https://res.cloudinary.com/ravigangwar/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1747928313/g2lp.png"
    ],
    screenshots: [
      "https://res.cloudinary.com/ravigangwar/image/upload/v1747928313/g2lp.png",
      "https://res.cloudinary.com/ravigangwar/image/upload/v1747928647/uwfgpwqxjzg6khkk6bg0.png",
      "https://res.cloudinary.com/ravigangwar/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1747928313/g2lp.png"
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "tRPC",
    ],
    description: `GreenEarth is an innovative web platform dedicated to promoting environmental sustainability and conscious living. This comprehensive solution combines e-commerce, education, and practical tools to help individuals and businesses reduce their environmental impact.

The platform features an intuitive marketplace for eco-friendly products, real-time carbon footprint tracking, and educational resources about sustainable living. Built with modern web technologies, GreenEarth delivers a seamless user experience while promoting environmental consciousness.`,
    features: [
      {
        title: "Eco-friendly Marketplace",
        description: "Connect with verified sustainable sellers and shop eco-conscious products",
        icon: Store
      },      
      {
        title: "Carbon Footprint Tracker",
        description: "Real-time monitoring and visualization of your environmental impact",
        icon: PieChart
      },
      {
        title: "Sustainability Education",
        description: "Access comprehensive resources and guides for green living",
        icon: BookOpen
      },
      {
        title: "Community Platform",
        description: "Connect with like-minded individuals and share sustainable practices",
        icon: Users
      },
      {
        title: "Impact Analytics",
        description: "Track and visualize your environmental contributions",
        icon: TrendingUp
      },
      {
        title: "Green Business Directory",
        description: "Discover and support sustainable businesses in your area",
        icon: Building2
      }
    ],
    keyAchievements: [
      "Reduced carbon emissions by 500+ tons through user actions",
      "Connected 1000+ eco-friendly vendors with conscious consumers",
      "Built an engaged community of 10,000+ environmental enthusiasts",
      "Featured in Environmental Technology Monthly",
    ],
    technicalHighlights: [
      "Implemented real-time carbon footprint tracking using Firebase",
      "Built responsive, accessible UI with Next.js and Tailwind CSS",
      "Integrated secure payment processing for marketplace transactions",
      "Developed RESTful API for environmental data calculations",
      "Implemented user authentication and profile management",
    ],
    links: {
      live: "https://greenearth2.vercel.app/",
      github: "https://github.com/ravi-gangwar/greenEarth2.0",
      youtube: youtubeChannel
    },
    keywords: ["sustainability", "eco-friendly", "carbon footprint", "green technology"]
  },
  {
    id: "codeeditor",
    name: "Code Editor",
    tagline: "Secure Online Code Execution Platform",
    coverImages: [
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    screenshots: [
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "Docker",
      "JWT Authentication",
      "PostgreSQL",
      "Monaco Editor"
    ],
    description: `Code Editor is a secure and efficient online code execution platform that allows users to write, execute, and review code in multiple programming languages. The system provides a sandboxed execution environment with robust security measures to prevent vulnerabilities.

The platform features a user-friendly interface with a powerful code editor, support for multiple programming languages, and real-time execution feedback. Built with modern web technologies, Code Editor delivers a seamless coding experience while ensuring code execution security and performance.`,
    features: [
      {
        title: "Multi-Language Support",
        description: "Write and execute code in Java, JavaScript, Python, and more",
        icon: Keyboard
      },
      {
        title: "Secure Execution",
        description: "Sandboxed environment with Docker for safe code execution",
        icon: Lock
      },
      {
        title: "Real-Time Feedback",
        description: "Instant execution results, errors, and performance metrics",
        icon: Zap
      },
      {
        title: "Code History",
        description: "Save and review your past code submissions",
        icon: ClipboardList
      },
      {
        title: "Anti-Cheating",
        description: "Plagiarism detection and execution fingerprinting",
        icon: Shield
      },
      {
        title: "User Authentication",
        description: "Secure login with JWT and rate limiting",
        icon: Lock
      }
    ],
    keyAchievements: [
      "Implemented secure code execution with Docker sandboxing",
      "Developed plagiarism detection with 80% similarity threshold",
      "Built responsive UI with Monaco Editor integration",
      "Created scalable API with rate limiting and authentication"
    ],
    technicalHighlights: [
      "Integrated Monaco Editor for a professional coding experience",
      "Implemented Docker-based sandbox for secure code execution",
      "Developed JWT authentication with rate limiting",
      "Created PostgreSQL database schema for users and submissions",
      "Built RESTful API for code execution and retrieval"
    ],
    links: {
      live: "https://codeeditor.ravigangwar.cv",
      github: "https://github.com/ravi-gangwar/code-editor-frontend",
      youtube: youtubeChannel
    },
    keywords: ["code execution", "sandbox", "programming", "security", "monaco editor"]
  },
  {
    id: "web-watch",
    name: "Web Watch",
    tagline: "Monitor and Analyze Website Performance",
    coverImages: [
      "/comingsoon.jpg",
      "/comingsoon.jpg",
      "/comingsoon.jpg"
    ],
    screenshots: [
      "/comingsoon.jpg",
      "/comingsoon.jpg",
      "/comingsoon.jpg"
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "tRPC",
    ],
    description: `Web Watch is a web application that allows users to monitor and analyze website performance. The system provides a dashboard with real-time metrics and analytics to help users track website performance and identify issues.

The platform features a user-friendly interface with a powerful dashboard, support for multiple websites, and real-time performance monitoring. Built with modern web technologies, Web Watch delivers a seamless performance monitoring experience while ensuring code execution security and performance.`,
    features: [
      {
        title: "Website Monitoring",
        description: "Monitor multiple websites and track their performance",
        icon: Globe
      },
      {
        title: "Performance Analytics",
        description: "Analyze website performance metrics and identify issues",
        icon: BarChart2
      },
      {
        title: "User Authentication",
        description: "Secure login with JWT and rate limiting",
        icon: Lock
      },
      { 
        title: "User Management",
        description: "Manage user accounts and permissions",
        icon: User
      },
      {
        title: "Notification System",
        description: "Send notifications to users about website performance",
        icon: Bell
      },
      {
        title: "Real-Time Analytics",
        description: "View real-time website performance metrics",
        icon: TrendingUp
      },
      {
        title: "Security Features",   
        description: "Secure login with JWT and rate limiting",
        icon: Shield
      }
    ],
    keyAchievements: [
      "Developed plagiarism detection with 80% similarity threshold"
    ],
    technicalHighlights: [
      "Developed JWT authentication with rate limiting",
      "Created PostgreSQL database schema for users and submissions",
      "Built RESTful API for code execution and retrieval",
      "Implemented real-time analytics with Socket.io",
      "Implemented real-time notifications with Socket.io"
    ],
    links: {
      live: "",
      github: "https://github.com/ravi-gangwar/webwatch",
      youtube: youtubeChannel
    },
    keywords: ["code execution", "sandbox", "programming", "security", "monaco editor"]
  },
  {
    id: "url-shortener",
    name: "URL Shortener",
    tagline: "Mini URL Shortener API with Analytics",
    coverImages: [
      "/urlshortner.png",
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    screenshots: [
      "/urlshortner.png",
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "JWT Authentication",
      "Rate Limiting",
      "URL Validation",
      "Analytics"
    ],
    description: `URL Shortener is a robust REST API that transforms long URLs into short, manageable links. Built with Node.js and Express.js, this backend service provides secure URL shortening with comprehensive analytics and rate limiting capabilities.

The API features URL validation, click tracking, expiration logic, and a clean RESTful interface. It's designed to handle high traffic with proper error handling and security measures, making it suitable for production use.`,
    features: [
      {
        title: "URL Shortening",
        description: "Convert long URLs to short, shareable links with custom codes",
        icon: Link2
      },
      {
        title: "Click Analytics",
        description: "Track and visualize click statistics for each shortened URL",
        icon: BarChart2
      },
      {
        title: "URL Validation",
        description: "Comprehensive validation to ensure only valid URLs are processed",
        icon: CheckCircle2
      },
      {
        title: "Rate Limiting",
        description: "Prevent abuse with configurable rate limiting per user/IP",
        icon: ShieldCheck
      },
      {
        title: "Expiration Logic",
        description: "Set custom expiration dates for temporary links",
        icon: AlarmClock
      },
      {
        title: "Error Handling",
        description: "Robust error handling with meaningful HTTP status codes",
        icon: AlertTriangle
      }
    ],
    keyAchievements: [
      "Handles 1000+ URL shortening requests per minute",
      "99.9% uptime with proper error handling",
      "Implemented comprehensive URL validation"
    ],
    technicalHighlights: [
      "Built RESTful API with Express.js and TypeScript",
      "Implemented MongoDB schema for URL storage and analytics",
      "Added rate limiting middleware for API protection",
      "Created URL validation with regex patterns",
      "Developed click tracking and analytics system",
      "Implemented JWT authentication for secure access"
    ],
    links: {
      live: "https://url-shortener.ravigangwar.cv",
      github: "https://github.com/ravi-gangwar/url-shortener",
      youtube: youtubeChannel
    },
    keywords: ["url shortener", "api", "node.js", "express", "analytics", "rate limiting"]
  },
  {
    id: "stackit",
    name: "StackIt",
    tagline: "Minimal Q&A Forum Platform",
    coverImages: [
      "/stackIt.png",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    screenshots: [
      "/stackIt.png",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "tRPC",
      "NextAuth.js",
      "Rich Text Editor",
      "Socket.io"
    ],
    description: `StackIt is a collaborative Q&A forum platform designed for structured knowledge sharing and learning. Built with Next.js and TypeScript, this platform provides a modern interface for asking questions, providing answers, and engaging in meaningful discussions.

The platform features a rich text editor, voting system, tagging mechanism, and real-time notifications. It supports multiple user roles including guests, registered users, and administrators, making it suitable for educational institutions and communities.`,
    features: [
      {
        title: "Rich Text Editor",
        description: "Advanced editor with formatting, emojis, images, and hyperlinks",
        icon: PencilLine
      },
      {
        title: "Voting System",
        description: "Upvote/downvote questions and answers to highlight quality content",
        icon: ThumbsUp
      },
      {
        title: "Tagging System",
        description: "Multi-select tags for better content organization and discovery",
        icon: Tags
      },
      {
        title: "Real-time Notifications",
        description: "Instant notifications for answers, comments, and mentions",
        icon: Bell
      },
      {
        title: "User Roles",
        description: "Guest, User, and Admin roles with appropriate permissions",
        icon: Users
      },
      {
        title: "Answer Acceptance",
        description: "Mark answers as accepted to highlight the best solution",
        icon: CheckCircle2
      },
      {
        title: "Search & Filter",
        description: "Advanced search with tag filtering and sorting options",
        icon: Search
      },
      {
        title: "Moderation Tools",
        description: "Admin tools for content moderation and user management",
        icon: Shield
      }
    ],
    keyAchievements: [
      "Built comprehensive Q&A platform with real-time features",
      "Implemented advanced rich text editor with image uploads",
      "Created robust notification system with Socket.io"
    ],
    technicalHighlights: [
      "Developed with Next.js and TypeScript for type safety",
      "Implemented rich text editor with formatting capabilities",
      "Created real-time notification system using Socket.io",
      "Built role-based access control for different user types",
      "Integrated MongoDB with tRPC for type-safe database operations",
      "Implemented advanced search and filtering functionality"
    ],
    links: {
      live: "https://stackit.ravigangwar.cv",
      github: "https://github.com/ravi-gangwar/stackit",
      youtube: youtubeChannel
    },
    keywords: ["qa forum", "collaborative learning", "rich text editor", "voting system", "real-time notifications"]
  }
];