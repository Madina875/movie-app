import { memo } from "react";

export const Tickets = memo(() => {
  return (
    <div className="container min-h-100 ">
      <div className="flex overflow-auto gap-10 justify-center"></div>
    </div>
  );
});
