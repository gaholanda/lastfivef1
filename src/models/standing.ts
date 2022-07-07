interface Standing {
  points: number;
  wins: number;
}

export interface DriverStanding extends Standing {
  driverId: string;
}

export interface ConstructorStanding extends Standing {
  constructorId: string;
}