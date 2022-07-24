import { DriverRacesResults } from "../models";
import { useRequest } from "./useRequest";

export function useLastFiveRaces() {
  const { data: driverRaces } = useRequest<DriverRacesResults[]>("last-five-races.json");

  if(driverRaces) {
    driverRaces.forEach(driver => {
      let _points = 0;
      driver.races_results.forEach(race => {
        _points += race.race_points;
        if(race.fastest_lap) _points += 1;
        if(race.sprint_points) _points += race.sprint_points;
      })
      driver.total_points = _points;
    })
    driverRaces.sort((a, b) => b.total_points - a.total_points);
  }

  return { driverRaces };
}
