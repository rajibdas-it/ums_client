import React from "react";
import FromSelectField, { SelectOptions } from "./FormSelectField";
import { useGetAcaFacultiesQuery } from "@/redux/api/academic/facultyApi";

type ACFieldsProps = {
  name: string;
  label: string;
};

const AcFacultyField = ({ name, label }: ACFieldsProps) => {
  const { data, isLoading } = useGetAcaFacultiesQuery({ page: 1, limit: 100 });

  const faculties = data?.faculties;

  const academicFaculties = faculties?.map((faculty) => {
    return {
      label: faculty.title,
      value: faculty.id,
    };
  });

  return (
    <FromSelectField
      name={name}
      size="large"
      label={label}
      options={academicFaculties as SelectOptions[]}
      placeholder="Select Academic Faculty"
    />
  );
};

export default AcFacultyField;
