import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { TeamStanding } from "../../models";

interface TeamInfoProps {
  standing: TeamStanding;
}

export default function TeamInfo({ standing }: TeamInfoProps) {
  const { teams } = useContext(AppContext);
  const team = teams[standing.team_id];

  return (
    <>
      {team?.name && (
        <div className="d-flex flex-row py-1 justify-content-between">
          <div
            className={`${standing.team_id}--background`}
            style={{ width: "0.5rem", borderRadius: 2 }}
          ></div>
          <div className="ms-1 flex-grow-1">
            <p className="m-0">{team.name}</p>
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
