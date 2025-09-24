import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";

interface Props {
  id: string;
}

export const MovieInfo: FC<Props> = memo((props) => {
  const { id } = props;
  const { getMovieById, getMovieInfo, getMovieReview } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");
  const { data: reviewData } = getMovieReview(id, "reviews");
  return (
    <div>
      <section>
        <img src={createImageUrl(data?.backdrop_path)} alt="" />
      </section>
      <section className="container mb-10">
        <h1 className="text-3xl">{data?.title}</h1>
        <p>{data?.budget?.toLocaleString()} USD</p>
        <a href={data?.homepage} target="_blank">
          Link
        </a>
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
      {reviewData?.results && (
        <section className="flex flex-col gap-5 overflow-y-scroll scrollbar-hide container mb-30 h-100">
          {reviewData?.results?.map((item: any) => (
            <div key={item.id} className="border">
              <p className="text-2xl mb-5">{item.author}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
});
