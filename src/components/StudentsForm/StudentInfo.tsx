"use client";
import { Button, Col, Row } from "antd";
import From from "../form/From";
import FormInput from "../form/FormInput";
import FromSelectField from "../form/FormSelectField";
import { departmentOptions, genderOptions } from "@/constants/global";
import UploadImage from "../ui/UploadImage";

const StudentInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <Row gutter={{ sm: 8, md: 24 }}>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.name.firstName"
            size="large"
            label="First Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.name.middleName"
            size="large"
            label="Middle Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.name.lastName"
            size="large"
            label="Last Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FormInput
            type="password"
            name="password"
            size="large"
            label="Password"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FromSelectField
            name="student.gender"
            size="large"
            label="Gender"
            options={genderOptions}
            placeholder="select Department"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FromSelectField
            name="student.academicSemester"
            size="large"
            label="Academic Semester"
            options={genderOptions}
            placeholder="Academic Semester"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FromSelectField
            name="student.academicFaculty"
            size="large"
            label="Academic Faculty"
            options={departmentOptions}
            placeholder="select Department"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
          <FromSelectField
            name="student.academicDepartment"
            size="large"
            label="Academic Department"
            options={departmentOptions}
            placeholder="select Department"
          />
        </Col>

        <Col className="gutter-row" span={6}>
          <UploadImage />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;
