import { memo, useState } from "react";
import { HiTicket } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch, IoTvSharp } from "react-icons/io5";
import { PiVibrateBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export const MenuHeader = memo(() => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col w-full">
      <button
        onClick={() => setShow((p) => !p)}
        className="lg:hidden ml-5 md:hidden"
      >
        <IoIosArrowDown />
      </button>

      <ul
        className={
          show
            ? "flex-col sm:absolute z-30 top-20 left-[-2px] bg-black/80 w-full sm:bg-pink h-[200px] gap-6 text-[13px] pl-27"
            : "hidden"
        }
      >
        <li className="flex items-center">
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
        <li className="flex items-center">
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

        <li className="flex items-center">
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
        <li className="flex items-center">
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
    </div>
  );
});
