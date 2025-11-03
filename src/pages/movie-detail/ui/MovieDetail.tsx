import { MovieInfo, useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = memo(() => {
  const { id } = useParams();
  const { getMovieInfo } = useMovie();
  const { data } = getMovieInfo(id as string, "similar");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      <MovieInfo id={id as string} />
      <div>
        <p className="container mb-4 text-2xl font-light italic font-sans">
          Similar Movies
        </p>
        <hr className="mb-7" />
      </div>
      <MovieList movies={data?.results?.slice(0, 8)} />
    </div>
  );
});
