import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const defaultTheme = 'light';
  const [theme, setTheme] = useState(defaultTheme);
  const context = {
    theme,
    switchTheme: () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    },
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
