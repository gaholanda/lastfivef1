interface CommonInfo {
  points: number;
  wins: number;
}

export interface DriverStanding extends CommonInfo {
  driverId: string;
}

export interface TeamStanding extends CommonInfo {
  teamId: string;
}

export interface Standings {
  drivers: DriverStanding[];
  teams: TeamStanding[];
}