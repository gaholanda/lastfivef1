import { Standings } from "../models";
import { useRequest } from "./useRequest";

export function useStandings() {
  const { data: standings } = useRequest<Standings>("standings.json");

  if(standings) {
    standings.drivers = standings.drivers.sort((a, b) => b.points - a.points);
    standings.teams = standings.teams.sort((a, b) => b.points - a.points);
  }

  return { standings };
}
