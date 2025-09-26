export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: [];
}

export interface IMovieParams {
  page: string;
  sort_by: string;
  with_genres: string;
}
