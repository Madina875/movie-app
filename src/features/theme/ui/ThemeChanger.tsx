import { memo } from "react";
import { MdSunny } from "react-icons/md";

export const ThemeChanger = memo(() => {
  return (
    <div>
      <MdSunny className="text-red-600 text-2xl mx-2" />
    </div>
  );
});
