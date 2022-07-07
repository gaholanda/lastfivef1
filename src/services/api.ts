import axios from "axios";

const api = axios.create({
  baseURL: "https://gaholanda.github.io/lastfivef1/",
});

export const GetRequest = async (url: string) => {
  const { data } = await api.get(url);
  return data;
};
