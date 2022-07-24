export interface RaceResult {
  race_id: string;
  race_points: number;
  position: number;
  pole?: boolean;
  fastest_lap?: boolean;
  sprint_points?: number;
} 

export interface DriverRacesResults {
  driver_id: string;
  races_results: RaceResult[];
  total_points: number;
}
