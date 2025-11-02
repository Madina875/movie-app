import { Select } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { useMovie } from "../../../entities/movie";

export const MovieCategory = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getMovieGenreList } = useMovie();
  const { data } = getMovieGenreList();

  const handleChange = (value: string) => {
    searchParams.set("with_genres", value);
    setSearchParams(searchParams);
  };
  return (
    <Select
      onChange={handleChange}
      className="rounded-md"
      placeholder="Sort by"
      style={{
        width: 200,
        backgroundColor: "#1f2937",
        color: "white",
      }}
      options={data?.genres.map((e: any) => ({
        value: e.id,
        label: e.name,
      }))}
    />
  );
});
