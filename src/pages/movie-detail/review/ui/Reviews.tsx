import { memo } from "react";
import { useMovie } from "../../../../entities/movie";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

export const Reviews = memo(() => {
  const { id } = useParams();
  const { getMovieReview } = useMovie();
  const { data: reviewData } = getMovieReview(`${id}`, "reviews");

  return (
    <div>
      {reviewData?.results?.length && (
        <section className="flex flex-col gap-8 overflow-y-scroll scrollbar-hide text-white container mb-20 h-100">
          {reviewData?.results?.map((item: any) => (
            <div
              key={item.id}
              className=" bg-gray-950 text-[16px] rounded-2xl "
            >
              <p className="text-2xl flex  justify-between place-items-center rounded-t-2xl p-2 px-4 italic font-serif bg-gray-900 mb-5">
                {item.author}
                <div className="flex gap-1">
                  <AiFillLike />
                  <AiFillDislike />
                  <FaHeart />
                </div>
              </p>
              <p>{item.content}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
});
