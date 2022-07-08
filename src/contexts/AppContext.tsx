import { createContext, ReactNode } from "react";
import { useRequest } from "../hooks/useRequest";
import { Teams, Drivers } from "../models";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  drivers: Drivers;
  teams: Teams;
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const { data: drivers = {} } = useRequest<Drivers>("drivers.json");
  const { data: teams = {} } = useRequest<Teams>("teams.json");

  return (
    <AppContext.Provider
      value={{
        drivers,
        teams,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
