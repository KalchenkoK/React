import { createContext } from "react";

const themeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const light = { color: "black", backgroundColor: "yellow" };
  const dark = { color: "white", backgroundColor: "black" };

  const res = {
    light,
    dark,
  };

  return <themeContext.Provider value={res}>{children}</themeContext.Provider>;
};

export default themeContext;
