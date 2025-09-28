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
        <DatePicker
          className="sorting"
          popupClassName="sorting-dropdown"
          style={{ width: 150 }}
          onChange={onChangeStart}
        />
        <DatePicker
          className="sorting"
          popupClassName="sorting-dropdown"
          style={{ width: 150 }}
          onChange={onChangeEnd}
        />
      </Space>
    </div>
  );
});
