import { createContext, ReactNode } from "react";
import { useRequest } from "../hooks/useRequest";
import { Teams, Drivers, Races } from "../models";
import { Points } from "../models/points";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  drivers: Drivers;
  teams: Teams;
  races: Races;
  points: Points;
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppProviderProps) {
  const { data: drivers = {} } = useRequest<Drivers>("drivers.json");
  const { data: teams = {} } = useRequest<Teams>("teams.json");
  const { data: races = {} } = useRequest<Races>("races.json");
  const { data: points = {} as Points } = useRequest<Points>("points.json");

  return (
    <AppContext.Provider
      value={{
        drivers,
        teams,
        races,
        points
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
