"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type ShutdownContextType = {
  open: boolean;
  startShutdown: () => void;
  closeShutdown: () => void;
};

const ShutdownContext = createContext<ShutdownContextType | null>(null);

export function ShutdownProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const startShutdown = () => {
    setOpen(true);
  };

  const closeShutdown = () => {
    setOpen(false);
  };

  return (
    <ShutdownContext.Provider
      value={{
        open,
        startShutdown,
        closeShutdown,
      }}
    >
      {children}
    </ShutdownContext.Provider>
  );
}

export function useShutdown() {
  const context = useContext(ShutdownContext);

  if (!context) {
    throw new Error(
      "useShutdown must be used inside ShutdownProvider"
    );
  }

  return context;
}