import { api } from "@/shared/api";
import type { IMovieParams } from "../../movie";

export const fetchMovieHero = async (params?: IMovieParams) => {
  const response = api.get("tv/top_rated", {
    params: {
      without_genres: "18,36,27,10402,10749",
      with_genres: "16",
      ...params,
    },
  });
  return (await response).data;
};
