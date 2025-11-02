import { Select } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";

export const MovieSort = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value: string) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };
  return (
    <Select
      onChange={handleChange}
      placeholder="All"
      options={[
        { value: "", label: "All" },
        { value: "popularity.desc", label: "Popular" },
        { value: "vote_average.asc", label: "Sort by Asc" },
        { value: "vote_average.desc", label: "Sort by Desc" },
      ]}
      style={{
        width: 200,
        color: "white",
      }}
      className="rounded-md"
    />
  );
});
