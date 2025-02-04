"use client"; // Required for Next.js if using state

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface AppContextType {
  isOpen: boolean;
  toggleModal: () => void;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Context Provider Component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <AppContext.Provider value={{ isOpen, toggleModal }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
