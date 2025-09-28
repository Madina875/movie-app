import { MovieInfo, useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = memo(() => {
  const { id } = useParams();
  const { getMovieInfo } = useMovie();
  const { data } = getMovieInfo(id as string, "similar");

  return (
    <div>
      <MovieInfo id={id as string} />
      <p className="container text-2xl my-10">similar movies</p>
      <MovieList movies={data?.results?.slice(0, 4)} />
    </div>
  );
});
