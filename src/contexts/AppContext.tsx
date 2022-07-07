import { createContext, ReactNode } from "react";
import { useRequest } from "../hooks/useRequest";
import { Constructor, Driver, Standings } from "../models";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  drivers?: Driver[];
  constructors?: Constructor[];
  standings?: Standings
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const { data: drivers } = useRequest<Driver[]>('drivers.json');
  const { data: constructors } = useRequest<Constructor[]>('constructors.json');
  const { data: standings } = useRequest<Standings>('standings.json');

  return (
    <AppContext.Provider
      value={{
        drivers,
        constructors,
        standings
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
