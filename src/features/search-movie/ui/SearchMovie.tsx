import { memo, useState } from "react";
import { useSearchMovie } from "../model/useSearchMovie";
import { AudioOutlined } from "@ant-design/icons";
import { Empty, Input, Space } from "antd";
import type { GetProps } from "antd";
import useDebounce from "../../../shared/hooks/useDebounce";
import { MovieList } from "../../../widgets/movie-list";

export const SearchMovie = memo(() => {
  const [value, setValue] = useState("");
  const { getMovieBySearch } = useSearchMovie();
  const debounceValue = useDebounce(value, 800);
  const { data, isFetching } = getMovieBySearch({ query: debounceValue });
  type SearchProps = GetProps<typeof Input.Search>;
  const { Search } = Input;

  const onSearch: SearchProps["onSearch"] = (value, _e, _) => {
    setValue(value);
  };

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  return (
    <div className="mb-20 min-h-100">
      <div className="container">
        <div className="my-10 w-full items-center justify-center">
          <Space direction="vertical">
            <Search
              className="searchinp"
              placeholder="input search text"
              enterButton="Search"
              size="large"
              suffix={suffix}
              onSearch={onSearch}
            />
          </Space>
        </div>
      </div>
      <MovieList movies={data?.results} />
      {!data?.results?.length && debounceValue && !isFetching && <Empty />}
    </div>
  );
});
