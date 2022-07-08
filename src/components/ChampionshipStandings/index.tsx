import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { useRequest } from "../../hooks/useRequest";
import { DriverStanding, Standings, TeamStanding } from "../../models/standings";

export function ChampionshipStandings() {
  const { drivers, teams } = useContext(AppContext);
  const { data: standings = {} as Standings } = useRequest<Standings>("standings.json");
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
            <div key={driver.driver_id}>
              <p>
                {drivers[driver.driver_id].name}
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
    </div>
  );
}
