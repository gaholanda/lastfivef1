import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { DriverRacesResults } from "../../models";
import { DriverPoints } from "./DriverPoints";
import { RaceResult } from "./RaceResult";

interface RaceResultsProps {
  result: DriverRacesResults;
}

export function RacesResults({ result }: RaceResultsProps) {
  const { drivers, races, points } = useContext(AppContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (Object.keys(drivers).length > 0 && Object.keys(races).length > 0) {
      setIsLoaded(true);
    }
  }, [drivers, races]);

  return (
    <>
      {isLoaded && (
        <div className="card bg-dark mb-2">
          <div className="card-body">
            <DriverPoints driver={drivers[result.driver_id]} points={result.total_points} />
            <div className="d-flex flex-row justify-content-between">
              {
                result.races_results.map(race => (
                  <RaceResult 
                    key={`${result.driver_id}-${race.race_id}`}
                    name={races[race.race_id].name} 
                    flag={races[race.race_id].flag}
                    position={race.position}
                    race_points={race.race_points}
                    pole={race.pole} 
                    fastest_lap={race.fastest_lap}
                    sprint_points={race.sprint_points}
                  />
                ))
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
}
