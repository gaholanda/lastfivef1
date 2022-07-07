import { createContext, ReactNode, useEffect, useState } from "react";
import { useDrivers } from "../hooks/useDrivers";
import { Driver } from "../models/driver";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  drivers?: Driver[];
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [drivers, setDrivers] = useState<Driver[]>();

  useEffect(() => {
    const loadDrivers = async () => {
      const drivers = await useDrivers();
      setDrivers(drivers);
    }
    loadDrivers();
  }, [])

  return (
    <AppContext.Provider
      value={{
        drivers,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
