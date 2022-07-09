import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { DriverStanding } from "../../models";

interface DriverInfoProps {
  standing: DriverStanding;
  type: 'heading' | 'row'
}

export function DriverInfo({ standing, type }: DriverInfoProps) {
  const { drivers, teams } = useContext(AppContext);
  const driver = drivers[standing.driver_id];
  const team = teams[driver.team_id];

  if(type === "heading")
  return (
    <div className="card mt-2">
      <div className="card-body">
        <div className="d-flex flex-row align-items-center justify-content-between">
          <h5 className="card-title">{driver.name}</h5>
          <p className="m-0">{standing.points}</p>
        </div>
        <h6 className="card-subtitle mb-2 text-muted">{team.name}</h6>
      </div>
    </div>
  );

  return (
    <div className="py-1">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <p className="m-0">{driver.name}</p>
        <p className="m-0">{standing.points}</p>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-between">
        <p className="m-0 fs-6"><small>{team.name}</small></p>
      </div>
    </div>
  );
}
