import { useStandings } from "../../hooks/useStandings";
import { DriverInfo } from "./DriverInfo";
import TeamInfo from "./TeamInfo";

export function Championship() {
  const { standings } = useStandings();

  return (
    <>
      {standings && (
        <div>
          <h3>Drivers</h3>
          <DriverInfo standing={standings.drivers[0]} type="heading" />
          <DriverInfo standing={standings.drivers[1]} type="heading" />
          <DriverInfo standing={standings.drivers[2]} type="heading" />
          <div className="mt-1">
            {standings.drivers.map((standing, index) => {
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
      {standings && (
        <div className="mt-3">
          <h3>Teams</h3>
          {standings.teams.map((team) => (
            <TeamInfo key={team.team_id} standing={team} />
          ))}
        </div>
      )}
    </>
  );
}
