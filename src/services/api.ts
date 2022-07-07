import axios, { AxiosResponse } from "axios";
import { Driver } from "../models/driver";

const api = axios.create({
  baseURL: "https://gaholanda.github.io/lastfivef1/",
});

export const GetDrivers = async () => {
  const { data } = await api.get("/drivers.json") as AxiosResponse<Driver[]>;
  return data;
};

export const GetConstructors = async () => {
  const { data } = await api.get("/constructors.json");
  return data;
};

export const GetStandings = async () => {
  const { data } = await api.get("/standings.json");
  return data;
};

export const GetRaces = async () => {
  const { data } = await api.get("/races.json");
  return data;
};

export const GetLastFiveRaces = async () => {
  const { data } = await api.get("/last-five-races.json");
  return data;
};
