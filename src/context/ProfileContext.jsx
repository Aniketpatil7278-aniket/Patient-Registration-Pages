import { createContext, useState, useEffect } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    return Number(sessionStorage.getItem("progress")) || 10;
  });

  const [activeStep, setActiveStep] = useState(() => {
    return Number(sessionStorage.getItem("activeStep")) || 0;
  });

  useEffect(() => {
    sessionStorage.setItem("progress", progress);
  }, [progress]);

  useEffect(() => {
    sessionStorage.setItem("activeStep", activeStep);
  }, [activeStep]);

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
