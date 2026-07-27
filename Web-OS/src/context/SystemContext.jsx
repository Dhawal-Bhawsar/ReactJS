import { createContext, useState } from "react";

export const SystemContext = createContext();

export const SystemProvider = ({ children }) => {
  const [wallpaper, setWallpaper] = useState("https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2070&auto=format&fit=crop");

  return (
    <SystemContext.Provider value={{ wallpaper, setWallpaper }}>
      {children}
    </SystemContext.Provider>
  );
};
