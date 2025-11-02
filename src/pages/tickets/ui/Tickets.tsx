import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { MovieCard, type IMovie } from "../../../entities/movie";
import { Empty } from "antd";

export const Tickets = memo(() => {
  const carts = useSelector((state: RootState) => state.cart.value);

  return (
    <div className="container grid grid-cols-5 gap-5 my-10">
      {carts && carts.length > 0 ? (
        carts?.map((item: IMovie) => <MovieCard key={item.id} movie={item} />)
      ) : (
        <div className="flex pl-180 items-center justify-center">
          <div className="mt-20">
            <Empty className="size-100" />
          </div>
        </div>
      )}
    </div>
  );
});
