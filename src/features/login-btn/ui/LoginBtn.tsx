import { memo } from "react";

export const LoginBtn = memo(() => {
  return (
    <div>
      <button className="bg-red-600 text-white p-3 px-12 text-[20px] rounded-[10px]">
        Login
      </button>
    </div>
  );
});
