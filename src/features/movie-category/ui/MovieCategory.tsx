import { Select } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { useMovie } from "../../../entities/movie";

export const MovieCategory = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getMovieGenreList } = useMovie();
  const { data } = getMovieGenreList();
  console.log(data?.genres);

  const handleChange = (value: string) => {
    searchParams.set("with_genres", value);
    setSearchParams(searchParams);
    console.log(value);
  };
  return (
    <Select
      onChange={handleChange}
      className="w-60"
      placeholder="Sort by"
      options={data?.genres.map((e: any) => ({
        value: e.id,
        label: e.name,
      }))}
    />
  );
});
