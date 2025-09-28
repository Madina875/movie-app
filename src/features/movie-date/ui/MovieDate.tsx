import { DatePicker, Space, type DatePickerProps } from "antd";
import { memo, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { useMovie } from "../../../entities/movie";

export const MovieDate = memo(() => {
  const [startDate, setStartDate] = useState<any>("");
  const [endtDate, setEndDate] = useState<any>("");
  //   const { getMovieGenreList } = useMovie();
  //   const { data } = getMovieGenreList();

  const onChangeStart: DatePickerProps["onChange"] = (date, dateString) => {
    setStartDate(dateString);
    console.log(startDate);
    console.log(date);
  };
  const onChangeEnd: DatePickerProps["onChange"] = (date, dateString) => {
    setEndDate(dateString);
    console.log(date);
    console.log(endtDate);
  };

  return (
    <Space direction="horizontal">
      <DatePicker onChange={onChangeStart} />
      <DatePicker onChange={onChangeEnd} />
    </Space>
  );
});
