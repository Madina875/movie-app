import { CrewView, useCrew } from "@/entities/crew";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { useParams } from "react-router-dom";

export const CrewDetail = memo(() => {
  const { id } = useParams();
  const { getCrewsMoviesById } = useCrew();
  const { data: movies } = getCrewsMoviesById(id as string);
  return (
    <div>
      <CrewView />
      <h2 className="container text-3xl capitalize mb-10">movies:</h2>
      <MovieList movies={movies?.cast} />
    </div>
  );
});
