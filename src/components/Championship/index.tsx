import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { useRequest } from "../../hooks/useRequest";
import {
  DriverStanding,
  Standings,
  TeamStanding,
} from "../../models/standings";
import { DriverInfo } from "./DriverInfo";

export function Championship() {
  const { teams } = useContext(AppContext);
  const { data: standings = {} as Standings } =
    useRequest<Standings>("standings.json");
  const [driversTable, setDriversTable] = useState<DriverStanding[] | null>();
  const [teamsTable, setTeamsTable] = useState<TeamStanding[] | null>();

  useEffect(() => {
    if (standings.drivers) {
      setDriversTable(standings.drivers);
    }
    if (standings.teams) {
      setTeamsTable(standings.teams);
    }
  }, [standings]);

  return (
    <>
      {driversTable && (
        <div>
          <h3>Drivers</h3>
          <DriverInfo standing={driversTable[0]} type="heading" />
          <DriverInfo standing={driversTable[1]} type="heading" />
          <DriverInfo standing={driversTable[2]} type="heading" />
          <div className="mt-1">
            {driversTable.map((standing, index) => {
              if (index > 2)
                return (
                  <DriverInfo
                    key={standing.driver_id}
                    standing={standing}
                    type="row"
                  />
                );
            })}
          </div>
        </div>
      )}
      {teamsTable && (
        <div>
          <h3>Teams</h3>
          {teamsTable.map((team) => (
            <div key={team.team_id}>
              <p>
                {teams[team.team_id].name}
                <span>Points: {team.points}</span>
                <span>Wins: {team.wins}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
