import { createContext, useContext } from 'react';

// 1. Create context with default values
export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
});

// 2. Export the Provider directly for clean usage in App.jsx
export const ThemeProvider = ThemeContext.Provider;

// 3. Export custom hook to access context easily in components
export default function useTheme() {
  return useContext(ThemeContext);
}