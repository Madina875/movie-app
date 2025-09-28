import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";
import { BiStar } from "react-icons/bi";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo((props) => {
  const { movie } = props;
  const navigate = useNavigate();
  return (
    <div className="text-white">
      <div className="min-h-100" onClick={() => navigate(`/movie/${movie.id}`)}>
        <img
          src={createImageUrl(movie.poster_path)}
          className="rounded-[10px] cursor-pointer"
          alt=""
        />
      </div>
      <div className="p-3">
        <h3 className="line-clamp-1 text-2xl" title={movie.title}>
          {movie.title}
        </h3>
        <p className="flex items-center gap-2">
          {movie.vote_average}
          <BiStar className="text-red-500" />
        </p>

        <strong>date: {movie.release_date}</strong>
      </div>
    </div>
  );
});
