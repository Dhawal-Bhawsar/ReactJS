// ThemeContext removed - app is now full dark mode
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ isDark: true, toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

