import useSWR from "swr";
import { GetRequest } from "../services/api";

export function useRequest<T>(path: string) {
  const { data, error } = useSWR<T>(path, GetRequest);
  return { data, error };
}
