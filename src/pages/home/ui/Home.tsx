import { useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo, useState } from "react";
import { Hero } from "../../../widgets/hero";
import { IoIosArrowForward } from "react-icons/io";
import { ChargerButton } from "../../../features/charger-button";

export const Home = memo(() => {
  const { getMovies } = useMovie();
  const [showBattery, setShowBattery] = useState(false);
  const { data } = getMovies();
  console.log(showBattery);
  return (
    <div>
      <Hero />
      <div className="container my-5 text-[18px] flex justify-between">
        <p>In week</p>
        <p className="cursor-pointer flex items-center gap-2 text-red-600">
          show all <IoIosArrowForward />
        </p>
      </div>
      <MovieList movies={data?.results?.slice(0, 10)} />

      <div onClick={() => setShowBattery(!showBattery)}>
        <ChargerButton />
      </div>
    </div>
  );
});
