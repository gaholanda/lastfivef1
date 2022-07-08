import { createContext, ReactNode } from "react";
import { useRequest } from "../hooks/useRequest";
import { Teams, Drivers, Standings } from "../models";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  drivers: Drivers;
  teams: Teams;
  standings: Standings;
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const { data: drivers = {} } = useRequest<Drivers>("drivers.json");
  const { data: teams = {} } = useRequest<Teams>("teams.json");
  const { data: standings = {} as Standings } = useRequest<Standings>("standings.json");

  return (
    <AppContext.Provider
      value={{
        drivers,
        teams,
        standings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
