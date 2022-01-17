import { createContext, useContext, useState } from "react";

const primary = {
  primary100: "rgb(32, 129, 226)",
  primary200: "rgb(24, 104, 183)",
};

const darkMode = {
  background: "rgb(32, 34, 37)",
  onBackground: "rgb(48, 51, 57)",
  border: "rgb(21, 27, 34)",
  gray100: "rgb(255, 255, 255)",
  gray200: "rgba(255, 255, 255, 0.75)",
  gray300: "rgb(138, 147, 155)",
  ...primary,
};

const lightMode = {
  pp: "rgb(243, 251, 254)",
  background: "rgb(255, 255, 255)",
  ...primary,
  green: "rgb(52, 199, 123)",
  red: "rgb(235, 87, 87)",
  gray100: "rgb(4, 17, 29)",
  gray200: "rgb(112, 122, 131)",
  gray300: "rgb(229, 232, 235)",
};

const initialTheme = {
  ...lightMode,
  mode: "light",
};

export const ThemeContext = createContext(initialTheme);

export default function ThemeContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [theme, setTheme] = useState(initialTheme);
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
