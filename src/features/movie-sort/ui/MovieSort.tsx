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
      className="sorting w-50 bg-gray-800 text-white border-gray-700"
      placeholder="All"
      options={[
        { value: "popularity.desc", label: "popular" },
        { value: "vote_average.asc", label: "sort by asc" },
        { value: "vote_average.desc", label: "sort by desc" },
      ]}
    />
  );
});
