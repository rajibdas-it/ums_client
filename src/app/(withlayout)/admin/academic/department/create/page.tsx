"use client";
import FormInput from "@/components/form/FormInput";
import FromSelectField, {
  SelectOptions,
} from "@/components/form/FormSelectField";
import From from "@/components/form/From";
import { useAddAcaDepartmentMutation } from "@/redux/api/academic/acaDepartmentApi";
import {
  useAddAcaFacultyMutation,
  useGetAcaFacultiesQuery,
} from "@/redux/api/academic/facultyApi";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const CreateAcademicFaculty = () => {
  const { data, isLoading } = useGetAcaFacultiesQuery({ page: 1, limit: 1000 });
  const [addAcaDepartment] = useAddAcaDepartmentMutation();
  const faculties = data?.faculties;

  console.log(faculties);

  const facultyData = faculties?.map((faculty: Record<string, any>) => {
    return {
      label: faculty?.title,
      value: faculty.id,
    };
  });
  const router = useRouter();

  const [addAcaFaculty] = useAddAcaFacultyMutation();

  const createAcaFacultyHandler = async (data: any) => {
    console.log(data);
    message.loading("Creating...");
    try {
      const res = await addAcaDepartment(data);
      if (!!res) {
        await message.success("Department created successfully");
        router.push("/admin/academic/department");
      }
    } catch (error: any) {
      console.log(error);
      message.error(error);
    }
  };
  return (
    <div style={{ padding: "15px" }}>
      <From submitHandler={createAcaFacultyHandler}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" type="text" size="large" label="Title" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FromSelectField
              name="academicFacultyId"
              label="Academic Faculty"
              size="large"
              placeholder="select"
              options={facultyData as SelectOptions[]}
            />
          </Col>
        </Row>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </From>
    </div>
  );
};

export default CreateAcademicFaculty;
