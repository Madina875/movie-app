import { MovieCard, type IMovie } from "@/entities/movie";
import { memo, type FC } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  movies: IMovie[];
}

export const MovieList: FC<Props> = memo((props) => {
  const { movies } = props;
  return (
    <>
      <div className="container my-10 flex justify-between">
        <p>In week</p>
        <p className="cursor-pointer flex items-center gap-2 text-red-600">
          show all <IoIosArrowForward />
        </p>
      </div>
      <div className="mb-10 container grid lg:grid-cols-4 gap-6 md:grid-cols-3 grid-cols-2">
        {movies?.map((item: IMovie) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </>
  );
});
