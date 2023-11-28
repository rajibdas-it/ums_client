"use client";

import { DatePicker, DatePickerProps } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

interface UMDatePickerProps {
  name: string;
  label?: string;
  value?: Dayjs;
  size: "large" | "small";
}

const FormYearPicker = ({ name, label, size }: UMDatePickerProps) => {
  const { control } = useFormContext();

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
            defaultValue={field.value}
            value={field.value ? dayjs().year(field.value) : null}
            onChange={(_, dateString) => {
              field.onChange(dateString);
            }}
            size={size}
            picker="year"
          />
        )}
      />
    </>
  );
};

export default FormYearPicker;
