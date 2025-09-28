import { useMovie } from "@/entities/movie";
import { MoviePagination } from "@/features/movie-pagination";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieSort } from "../../../features/movie-sort";
import { MovieCategory } from "../../../features/movie-category";
import { MovieDate } from "../../../features/movie-date";

export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const sort_by = searchParams.get("sort") ?? "popularity.desc";
  const with_genres = searchParams.get("with_genres") ?? "80";

  const { data } = getMovies({
    page: page as string,
    sort_by: sort_by as string,
    with_genres: with_genres as string,
  });

  return (
    <div>
      <div className="container flex items-center gap-5">
        <h2>Total: {data?.total_results?.toLocaleString()}</h2>
        <MovieSort />
        <MovieCategory />
        <MovieDate />
      </div>
      <MovieList movies={data?.results} />
      <MoviePagination page={page} total_pages={data?.total_results} />
    </div>
  );
});
