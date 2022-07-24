import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { DriverStanding } from "../../models";

interface DriverInfoProps {
  standing: DriverStanding;
  type: "heading" | "row";
}

export function DriverInfo({ standing, type }: DriverInfoProps) {
  const { drivers } = useContext(AppContext);
  const driver = drivers[standing.driver_id];

  if (type === "heading")
    return (
      <>
        {driver?.team_id && (
          <div className={`card mt-2 ${driver.team_id}--background text-light`}>
            <div className="card-body">
              <div className="d-flex flex-row align-items-center justify-content-between">
                <h5 className="card-title m-0">{driver.name}</h5>
                <p className="m-0">
                  <strong>{standing.points}</strong>
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );

  return (
    <>
      {driver?.team_id && (
        <div className="d-flex flex-row py-1 justify-content-between">
          <div
            className={`${driver.team_id}--background`}
            style={{ width: "0.5rem", borderRadius: 2 }}
          ></div>
          <div className="ms-1 flex-grow-1">
            <p className="m-0">
              <small>{driver.name}</small>
            </p>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <p className="m-0">
              <strong>{standing.points}</strong>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
