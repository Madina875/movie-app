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

  const dateFrom = searchParams.get("primary_release_date.gte") || undefined;
  const dateTo = searchParams.get("primary_release_date.lte") || undefined;

  const params = {
    page,
    sort_by,
    with_genres,
    ...(dateFrom && { "primary_release_date.gte": dateFrom }),
    ...(dateTo && { "primary_release_date.lte": dateTo }),
  };

  const { data } = getMovies(params);

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
