import { api } from "@/shared/api";

export const fetchCastById = async (id: string) => {
  const response = api.get(`/movie/${id}/credits`);
  return (await response).data;
};
