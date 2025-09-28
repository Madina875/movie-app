import { useMovie } from "@/entities/movie";
import { memo } from "react";
import { createImageUrl } from "../../../shared/utils";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/free-mode";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// @ts-ignore
import "swiper/css/thumbs";
import "./hero.css";
import { FaPlay } from "react-icons/fa";

export const Hero = memo(() => {
  const [setThumbsSwiper] = useState<any>(null);
  const { getMovies } = useMovie();
  const { data } = getMovies();
  return (
    <div>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        loop={data?.results?.length > 4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper2"
      >
        {data?.results?.map((e: any, inx: any) => (
          <SwiperSlide className="flex flex-col relative">
            <img key={inx} src={createImageUrl(e?.backdrop_path)} alt="" />
            <div className="min-h-[22%] gap-3 p-5 flex flex-col justify-center items-center min-w-[40%] mb-5 bg-black/40 rounded-2xl absolute">
              <div className="flex items-center gap-1">
                <strong>{e?.release_date.split("-")[0]}</strong>
                <p className="text-4xl items-center">
                  <GoDotFill className="text-[13px]" />
                </p>
                <strong>{e?.original_language}</strong>
                <GoDotFill className="text-[13px]" />

                <strong>{Math.floor(e?.vote_average)}</strong>
              </div>
              <button className="w-[50%] h-12 flex items-center justify-center gap-1 text-red-600 rounded-[10px] p-1  bg-white">
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
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper cursor-pointer"
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
