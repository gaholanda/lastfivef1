export interface Driver {
  name: string;
  team: string;
  number: number;
}

export interface Drivers {
  [key: string]: Driver;
}