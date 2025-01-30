import React, { createContext, useContext, useState } from 'react';

// Create Context
const AppContext = createContext();

// Context Provider
export const AppProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState(null); // Track current active element ID

  const toggleMenu = () => setMenuOpen(prevState => !prevState);
  const toggleSearch = () => setSearchOpen(prevState => !prevState);

  return (
    <AppContext.Provider
      value={{
        toggleMenu,
        toggleSearch,
        menuOpen,
        searchOpen,
        currentActive, // Providing current active state
        setCurrentActive // Providing function to update the current active state
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook to use context
export const useAppContext = () => useContext(AppContext);
