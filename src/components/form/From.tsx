"use client";
import { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type FormConfig = {
  defaultValues?: Record<string, any>;
};

type FormProps = {
  children: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FormConfig;

const From = ({ children, submitHandler, defaultValues }: FormProps) => {
  const fromConfig: FormConfig = {};

  if (!!defaultValues) fromConfig["defaultValues"] = defaultValues;

  const methods = useForm<FormProps>(fromConfig);
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default From;
