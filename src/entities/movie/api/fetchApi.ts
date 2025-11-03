import { api } from "@/shared/api";
import type { IMovieParams } from "../model/types";

export const fetchMovies = async (params?: IMovieParams) => {
  const response = api.get("discover/movie", {
    params: {
      // without_genres: "18,36,27,10402,10749",
      // "primary_release_date.lte": "01.01.2010",
      // "primary_release_date.gte": "01.01.2000",
      ...params,
    },
  });
  return (await response).data;
};

export const fetchMovieById = async (id: string) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const fetchMovieGenre = async () => {
  const response = await api.get(`genre/movie/list`);
  return response.data;
};
export const fetchMovieInfo = async (id: string, path: string) => {
  const response = await api.get(`/movie/${id}/${path}`);
  return response.data;
};

export const fetchMovieReview = async (id: string, path: string) => {
  const response = await api.get(`/movie/${id}/${path}`);
  return response.data;
};

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY; // or your TMDB key

export const fetchMovieTrailer = async (id: string) => {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
  );
  return res.data;
};
