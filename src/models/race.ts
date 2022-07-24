interface CommonInfo {
  name: string;
  flag: string;
}

export interface Races {
  [key: string]: CommonInfo;
}