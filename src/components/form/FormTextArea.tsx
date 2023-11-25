"use client";

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

interface ITextAreaInput {
  name: string;
  label?: string;
  rows?: number;
  value?: string | string[] | undefined;
  placeholder?: string;
}

const FormTextArea = ({
  name,
  label,
  value,
  placeholder,
  rows,
}: ITextAreaInput) => {
  const { control } = useFormContext();

  return (
    <div className={`flex flex-col w-full`}>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
