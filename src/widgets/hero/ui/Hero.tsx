import { useMovie } from "@/entities/movie";
import { memo, useState } from "react";
import { createImageUrl } from "../../../shared/utils";
import { GoDotFill } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Thumbs,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
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
import { useNavigate } from "react-router-dom";

export const Hero = memo(() => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { getMovies } = useMovie();
  const navigate = useNavigate();
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
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, Pagination, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data?.results?.map((e: any, inx: any) => (
          <SwiperSlide key={inx} className="flex flex-col relative">
            <img src={createImageUrl(e?.backdrop_path)} alt="hero_img" />
            <div className="min-h-[22%] gap-3 p-5 flex flex-col justify-center items-center mb-5 bg-black/40 rounded-2xl absolute">
              <div className="flex items-center gap-1">
                <strong>{e?.release_date.split("-")[0]}</strong>
                <p className="text-4xl items-center">
                  <GoDotFill className="text-[13px]" />
                </p>
                <span>{e?.genre ? e.genre : "Genre"}</span>
                <GoDotFill className="text-[13px]" />
                <span>1ч 34м</span>
                <GoDotFill className="text-[13px]" />
                <strong>{e?.original_language}</strong>
                <GoDotFill className="text-[13px]" />
                <strong>{Math.floor(e?.vote_average)}</strong>
              </div>
              <button
                onClick={() => navigate(`movie/${e.id}`)}
                className="hover:scale-105 transition-transform duration-300 w-[50%] h-12 flex items-center justify-center gap-1 text-red-600 rounded-[10px] p-1 bg-white"
              >
                <FaPlay />
                Watch
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
          <SwiperSlide key={inx}>
            <img
              src={createImageUrl(e?.backdrop_path)}
              className="rounded-md opacity-80 hover:opacity-100 transition"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
