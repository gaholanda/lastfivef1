import { createContext, ReactNode, useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";
import { Driver } from "../models/driver";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  drivers?: Driver[];
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const { data: drivers } = useRequest<Driver[]>('drivers.json');

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
