import { useLastFiveRaces } from "../../hooks/useLastFiveRaces";
import { RacesResults } from "./RacesResults";

export function LastFiveRaces() {
 const { driverRaces } = useLastFiveRaces();

  return (
    <>
      {driverRaces &&
        Array.isArray(driverRaces) &&
        driverRaces.map((driver) => (
          <RacesResults key={driver.driver_id} result={driver} />
        ))}
    </>
  );
}
