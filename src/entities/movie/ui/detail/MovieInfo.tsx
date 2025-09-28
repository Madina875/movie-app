import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";
import { Link, Outlet } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MovieTrailer } from "../../../../features/movie-trailer";

interface Props {
  id: string;
}

export const MovieInfo: FC<Props> = memo((props) => {
  const { id } = props;
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");
  return (
    <div>
      <section className="relative ">
        <img
          src={createImageUrl(data?.backdrop_path)}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
      </section>

      <section className=" pr-100 container mb-10 flex gap-20 my-20 mt-30">
        <div className=" object-center object-cover mb-20">
          <img
            className="h-150 object-cover"
            src={createImageUrl(data?.poster_path)}
            alt=""
          />
        </div>

        <div className="">
          <h1 className="text-4xl mb-5 mt-5">{data?.title}</h1>
          <div className="flex flex-col gap-2">
            <strong className="flex">
              popularity : {data?.popularity} <FaStar />
            </strong>
            <p>original title : {data?.original_title}</p>
            <p>budget: {data?.budget?.toLocaleString()} USD</p>
            <p>origin country : {data?.origin_country}</p>
            <p>original language : {data?.original_language}</p>
            <p>release date : {data?.release_date}</p>
            <p>status : {data?.status}</p>
            <p>vote_count : {data?.vote_count}</p>
          </div>

          <a
            className="underline text-red-500"
            href={data?.homepage}
            target="_blank"
          >
            moviepage
          </a>
        </div>
      </section>

      <section className="flex overflow-x-scroll scrollbar-hide max-h-30 container mb-30">
        {imageData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) => (
          <Image
            key={inx}
            className="min-w-[200px]"
            src={createImageUrl(item.file_path)}
            alt=""
          />
        ))}
      </section>

      <section className="container">
        <MovieTrailer title={data?.title} />
      </section>

      <section className="container my-10">
        <div className="flex gap-4 mb-10">
          <Link to={""}>Review</Link>
          <Link to={"cast"}>Cast</Link>
          <Link to={"others"}>Others</Link>
        </div>
        <Outlet />
      </section>
    </div>
  );
});
