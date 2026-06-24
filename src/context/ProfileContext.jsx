import { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [progress, setProgress] = useState(10);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <ProfileContext.Provider
      value={{
        progress,
        setProgress,
        activeStep,
        setActiveStep,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
