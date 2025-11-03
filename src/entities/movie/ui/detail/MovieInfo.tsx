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
      <section className="relative">
        <img
          src={createImageUrl(data?.backdrop_path)}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute flex justify-between  p-10 place-content-end bottom-0  left-0 w-full h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
          <p className="text-2xl mb-40 uppercase text-gray-300 font-light">
            {data?.original_title}
          </p>
          <p className="text-2xl mb-40 uppercase text-gray-300 font-light">
            {data?.release_date}
          </p>
        </div>
      </section>

      <section className="flex flex-col  md:flex-row  flex-1 pr-100 container mb-10 gap-20 my-20 mt-30">
        <div className=" object-center object-cover md:ml-12 mb-20">
          <img
            className="md:h-150 w-100% w-full object-cover md:w-70 lg:w-full"
            src={createImageUrl(data?.poster_path)}
            alt=""
          />
        </div>

        <div className="flex-2">
          <h1 className="text-4xl mb-5 mt-5">{data?.title}</h1>
          <hr className="my-5" />
          <div className="md:flex">
            <div className="flex capitalize flex-col text-[22px] font-light gap-2">
              <p className="flex place-items-center gap-3">
                popularity: {data?.popularity}{" "}
                <FaStar className="text-red-500" />
              </p>
              <p>original title : {data?.original_title}</p>
              <p>budget: {data?.budget?.toLocaleString()} USD</p>
              <p>origin country : {data?.origin_country}</p>
              <p>original language : {data?.original_language}</p>
              <p>status : {data?.status}</p>
              <p>vote_count : {data?.vote_count}</p>
            </div>
            <div className="md:ml-25 capitalize">
              <a
                className="underline  uppercase  text-red-500"
                href={data?.homepage}
                target="_blank"
              >
                Main page of the movie
              </a>
              <p className="text-[22px] font-light">
                release date : {data?.release_date}
              </p>

              <div className="my-4 flex gap-2 xl:flex-row">
                {data?.genres?.map((g: any) => (
                  <span
                    key={g.id}
                    className="py-1 px-3 bg-gray-800 text-gray-200 rounded-full text-[17px]"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <p className="container mb-4 text-2xl font-light italic font-sans">
          Gallery
        </p>
        <hr className="mb-7" />
      </div>
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

      <div>
        <p className="container mb-4 text-2xl font-light italic font-sans">
          Trailer
        </p>
        <hr className="my-7" />
      </div>
      <section className="container">
        <MovieTrailer title={data?.title} />
      </section>

      <div>
        <p className="container my-4 text-2xl font-light italic font-sans">
          People played in this:
        </p>
        <hr className="mb-7" />
      </div>
      <section className="container my-10">
        <div className="flex gap-4 mb-10">
          <Link
            className="bg-gray-900 px-6 p-1 rounded-[5px] italic hover:scale-105 duration-200"
            to={"review"}
          >
            Review
          </Link>
          <Link
            className="bg-gray-900 px-6 p-1 rounded-[5px] italic hover:scale-105 duration-200"
            to={""}
          >
            Cast
          </Link>
          <Link
            className="bg-gray-900 px-6 p-1 rounded-[5px] italic hover:scale-105 duration-200"
            to={"others"}
          >
            Others
          </Link>
        </div>
        <Outlet />
      </section>
    </div>
  );
});
