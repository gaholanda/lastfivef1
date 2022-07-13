import { Driver } from "../../models";

interface DriverPointsProps {
  driver: Driver;
  points: number;
}

export function DriverPoints({ driver, points }: DriverPointsProps) {
  const teamTag = { width: "0.5rem", borderRadius: 2 };

  return (
    <div className="d-flex flex-row justify-content-between mb-2">
      <div className="flex-grow-1 d-flex flex-row">
        <div
          className={`${driver.team_id}--background me-2`}
          style={teamTag}
        ></div>
        <p className="card-text fs-5 m-0">
          <strong>{driver.name}</strong>
        </p>
      </div>
      <p className="m-0 fs-5">
        <strong>{points}</strong>
      </p>
    </div>
  );
}
