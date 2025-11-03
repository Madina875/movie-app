import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu, IoSearch, IoTvSharp } from "react-icons/io5";
import { PiVibrateBold } from "react-icons/pi";
import { HiTicket } from "react-icons/hi";

export const MenuHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden mr-auto ml-5">
      {/* --- Menu button --- */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-gray-300 hover:text-white transition-all lg:hidden"
      >
        <IoMenu className="size-7" />
      </button>

      {/* --- Overlay --- */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* --- Sidebar content --- */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 z-50 shadow-lg flex flex-col p-6 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <IoClose className="text-white text-2xl hover:text-red-500" />
          </button>
        </div>

        <nav className="flex flex-col gap-5 text-gray-300 text-sm">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 hover:text-white ${
                isActive ? "text-red-500" : ""
              }`
            }
          >
            <IoTvSharp size={20} /> Home
          </NavLink>

          <NavLink
            to="/movie"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 hover:text-white ${
                isActive ? "text-red-500" : ""
              }`
            }
          >
            <PiVibrateBold size={20} /> Movies
          </NavLink>

          <NavLink
            to="/tickets"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 hover:text-white ${
                isActive ? "text-red-500" : ""
              }`
            }
          >
            <HiTicket size={20} /> Tickets
          </NavLink>

          <NavLink
            to="/search"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 hover:text-white ${
                isActive ? "text-red-500" : ""
              }`
            }
          >
            <IoSearch size={20} /> Search
          </NavLink>
        </nav>

        <div className="mt-auto pt-6 border-t border-zinc-700 text-gray-400 text-xs">
          <p>© 2025 MovieHub</p>
        </div>
      </aside>
    </div>
  );
};
