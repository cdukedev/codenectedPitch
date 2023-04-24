// contexts/MenuContext.js
import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <MenuContext.Provider value={{ value, setValue }}>
      {children}
    </MenuContext.Provider>
  );
};
