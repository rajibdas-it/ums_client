"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};
type SelectFieldProps = {
  name: string;
  label?: string;
  options?: SelectOptions[];
  size?: "large" | "small";
  value?: string | string[] | undefined;
  defaultValue?: SelectOptions;
  placeholder?: string;
};

const FromSelectField = ({
  name,
  label,
  size,
  value,
  placeholder,
  options,
  defaultValue,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            style={{ width: "100%" }}
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FromSelectField;
