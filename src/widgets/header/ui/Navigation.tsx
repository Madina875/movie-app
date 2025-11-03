import { memo } from "react";
import { useTranslation } from "react-i18next";
import { HiTicket } from "react-icons/hi";
import { IoSearch, IoTvSharp } from "react-icons/io5";
import { PiVibrateBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type { RootState } from "../../../app/store";

export const Navigation = memo(() => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const { t } = useTranslation();
  return (
    <ul className="md:flex hidden gap-6 text-[13px] whitespace-nowrap pl-[10%]">
      <li className="flex flex-col items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-gray-300 hover:text-white"
          }
        >
          <IoTvSharp className="size-5 mb-1 m-auto" />
          <span>{t("header.navigation.home")}</span>
        </NavLink>
      </li>
      <li className="flex flex-col items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-gray-300 hover:text-white"
          }
          to={"/movie"}
        >
          <PiVibrateBold className="size-5 mb-1 m-auto" />
          <span>{t("header.navigation.movies")}</span>
        </NavLink>
      </li>

      <li className="flex flex-col items-center">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-600 relative"
              : "relative text-gray-300 hover:text-white"
          }
          to={"/tickets"}
        >
          <HiTicket className="size-5 mb-1  m-auto" />
          <span>{t("header.navigation.ticket")}</span>
          {!!cart.length && (
            <div className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center bg-red-900 rounded-full text-white text-xs ml-[2px]">
              {cart.length}
            </div>
          )}
        </NavLink>
      </li>
      <li className="flex flex-col items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-gray-300 hover:text-white"
          }
          to={"/search"}
        >
          <IoSearch className="size-5 mb-1 m-auto" />
          <span>{t("header.navigation.search")}</span>
        </NavLink>
      </li>
    </ul>
  );
});
