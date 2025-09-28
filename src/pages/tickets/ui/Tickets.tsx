import { memo } from "react";

export const Tickets = memo(() => {
  return (
    <div className="container min-h-100">
      <h3 className="mb-20 mt-8 text-2xl text-center">Tickets</h3>
      <div className="flex overflow-auto gap-10">
        <img
          className="size-50 object-cover bg-black object-center"
          src="https://www.citypng.com/public/uploads/preview/outline-gray-ticket-icon-701751694966511neynkpju2t.png"
          alt=""
        />
        <img
          className="size-50 object-cover bg-black object-center"
          src="https://www.citypng.com/public/uploads/preview/outline-gray-ticket-icon-701751694966511neynkpju2t.png"
          alt=""
        />{" "}
        <img
          className="size-50 object-cover bg-black object-center"
          src="https://www.citypng.com/public/uploads/preview/outline-gray-ticket-icon-701751694966511neynkpju2t.png"
          alt=""
        />{" "}
        <img
          className="size-50 object-cover bg-black object-center"
          src="https://www.citypng.com/public/uploads/preview/outline-gray-ticket-icon-701751694966511neynkpju2t.png"
          alt=""
        />{" "}
        <img
          className="size-50 object-cover bg-black object-center"
          src="https://www.citypng.com/public/uploads/preview/outline-gray-ticket-icon-701751694966511neynkpju2t.png"
          alt=""
        />
      </div>
    </div>
  );
});
