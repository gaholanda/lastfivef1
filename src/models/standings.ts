interface CommonInfo {
  points: number;
  wins: number;
}

interface DriverStanding extends CommonInfo {
  driverId: string;
}

interface ConstructorStanding extends CommonInfo {
  constructorId: string;
}

export interface Standings {
  driverStandings: DriverStanding[];
  constructorStandings: ConstructorStanding[];
}