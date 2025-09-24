import { memo } from "react";

export const LanguageSwitcher = memo(() => {
  return (
    <select className=" bg-gray-950 p-2 rounded-[10px]">
      <option value="">uz</option>
      <option value="">en</option>
      <option value="">ru</option>
    </select>
  );
});
