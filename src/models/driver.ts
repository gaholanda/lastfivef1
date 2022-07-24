export interface Driver {
  name: string;
  team_id: string;
  number: number;
}

export interface Drivers {
  [key: string]: Driver;
}