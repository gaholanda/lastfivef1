interface RaceResult {
  race_id: string;
  position: number;
  points: number;
  pole?: boolean;
  fastest_lap?: boolean;
  sprint_points?: number;
}

export interface DriverRacesResults {
  driver_id: string;
  total_points: number;
  races_results: RaceResult[]
}
