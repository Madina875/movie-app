import { memo } from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import img1 from "@/shared/assets/EMBLEM.svg";
import img2 from "@/shared/assets/image 7.png";
import img3 from "@/shared/assets/image 8.png";
import { PiFilmReelBold, PiFilmStripDuotone, PiNotebook } from "react-icons/pi";
import { GiNorthStarShuriken } from "react-icons/gi";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineSportsBasketball } from "react-icons/md";

export const Footer = memo(() => {
  return (
    <footer className="w-full h-50 lg:min-h-[220px] pb-10 lg:px-40">
      <div className="container mx-100 flex bg-[#111111] rounded-[20px] justify-center lg:flex-row flex-col gap-45 py-10 text-white">
        <div className="flex gap-2 flex-col">
          <img
            className="mb-10 size-15 transition-transform duration-300 hover:scale-125"
            src={img1}
            alt=""
          />
          <img className="object-center object-cover" src={img2} alt="" />
          <img className="object-center object-cover" src={img3} alt="" />
        </div>
        <div>
          <h4 className="font-semibold text-[15px] mb-5">О нас</h4>
          <ul className="space-y-2 grid gap-2 text-gray-400 text-[17px]">
            <li className="flex gap-2 items-center ">
              <PiNotebook className="icon" />
              <a className="whitespace-nowrap" href="#">
                Публичная оферта
              </a>
            </li>
            <li className="gap-2 items-center text-red-600 flex underline underline-offset-4">
              <GiNorthStarShuriken />
              <a href="#">Реклама</a>
            </li>
            <li className="flex gap-2 items-center">
              <RxQuestionMarkCircled className="icon" />
              <a href="#">FAQ</a>
            </li>
            <li className="flex gap-2 items-center">
              <FaPhoneAlt className="icon" />
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[15px] mb-5">Категории</h4>
          <ul className="space-y-2 grid gap-2 text-gray-400 text-[17px]">
            <li className="flex gap-2 items-center">
              <RiVideoLine className="icon" />
              <a href="#">Кино</a>
            </li>
            <li className="flex gap-2 items-center">
              <PiFilmStripDuotone className="icon" />
              <a href="#">Театр</a>
            </li>
            <li className="flex gap-2 items-center">
              <PiFilmReelBold className="icon" />
              <a href="#">Концерты</a>
            </li>
            <li className="flex gap-2 items-center">
              <MdOutlineSportsBasketball className="icon" />
              <a href="#">Спорт</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-[15px] mb-3">Связаться с нами</h4>
          <p className=" mb-8 justify-start text-[20px] font-normal text-red-600">
            +998 (95) 897-33-38
          </p>
          <p className="mb-1">Социальные сети:</p>
          <div className="flex text-red-600 text-2xl gap-4">
            {[FaInstagram, FaFacebook, FaYoutube].map((Icon, i) => (
              <Icon
                key={i}
                className="cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-red-700"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});
