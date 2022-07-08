interface CommonInfo {
  points: number;
  wins: number;
}

export interface DriverStanding extends CommonInfo {
  driver_id: string;
}

export interface TeamStanding extends CommonInfo {
  team_id: string;
}

export interface Standings {
  drivers: DriverStanding[];
  teams: TeamStanding[];
}