"use client";
import { adminSchema } from "@/Schemas/admin";
import AcDepartmentField from "@/components/form/AcDepartmentField";
import AcFacultyField from "@/components/form/AcFacultyField";
import FormDatePicker from "@/components/form/FormDatePicker";
import FormInput from "@/components/form/FormInput";
import FromSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import From from "@/components/form/From";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import { useAddAdminMutation } from "@/redux/api/adminApi";
import { useGetDepartmentsQuery } from "@/redux/api/departmentApi";
import { useAddFacultyMutation } from "@/redux/api/facultyApi";
import { IDepartments } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import React from "react";

const CreateFacultyPage = () => {
  const { data, isLoading } = useGetDepartmentsQuery({ limit: 100, page: 1 });

  const [addFaculty] = useAddFacultyMutation();
  //@ts-ignore
  const departments: IDepartments[] = data?.departments;
  const departmentOptions =
    departments &&
    departments.map((department) => {
      return {
        label: department?.title,
        value: department.id,
      };
    });

  const onSubmit = async (values: any) => {
    const obj = { ...values };

    const file = obj["file"];
    delete obj["file"];

    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("creating....");
    try {
      await addFaculty(data);
      message.success("Admin Created Successfully");
    } catch (error: any) {
      message.error(error);
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Admin</h1>

      <div>
        <From submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Faculty Information
            </p>
            <Row gutter={{ sm: 8, md: 24 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="faculty.name.firstName"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="faculty.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="faculty.name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FromSelectField
                  name="faculty.gender"
                  size="large"
                  label="Gender"
                  options={genderOptions}
                  placeholder="select gender"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <AcFacultyField
                  name="faculty.academicFaculty"
                  label="Academic Faculty"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <AcDepartmentField
                  name="faculty.academicDepartment"
                  label="Academic Department"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <UploadImage name="file" />
              </Col>
            </Row>
          </div>
          {/* Basic Info  */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Basic Information
            </p>
            <Row gutter={{ sm: 8, md: 24 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="email"
                  name="faculty.email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="faculty.contactNo"
                  size="large"
                  label="Contact No"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="faculty.emergencyContactNo"
                  size="large"
                  label="Emergency Contact No"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px", width: "100%" }}
              >
                <FormDatePicker
                  name="faculty.dateOfBirth"
                  size="large"
                  label="Date of Birth"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FromSelectField
                  name="faculty.bloodGroup"
                  size="large"
                  label="Blood Group"
                  options={bloodGroupOptions}
                  placeholder="select blood group"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="faculty.designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{ marginBottom: "10px" }}
              >
                <FormTextArea
                  name="faculty.presentAddress"
                  label="Present Address"
                  rows={4}
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{ marginBottom: "10px" }}
              >
                <FormTextArea
                  name="faculty.parmanentAddress"
                  label="Permanent Address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </From>
      </div>
    </div>
  );
};

export default CreateFacultyPage;
