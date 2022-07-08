import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { DriverStanding, TeamStanding } from "../../models/standings";

export function Standings() {
  const { standings, drivers, teams } = useContext(AppContext);
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
    <div>
      <h3>Standings</h3>
      {driversTable && (
        <div>
          <h3>Drivers</h3>
          {driversTable.map((driver) => (
            <div key={driver.driverId}>
              <p>
                {drivers[driver.driverId].name}
                <span>Points: {driver.points}</span>
                <span>Wins: {driver.wins}</span>
              </p>
            </div>
          ))}
        </div>
      )}
      {teamsTable && (
        <div>
          <h3>Teams</h3>
          {teamsTable.map((team) => (
            <div key={team.teamId}>
              <p>
                {teams[team.teamId].name}
                <span>Points: {team.points}</span>
                <span>Wins: {team.wins}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
