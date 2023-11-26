"use client";

import { getErrorMsgByPropertyName } from "@/utils/schemaValidator";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
  name: string;
  label?: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: Record<string, unknown>;
}

const FormInput = ({
  name,
  label,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMsgByPropertyName(errors, name);
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              id={id}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              id={id}
            />
          )
        }
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormInput;
