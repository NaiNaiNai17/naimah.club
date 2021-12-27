import {createContext, useState, useEffect} from 'react'

const themes = {
    light:{
        backgroundColor:  "#a7ffeb",
        color: "maroon",
        height: '100vh'
       },

       dark:{
        backgroundColor: "maroon",
        color: "#a7ffeb",
        height: '100vh'
      }
}

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
