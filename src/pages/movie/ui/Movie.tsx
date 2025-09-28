import { useMovie } from "@/entities/movie";
import { MoviePagination } from "@/features/movie-pagination";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MovieSort } from "../../../features/movie-sort";
import { MovieCategory } from "../../../features/movie-category";
import { MovieDate } from "../../../features/movie-date";
import { IoIosArrowForward } from "react-icons/io";

export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const sort_by = searchParams.get("sort") ?? "popularity.desc";
  const with_genres = searchParams.get("with_genres") ?? "16";
  const navigate = useNavigate();

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
      <div className="container flex items-center gap-5 mt-5">
        <div className="flex w-[100%] gap-5 overflow-x-auto">
          <h2>Total: {data?.total_results?.toLocaleString()}</h2>
          <MovieSort />
          <MovieCategory />
          <MovieDate />
        </div>
      </div>
      <div className="container my-10 flex justify-between">
        <p>In week</p>
        <p
          onClick={() => navigate("/movie")}
          className="cursor-pointer flex items-center gap-2 text-red-600"
        >
          show all <IoIosArrowForward />
        </p>
      </div>
      <MovieList movies={data?.results} />
      <MoviePagination page={page} total_pages={data?.total_results} />
    </div>
  );
});
