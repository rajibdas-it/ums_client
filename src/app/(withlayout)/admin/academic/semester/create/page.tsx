"use client";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormInput from "@/components/form/FormInput";
import FromSelectField, {
  SelectOptions,
} from "@/components/form/FormSelectField";
import FormYearPicker from "@/components/form/FormYearPicker";
import From from "@/components/form/From";
import { useAddAcaDepartmentMutation } from "@/redux/api/academic/acaDepartmentApi";
import { useAddSemesterMutation } from "@/redux/api/academic/acaSemesterApi";
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

  const facultyData = faculties?.map((faculty: Record<string, any>) => {
    return {
      label: faculty?.title,
      value: faculty.id,
    };
  });
  const router = useRouter();

  const [addSemester] = useAddSemesterMutation();

  const createAcademicSemester = async (data: any) => {
    if (data.title === "Autum")
      data["code"] = "01"; //One way to add code in semester
    else if (data.title === "Summer") data["code"] = "02";
    else data["code"] = "03"; //Another way to add code in semester

    data.year = parseInt(data.year);
    message.loading("Creating...");
    try {
      const res = await addSemester(data);
      if (!!res) {
        await message.success("Semester created successfully");
        router.push("/admin/academic/semester");
      }
    } catch (error: any) {
      message.error(error);
    }
  };

  const semesterOptions = [
    {
      label: "Autum",
      value: "Autum",
    },
    {
      label: "Summer",
      value: "Summer",
    },
    {
      label: "Fall",
      value: "Fall",
    },
  ];

  const semesterMonthOptions = [
    {
      label: "January",
      value: "January",
    },
    {
      label: "February",
      value: "February",
    },
    {
      label: "March",
      value: "March",
    },
    {
      label: "April",
      value: "April",
    },
    {
      label: "May",
      value: "May",
    },
    {
      label: "June",
      value: "June",
    },
    {
      label: "July",
      value: "July",
    },
    {
      label: "August",
      value: "August",
    },
    {
      label: "September",
      value: "September",
    },
    {
      label: "October",
      value: "October",
    },
    {
      label: "November",
      value: "November",
    },
    {
      label: "December",
      value: "December",
    },
  ];

  return (
    <div style={{ padding: "15px" }}>
      <From submitHandler={createAcademicSemester}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FromSelectField
              name="title"
              label="Semester Title"
              size="large"
              placeholder="select"
              options={semesterOptions as SelectOptions[]}
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FromSelectField
              name="startMonth"
              label="Start Month"
              size="large"
              placeholder="select"
              options={semesterMonthOptions as SelectOptions[]}
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FromSelectField
              name="endMonth"
              label="End Month"
              size="large"
              placeholder="select"
              options={semesterMonthOptions as SelectOptions[]}
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormYearPicker name="year" label="Year" size="large" />
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
