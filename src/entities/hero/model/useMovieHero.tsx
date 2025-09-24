import { useQuery } from "@tanstack/react-query";
import type { IMovieParams } from "../../movie";
import { fetchMovieHero } from "../api/fetchMovie";

export const useHero = () => {
  const getMovies = (params?: IMovieParams) =>
    useQuery<any, any>({
      queryKey: ["heroKey", params],
      queryFn: () => fetchMovieHero(params),
      retry: 0,
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 8,
      staleTime: 1000 * 60,
    });

  return { getMovies };
};
