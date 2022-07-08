import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { useRequest } from "../../hooks/useRequest";
import { DriverRacesResults } from "../../models";

export function LastFiveRaces() {

  const { drivers, races } = useContext(AppContext);
  const { data } = useRequest<DriverRacesResults[]>("last-five-races.json");

  return (
    <main>
      <h3>Last Five Races</h3>
      {
        data && (
          data.map(driver => (
            <div key={driver.driver_id}>
              <p>{drivers[driver.driver_id].name}</p>
              {
                driver.races_results.map(result => (
                  <div key={`${driver.driver_id}-${result.race_id}`}>
                    <p>{races[result.race_id].name}</p>
                    <p>Position: {result.position}</p>
                    <p>Points: {result.points}</p>
                    {result.pole && <p>Pole</p>}
                    {result.fastest_lap && <p>Fastest Lap</p>}
                    {result.sprint_points && <p>Sprint Points: {result.sprint_points}</p>}
                  </div>
                ))
              }
              <br />
            </div>
          ))
        )
      }
    </main>
  );
}
