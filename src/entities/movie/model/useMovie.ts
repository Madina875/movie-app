import { useQuery } from "@tanstack/react-query";
import {
  fetchMovies,
  fetchMovieById,
  fetchMovieInfo,
  fetchMovieReview,
  fetchMovieGenre,
} from "../api/fetchApi";
import type { IMovieParams } from "./types";

export const useMovie = () => {
  const getMovies = (params?: IMovieParams) =>
    useQuery<any, any>({
      queryKey: ["movieKey", params],
      queryFn: () => fetchMovies(params),
      retry: 0,
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 8,
      staleTime: 1000 * 60,
    });

  const getMovieById = (id: string) =>
    useQuery({
      queryKey: ["movieKey", id],
      queryFn: () => fetchMovieById(id),
    });

  const getMovieGenreList = () =>
    useQuery({
      queryKey: ["movieKey"],
      queryFn: () => fetchMovieGenre(),
    });

  const getMovieInfo = (id: string, path: string) =>
    useQuery({
      queryKey: ["movieKey", id, path],
      queryFn: () => fetchMovieInfo(id, path),
    });

  const getMovieReview = (id: string, path: string) =>
    useQuery({
      queryKey: ["movieKey", id, path],
      queryFn: () => fetchMovieReview(id, path),
    });

  return {
    getMovies,
    getMovieById,
    getMovieInfo,
    getMovieReview,
    getMovieGenreList,
  };
};
