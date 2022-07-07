import axios from "axios";

const api = axios.create({
  baseURL: "http://gaholanda.github.io/lasfivef1/",
});

export const GetDrivers = async () => {
  const { data } = await api.get("/drivers.json");
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
