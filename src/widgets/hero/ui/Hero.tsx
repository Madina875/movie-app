import { useMovie } from "@/entities/movie";
import { memo } from "react";
import { createImageUrl } from "../../../shared/utils";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/free-mode";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/thumbs";
import "./hero.css";
import { FaPlay } from "react-icons/fa";

export const Hero = memo(() => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { getMovies } = useMovie();
  const { data } = getMovies();
  return (
    <div>
      <Swiper
        loop={data?.results?.length > 4}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data?.results?.map((e: any, inx: any) => (
          <SwiperSlide className="flex flex-col relative">
            <img key={inx} src={createImageUrl(e?.backdrop_path)} alt="" />
            <div className="min-h-[22%] gap-3 p-5 flex flex-col justify-center items-center min-w-[40%] mb-5 bg-black/40 rounded-2xl absolute">
              <h3 className="text-2xl">{e?.title}</h3>
              <strong>{e?.release_date.split("-")[0]}</strong>
              <button className="w-[50%] flex items-center justify-center gap-1 text-red-600 rounded-[10px] p-1 h-[30%] bg-white">
                <FaPlay />
                watch
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={data?.results?.length > 4}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-50 cursor-pointer"
      >
        {data?.results?.map((e: any, inx: any) => (
          <SwiperSlide>
            <img key={inx} src={createImageUrl(e?.backdrop_path)} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
