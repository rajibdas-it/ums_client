import React from "react";
import FromSelectField, { SelectOptions } from "./FormSelectField";
import { useGetAcaDepartmentsQuery } from "@/redux/api/academic/acaDepartmentApi";

type AcFieldProps = {
  name: string;
  label: string;
};

const AcDepartmentField = ({ name, label }: AcFieldProps) => {
  const { data, isLoading } = useGetAcaDepartmentsQuery({
    page: 1,
    limit: 100,
  });

  const departments = data?.academicDepartments;

  const academicDepartments = departments?.map((item) => {
    return {
      label: item?.title,
      value: item?.id,
    };
  });

  return (
    <FromSelectField
      name={name}
      size="large"
      label={label}
      options={academicDepartments as SelectOptions[]}
      placeholder="Select Academic Department"
    />
  );
};

export default AcDepartmentField;
