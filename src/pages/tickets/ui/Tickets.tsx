import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { MovieCard, type IMovie } from "../../../entities/movie";
import { Empty } from "antd";
export const Tickets = memo(() => {
  const carts = useSelector((state: RootState) => state.cart.value);

  if (!carts || carts.length === 0) {
    return (
      <div className="container flex items-center justify-center min-h-[60vh]">
        <Empty imageStyle={{ height: 120 }} />
      </div>
    );
  }

  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
      {carts.map((item: IMovie) => (
        <MovieCard key={item.id} movie={item} />
      ))}
    </div>
  );
});
