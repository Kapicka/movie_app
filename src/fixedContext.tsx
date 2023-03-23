import React, { createContext, useContext, useState } from "react";

const FixedContext = createContext<{
  fixed: boolean;
  setFixed: (value: boolean) => void;
}>({
  fixed: false,
  setFixed: (value: boolean) => {},
});

interface Props {
  children: React.ReactNode;
}

export const FixedProvider: React.FC<Props> = ({ children }) => {
  const [fixed, setFixed] = useState(false);
  return (
    <FixedContext.Provider value={{ fixed, setFixed }}>
      {children}
    </FixedContext.Provider>
  );
};

export const useFixed = () => useContext(FixedContext);
