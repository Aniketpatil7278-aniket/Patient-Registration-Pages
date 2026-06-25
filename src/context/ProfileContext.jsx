import { createContext, useState, useEffect } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    return Number(localStorage.getItem("progress")) || 10;
  });

  const [activeStep, setActiveStep] = useState(() => {
    return Number(localStorage.getItem("activeStep")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("progress", progress);
  }, [progress]);

  useEffect(() => {
    localStorage.setItem("activeStep", activeStep);
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
