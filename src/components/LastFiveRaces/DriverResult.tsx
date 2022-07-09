import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { DriverRacesResults } from "../../models";

interface ResultProps {
  driver: DriverRacesResults;
}

export function DriverRaceResult({ driver }: ResultProps) {
  const { drivers, races } = useContext(AppContext);

  return (
    <>
      {Array.isArray(driver.races_results) && (
        <div>
          <p>{drivers[driver.driver_id].name}</p>
          <p>Total Points: {driver.total_points}</p>
          {driver.races_results.map((result) => {
            return (
              <div key={`${driver.driver_id}-${result.race_id}`}>
                <p>{races[result.race_id].name}</p>
                <p>Position: {result.position}</p>
                <p>Points: {result.points}</p>
                {result.pole && <p>Pole</p>}
                {result.fastest_lap && <p>Fastest Lap</p>}
                {result.sprint_points && (
                  <p>Sprint Points: {result.sprint_points}</p>
                )}
              </div>
            );
          })}
          <br />
        </div>
      )}
    </>
  );
}
