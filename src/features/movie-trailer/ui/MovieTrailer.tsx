import { memo } from "react";

export const MovieTrailer = memo(({ title }: any) => {
  const searchQuery = encodeURIComponent(`${title} official trailer`);

  return (
    <iframe
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed?listType=search&list=${searchQuery}`}
      title={`${title} Trailer`}
      allowFullScreen
    ></iframe>
  );
});
