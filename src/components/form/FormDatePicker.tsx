"use client";

import { DatePicker, DatePickerProps } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

interface UMDatePickerProps {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size: "large" | "small";
}

const FormDatePicker = ({ name, label, onChange, size }: UMDatePickerProps) => {
  const { control, setValue } = useFormContext();
  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };

  return (
    <>
      {label ? label : null}
      <br />

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            style={{ width: "100%" }}
            value={dayjs(field.value) || ""}
            onChange={handleOnChange}
            size={size}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
