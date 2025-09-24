import { Select } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";

export const MovieSort = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value: string) => {
    const a = value.split(".")[1];
    searchParams.set("sort_by", a);
    setSearchParams(searchParams);
  };
  return (
    <Select
      onChange={handleChange}
      className="w-60"
      placeholder="Sort by"
      options={[
        { value: "popularity.desc", label: "Popuplar" },
        { value: "vote_average.asc", label: "Vote -" },
        { value: "vote_average.desc", label: "Vote +" },
      ]}
    />
  );
});
