import { memo } from "react";
import { HiTicket } from "react-icons/hi";
import { IoSearch, IoTvSharp } from "react-icons/io5";
import { PiVibrateBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export const Navigation = memo(() => {
  return (
    <ul className="md:flex hidden gap-6 text-[13px] pr-70">
      <li className="flex flex-col items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-gray-300 hover:text-white"
          }
        >
          <IoTvSharp className="size-5 mb-1 m-auto" />
          <span>Home</span>
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
          <span>Movies</span>
        </NavLink>
      </li>

      <li className="flex flex-col items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-gray-300 hover:text-white"
          }
          to={"/tickets"}
        >
          <HiTicket className="size-5 mb-1 m-auto" />
          <span>Tickets</span>
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
          <span>Search</span>
        </NavLink>
      </li>
    </ul>
  );
});
