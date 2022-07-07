import { GetDrivers } from "../services/api";

export async function useDrivers() {
  const drivers = await GetDrivers();
  return drivers;
}
