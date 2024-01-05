import React ,{createContext,useContext} from "react";

export const ThemeContext = createContext({  // 1. Create context
    themeMode: "light", // 2. Set default value
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider; // 3. Create provider

export default function useTheme(){
    return useContext(ThemeContext);// 4. Create custom hook
}