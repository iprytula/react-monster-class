import { createContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextInterface {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);