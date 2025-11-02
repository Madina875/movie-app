import { memo } from "react";
import { FiBatteryCharging } from "react-icons/fi";

export const ChargerButton = memo(() => {
  return (
    <button className=" z-20 fixed bottom-10 right-10 px-3 py-3 rounded-full text-2xl bg-red-600 text-white">
      <FiBatteryCharging />
    </button>
  );
});
