import { useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { Hero } from "../../../widgets/hero";
import { IoIosArrowForward } from "react-icons/io";

export const Home = memo(() => {
  const { getMovies } = useMovie();
  const { data } = getMovies();

  return (
    <div>
      <Hero />
      <div className="container my-10 flex justify-between">
        <p>In week</p>
        <p className="cursor-pointer flex items-center gap-2 text-red-600">
          show all <IoIosArrowForward />
        </p>
      </div>
      <MovieList movies={data?.results?.slice(0, 4)} />
    </div>
  );
});
