import { memo } from "react";
import { useMovie } from "../../../../entities/movie";
import { useParams } from "react-router-dom";

export const Reviews = memo(() => {
  const { id } = useParams();
  const { getMovieReview } = useMovie();
  const { data: reviewData } = getMovieReview(`${id}`, "reviews");

  return (
    <div>
      {reviewData?.results?.length && (
        <section className="flex flex-col gap-5 overflow-y-scroll scrollbar-hide text-white container mb-20 h-100">
          {reviewData?.results?.map((item: any) => (
            <div key={item.id} className="border ">
              <p className="text-2xl mb-5">{item.author}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
});
