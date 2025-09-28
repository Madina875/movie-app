import { DatePicker, Space, type DatePickerProps } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";

export const MovieDate = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeStart: DatePickerProps["onChange"] = (_, dateString) => {
    searchParams.set("primary_release_date.gte", dateString as string);
    setSearchParams(searchParams);
  };

  const onChangeEnd: DatePickerProps["onChange"] = (_, dateString) => {
    searchParams.set("primary_release_date.lte", dateString as string);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Space direction="horizontal">
        <DatePicker onChange={onChangeStart} />
        <DatePicker onChange={onChangeEnd} />
      </Space>
    </div>
  );
});
