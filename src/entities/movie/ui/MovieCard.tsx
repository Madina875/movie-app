import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";
import { BiStar } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../../app/store/features/wishlistSlice";
import type { RootState } from "../../../app/store";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo((props) => {
  const { movie } = props;
  const navigate = useNavigate();
  const carts = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <div className="text-white bg-gray-950 min-h-120">
      <div className="min-h-100 relative">
        <img
          src={createImageUrl(movie.poster_path)}
          className="rounded-[10px]  cursor-pointer"
          onClick={() => navigate(`/movie/${movie.id}`)}
          alt=""
        />
        <div
          onClick={() => dispatch(toggleLike(movie))}
          className="top-2 left-[88%] rounded absolute text-4xl bg-gray-950"
        >
          {carts.some((pro) => pro.id === movie.id) ? (
            <CiBookmark className="text-gray-600 hover:bg-red-900 cursor-pointer" />
          ) : (
            <CiBookmark className="text-red-500 hover:bg-red-900 cursor-pointer" />
          )}
        </div>
      </div>
      <div className="p-3">
        <h3 className="line-clamp-1 text-2xl" title={movie.title}>
          {movie.title}
        </h3>
        <div className="flex justify-between items-center mt-5">
          <p className="flex items-center gap-2">
            {movie.vote_average}
            <BiStar className="text-red-500" />
          </p>
          <strong className="text-gray-600 font-normal text-[18px]">
            {movie.release_date}
          </strong>
        </div>
      </div>
    </div>
  );
});
