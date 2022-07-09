import { useRequest } from "../../hooks/useRequest";
import { DriverRacesResults } from "../../models";
import { DriverRaceResult } from "./DriverResult";

export function LastFiveRaces() {
  const { data: racesResults } = useRequest<DriverRacesResults[]>("last-five-races.json");

  return (
    <main>
      <h3>Last Five Races</h3>
      {racesResults &&
        Array.isArray(racesResults) &&
        racesResults.sort((a, b) => b.total_points - a.total_points).map((driver) => (
          <DriverRaceResult key={driver.driver_id} driver={driver} />
        ))}
    </main>
  );
}
