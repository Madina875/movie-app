import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";
import { Link, Outlet } from "react-router-dom";

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
      <section>
        <img src={createImageUrl(data?.backdrop_path)} alt="" />
      </section>

      <section className="container mb-10 flex gap-20 my-20">
        <div className="flex-1  object-center object-cover">
          <img src={createImageUrl(data?.poster_path)} alt="" />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl">{data?.title}</h1>
          <p>{data?.budget?.toLocaleString()} USD</p>
          <a href={data?.homepage} target="_blank">
            Link
          </a>
        </div>
      </section>

      <section className="flex overflow-x-scroll scrollbar-hide container mb-30">
        {imageData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) => (
          <Image
            key={inx}
            className="min-w-[200px]"
            src={createImageUrl(item.file_path)}
            alt=""
          />
        ))}
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
