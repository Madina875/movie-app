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
    <footer className="w-full h-[240px] mb-10">
      <div className="container h-full w-full px-100 flex bg-[#111111] rounded-[10px] justify-between py-10 text-white">
        <div className="flex gap-2 flex-col ml-5">
          <img className="mb-10 size-15" src={img1} alt="" />
          <img className="object-center object-cover" src={img2} alt="" />
          <img className="object-center object-cover" src={img3} alt="" />
        </div>
        <div>
          <h4 className="font-semibold mb-5">О нас</h4>
          <ul className="space-y-2 grid gap-1">
            <li className="flex gap-1 items-center">
              <PiNotebook className="icon" />
              <a href="#">Публичная оферта</a>
            </li>
            <li className="gap-1 items-center text-red-600 flex underline underline-offset-4">
              <GiNorthStarShuriken />
              <a href="#">Реклама</a>
            </li>
            <li className="flex gap-1 items-center">
              <RxQuestionMarkCircled className="icon" />
              <a href="#">FAQ</a>
            </li>
            <li className="flex gap-1 items-center">
              <FaPhoneAlt className="icon" />
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-5">Категории</h4>
          <ul className="space-y-2 gap-2">
            <li className="flex gap-1 items-center">
              <RiVideoLine className="icon" />
              <a href="#">Кино</a>
            </li>
            <li className="flex gap-1 items-center">
              <PiFilmStripDuotone className="icon" />
              <a href="#">Театр</a>
            </li>
            <li className="flex gap-1 items-center">
              <PiFilmReelBold className="icon" />
              <a href="#">Концерты</a>
            </li>
            <li className="flex gap-1 items-center">
              <MdOutlineSportsBasketball className="icon" />
              <a href="#">Спорт</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 mr-10">
          <h4 className="font-semibold mb-3">Связаться с нами</h4>
          <p className="mb-8 font-bold justify-start text-[23px] text-red-600">
            +998 (95) 897-33-38
          </p>
          <p className="mb-1">Социальные сети:</p>
          <div className="flex text-red-600 text-2xl gap-4">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
});
