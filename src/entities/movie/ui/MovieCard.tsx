import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../../app/store/features/wishlistSlice";
import type { RootState } from "../../../app/store";
import { FaStar } from "react-icons/fa";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo((props) => {
  const { movie } = props;
  const navigate = useNavigate();
  const carts = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <div className="text-white bg-gray-950 flex flex-col gap-1">
      <div className="relative">
        <img
          src={createImageUrl(movie.poster_path)}
          className="rounded-[10px] object-center h-140 object-cover cursor-pointer"
          onClick={() => navigate(`/movie/${movie.id}`)}
          alt=""
        />

        <div
          onClick={() => dispatch(toggleLike(movie))}
          className="top-2 lg:left-[85%] rounded absolute text-4xl bg-gray-950"
        >
          {carts.some((pro) => pro.id === movie.id) ? (
            <CiBookmark className="hover:text-red-900 hover:scale-105 text-red-500 cursor-pointer" />
          ) : (
            <CiBookmark className="cursor-pointer hover:scale-105" />
          )}
        </div>
      </div>
      <div className="p-3">
        <h3 className="line-clamp-1 text-2xl" title={movie.title}>
          {movie.title}
        </h3>
        <div className="flex justify-between items-center mt-5">
          <p className="flex items-center gap-1">
            {Array.from({ length: movie.vote_average }).map((_, i) => (
              <FaStar key={i} className="text-red-500" />
            ))}
          </p>
          <strong className="text-gray-600 font-normal text-[18px]">
            {movie.release_date}
          </strong>
        </div>
      </div>
    </div>
  );
});
