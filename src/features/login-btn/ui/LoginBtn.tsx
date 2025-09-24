import { memo } from "react";

export const LoginBtn = memo(() => {
  return (
    <div>
      <button className="bg-red-600 text-white p-3 px-12 rounded-[10px]">
        Login
      </button>
    </div>
  );
});
